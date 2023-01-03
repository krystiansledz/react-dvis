import React, { ChangeEvent, useEffect } from 'react';
import { useChartWizardContext } from '../../../context';
import TextFormFieldField from '../../../../../components/form/text/field';
import styled from 'styled-components';
import { Chip, SelectChangeEvent } from '@mui/material';
import DataPreview from '../../../../../components/data/preview';
import { Formatters } from '../../../../../utils/format';
import { ChartStepsKeys } from '../../../schemas';
import _ from 'lodash';
import { DataObject } from '../../../../types';
import { getDataFromPath, setValue } from '../../../../../utils/data';
import SelectFormat from '../../../../../components/form/select/format';

const ChartWizardAdjustPage: React.FC = () => {
  const { data, save } = useChartWizardContext();

  const { types, names, values, format, formattedData } = data;

  const dataKeys = Object.keys(types);

  const handleChange =
    (key: ChartStepsKeys, name: string) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | SelectChangeEvent) => {
      save({
        [key]: {
          ...data[key],
          [name]: event.target.value,
        },
      });
    };

  useEffect(() => {
    if (values && format && types) {
      save({
        formattedData: _.cloneDeep(values).map((row: DataObject, index: number) => {
          Object.entries(format).forEach(([key, value]) => {
            const originalValue = getDataFromPath(values[index], key);
            setValue(
              row,
              key,
              Formatters[types[key]][value as string]?.(originalValue) ?? // custom format
                originalValue, // original value
            );
          });

          return row;
        }),
      });
    }
  }, [format]);

  return (
    <Container>
      ADJUST PAGE
      {formattedData && names && (
        <Row>
          <DataPreview headers={names} rows={formattedData} />
        </Row>
      )}
      <Row>
        {names && (
          <Center>
            <Chip color='primary' label='Name' />
          </Center>
        )}
        {format && (
          <Center>
            <Chip color='primary' label='Format' />
          </Center>
        )}
      </Row>
      {dataKeys.map((key) => (
        <Row key={key}>
          {names && (
            <TextFormFieldField
              name={`name-${key}`}
              value={names[key]}
              label={key}
              onChange={handleChange('names', key)}
            />
          )}
          {format && (
            <SelectFormat
              name={`format-${key}`}
              value={format[key]}
              label={key}
              type={types[key]}
              onChange={handleChange('format', key)}
            />
          )}
        </Row>
      ))}
    </Container>
  );
};

export default ChartWizardAdjustPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-bottom: 3rem;
`;

const Row = styled.div`
  display: flex;
  gap: 1rem;
  > * {
    flex: 1 1 0;
  }
`;

const Center = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
