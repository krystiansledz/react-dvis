import { useGeneratorWizardContext } from '../../../context';
import SelectType from './components/select';
import styled from 'styled-components';
import TextFormFieldField from '../../../../../components/form/text/field';
import { Chip, SelectChangeEvent } from '@mui/material';
import React, { ChangeEvent, useEffect } from 'react';
import DataPreview from '../../../../../components/data/preview';
import { GeneratorStepsKeys } from '../../../schemas';
import SelectFormat from './components/format';
import { getDataFromPath, setValue } from '../../../../../utils/data';
import _ from 'lodash';
import { Formatters, DefaultOptions } from '../../../../../utils/format';
import { DataObject } from 'react-dvis/dist/cjs/chart/types';

const GeneratorWizardAdjustPage = () => {
  const { data: contextData, save } = useGeneratorWizardContext();

  const { types, names, data, format, formattedData } = contextData;

  const dataKeys = Object.keys(types || {});

  const handleChange =
    (key: GeneratorStepsKeys, name: string) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | SelectChangeEvent) => {
      const newData = {
        [key]: {
          ...contextData[key],
          [name]: event.target.value,
        },
      };

      if (key === 'types') {
        save({
          ...newData,
          format: {
            ...contextData.format,
            [name]: DefaultOptions[types[key]],
          },
        });
      } else {
        save(newData);
      }
    };

  useEffect(() => {
    if (data && format && types) {
      save({
        formattedData: _.cloneDeep(data).map((row: DataObject, index: number) => {
          Object.entries(format).forEach(([key, value]) => {
            const originalValue = getDataFromPath(data[index], key);
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
      {data && names && (
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
        {types && (
          <Center>
            <Chip color='primary' label='Type' />
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
          {types && (
            <SelectType name={`type-${key}`} value={types[key]} label={key} onChange={handleChange('types', key)} />
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

export default GeneratorWizardAdjustPage;

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
