import React, { useEffect, useMemo } from 'react';
import { useChartWizardContext } from '../../../context';
import DataPreview from '../../../../../components/ui/DataPreview';
import { useFieldArray, useForm } from 'react-hook-form';
import { AddButton, CancelButton } from '../../../../../components/ui/Buttons';
import TextFormFieldField from '../../../../../components/form/text/field';
import { MenuItem, Select } from '@mui/material';
import styled from 'styled-components';
import { filterData, SearchType } from 'filter-data';
import { SearchCondition as FilterDataSearchCondition } from 'filter-data/lib/lib/types';
import { FiltersForDataType } from './components/const';
import { DateFormatOptionsPicker, DatePickers } from '../../../../../utils/format';
import DatePicker from './components/datePicker';
import { DataObject } from '../../../../types';
import { DateTime } from 'luxon';
import { DataType, Type } from '../../../../../const';

const ChartWizardFilterPage: React.FC = () => {
  const { data, save } = useChartWizardContext();
  const { formattedData, types, format } = data;

  const { control, watch, register } = useForm<{
    filters: {
      field: string;
      type: typeof SearchType | string;
      value: string | null;
    }[];
  }>();

  const watchFilters = watch('filters');

  const { fields, append, update, remove } = useFieldArray({
    control,
    name: 'filters',
  });

  const handleAddFilter = () => {
    append({ field: '', type: '', value: '' });
  };

  const names = data.names as Record<string, string>;

  const searchConditions: SearchCondition[] =
    watchFilters
      ?.filter((filter) => !!filter.value && !!filter.type)
      .map((filter) => ({
        key: filter.field,
        type: filter.type as SearchType,
        value: filter.value as string,
      })) ?? [];

  const filteredData: DataObject[] = useMemo(() => {
    const [timeConditions, noTimeConditions] = searchConditions.reduce<[SearchCondition[], SearchCondition[]]>(
      ([p, f], searchCondition) =>
        types[searchCondition.key] === Type.DATE &&
        DateFormatOptionsPicker[format[searchCondition.key]] === DatePickers.TIME
          ? [[...p, searchCondition], f]
          : [p, [...f, searchCondition]],
      [[], []],
    );

    let data: DataObject[] = noTimeConditions.length > 0 ? filterData(formattedData, noTimeConditions) : formattedData;

    timeConditions.forEach((condition: SearchCondition) => {
      const hmsToSecondsOnly = (value: string) => {
        const splitted = value.split(':');
        return Math.pow(60, 3 - splitted.length) * splitted.reduce((acc, time) => 60 * +acc + +time, 0);
      };

      data = data.filter((value) => {
        const dataTime = hmsToSecondsOnly(value[condition.key] as string);

        const conditionDate: Date = new Date(condition.value);
        const conditionTime = hmsToSecondsOnly(
          [conditionDate.getHours(), conditionDate.getMinutes(), conditionDate.getSeconds()].join(':'),
        );

        if (condition.type === SearchType.EQ) return dataTime === conditionTime;
        if (condition.type === SearchType.NE) return dataTime !== conditionTime;
        if (condition.type === SearchType.GT) return dataTime > conditionTime;
        if (condition.type === SearchType.GTE) return dataTime >= conditionTime;
        if (condition.type === SearchType.LT) return dataTime < conditionTime;
        if (condition.type === SearchType.LTE) return dataTime <= conditionTime;
        return true;
      });
    });

    return data;
  }, [formattedData, searchConditions]);

  useEffect(() => {
    save({ filteredData });
  }, [filteredData]);

  return (
    <>
      {formattedData && names && <DataPreview headers={names} rows={filteredData} allCount={formattedData.length} />}
      <AddButton onClick={handleAddFilter}>Add filter</AddButton>
      {fields.map((field, index) => {
        const fieldDataType: DataType = field.field && types[field.field];
        const fieldType = field.field && field.type;
        const fieldFormat = format[field.field];

        const handleUpdateDateValue = (newValue: DateTime | null) => {
          console.log(newValue);
          update(index, {
            ...field,
            value: newValue ? newValue.startOf('minute').toString() : null,
          });
        };

        return (
          <Row key={field.id}>
            <Select
              value={field.field}
              onChange={(event) => {
                const dataType = types[event.target.value];
                update(index, {
                  ...field,
                  field: event.target.value,
                  type: '',
                  value: dataType === Type.DATE ? DateTime.now().startOf('minute').toString() : '',
                });
              }}
            >
              {Object.entries(names).map(([key, name]) => (
                <MenuItem key={key} value={key}>
                  {name}
                </MenuItem>
              ))}
            </Select>
            <Select
              value={field.type}
              onChange={(event) => {
                update(index, {
                  ...field,
                  type: event.target.value as typeof SearchType,
                  value: fieldDataType === Type.DATE ? DateTime.now().startOf('minute').toString() : '',
                });
              }}
              disabled={!field.field}
            >
              {FiltersForDataType[fieldDataType]?.map((filter) => (
                <MenuItem key={filter.value} value={filter.value}>
                  {filter.label}
                </MenuItem>
              ))}
            </Select>
            {(!fieldDataType || fieldDataType === Type.NUMBER || fieldDataType === Type.STRING) && (
              <TextFormFieldField {...register(`filters.${index}.value`)} disabled={!fieldType} />
            )}
            {fieldDataType === Type.BOOLEAN && (
              <Select
                value={field.value}
                onChange={(event) => {
                  update(index, {
                    ...field,
                    value: event.target.value,
                  });
                }}
                disabled={!fieldType}
              >
                <MenuItem value={'true'}>True</MenuItem>
                <MenuItem value={'false'}>False</MenuItem>
              </Select>
            )}
            {fieldDataType === Type.DATE && (
              <DatePicker
                format={DateFormatOptionsPicker[fieldFormat]}
                fieldValue={field.value}
                onUpdateValue={handleUpdateDateValue}
                disabled={!fieldType}
              />
            )}
            <CancelButton onClick={() => remove(index)}>Delete</CancelButton>
          </Row>
        );
      })}
    </>
  );
};

export default ChartWizardFilterPage;

type SearchCondition = FilterDataSearchCondition & {
  key: string;
};

const Row = styled.div`
  display: flex;
  gap: 1rem;

  > *:not(:last-child) {
    width: 50%;
  }
`;
