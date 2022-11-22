import { useMemo } from 'react';
import { AxisDomain } from 'recharts/types/util/types';

type Props = {
  selectedFieldsValues: Record<string, string[]>;
};

const useDomain = ({ selectedFieldsValues }: Props): AxisDomain => {
  return useMemo(() => {
    const values: number[] = Object.values(selectedFieldsValues)
      .reduce((previousValue, currentValue) => [...previousValue, ...currentValue], [])
      .map((value) => +value);
    const min = Math.floor(Math.min(...values));
    const max = Math.ceil(Math.max(...values));
    return [min, max];
  }, [selectedFieldsValues]);
};

export default useDomain;
