import React, { useEffect } from 'react';
import { useChartWizardContext } from '../../../context';
import MultiSelect from '../../../../../components/form/select/multi';
import styled from 'styled-components';
import useDomain from '../../../../hooks/useDomain';
import LineChart from '../../../../type/line';
import { ChartType, ChartTypes, DataObject } from '../../../../types';
import Select from '../../../../../components/form/select';
import BarChart from '../../../../type/bar';
import AreaChart from '../../../../type/area';
import ScatterChart from '../../../../type/scatter';
import { useCurrentPng } from 'recharts-to-png';
import SelectField from '../../../../../components/form/select';
import { getOptionsFromRecord } from '../../../../../utils/form';

const ChartWizardCreatePage: React.FC = () => {
  const {
    data: { types, names, chartType, filteredData },
    save,
  } = useChartWizardContext();

  const [getPng, { ref }] = useCurrentPng();

  const availableFields = Object.keys(types);
  const availableFieldsOptions = availableFields.map((value) => ({
    value,
    label: names[value],
  }));

  const [values, setValues] = React.useState<{
    fields: string[];
    xAxis: string;
    title: string;
  }>({ fields: [], xAxis: '', title: '' });

  const handleChartTypeChange = (value: string) => {
    save({ chartType: value });
  };

  const handleChange = (name: string, value: string | string[]) => {
    setValues((prevState) => ({ ...prevState, [name]: value }));
  };

  const selectedFieldsValues: Record<string, string[]> = Object.fromEntries(
    values.fields.map((field) => [field, getValuesOfField(filteredData, field)]),
  );

  const yDomain = useDomain({ selectedFieldsValues });

  const sharedChartProps = {
    data: filteredData,
    names: names,
    fields: values.fields,
    xAxis: values.xAxis,
    title: values.title,
  };

  useEffect(() => {
    save({ getPng: getPng });
  }, [ref.current, getPng, save]);

  return (
    <>
      <SelectField label='Chart type' name='chart_type' options={chartOptions} onChange={handleChartTypeChange} />
      <MultiSelect
        name={'lines'}
        label={'Lines'}
        options={availableFieldsOptions}
        onChange={(value) => handleChange('fields', value)}
      />
      <Select
        name='xAxis'
        label='X-axis'
        options={availableFieldsOptions}
        onChange={(value) => handleChange('xAxis', value)}
      />
      {/*<TextFormFieldField*/}
      {/*  name="title"*/}
      {/*  label="Title"*/}
      {/*  value={values.title}*/}
      {/*  onChange={(e) => handleChange("title", e.target.value)}*/}
      {/*/>*/}
      <Container>
        {chartType === ChartType.LINE && <LineChart {...sharedChartProps} domain={yDomain} downloadRef={ref} />}
        {chartType === ChartType.BAR && <BarChart {...sharedChartProps} downloadRef={ref} />}
        {chartType === ChartType.AREA && <AreaChart {...sharedChartProps} downloadRef={ref} />}
        {chartType === ChartType.SCATTER && <ScatterChart {...sharedChartProps} domain={yDomain} downloadRef={ref} />}
      </Container>
    </>
  );
};

export default ChartWizardCreatePage;

const chartOptions = getOptionsFromRecord(ChartTypes);

const getValuesOfField = (data: DataObject[], field: string): string[] => {
  return data.map((data: Record<string, any>): string => data[field]);
};

const Container = styled.div`
  height: 20rem;
  margin-bottom: 5rem;
`;
