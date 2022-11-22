import { SearchType } from 'filter-data';
import { Filter } from './types';
import { DataType, Type } from '../../../../../../const';

export const Filters: Record<SearchType, Filter> = {
  [SearchType.EQ]: { value: SearchType.EQ, label: 'Equal' },
  [SearchType.GT]: { value: SearchType.GT, label: 'Greater' },
  [SearchType.GTE]: { value: SearchType.GTE, label: 'Greater or equal' },
  [SearchType.LT]: { value: SearchType.LT, label: 'Less' },
  [SearchType.LTE]: { value: SearchType.LTE, label: 'Less or equal' },
  [SearchType.LK]: { value: SearchType.LK, label: 'Like' },
  [SearchType.NE]: { value: SearchType.NE, label: 'Not equal' },
  [SearchType.NLK]: { value: SearchType.NLK, label: 'Not like' },
};

const StringFilters: Filter[] = [Filters.equal, Filters.like, Filters.notequal, Filters.notlike];

const NumberAndDateFilters: Filter[] = [
  Filters.equal,
  Filters.greater,
  Filters.greaterorequal,
  Filters.less,
  Filters.lessorequal,
  Filters.notequal,
];

const BooleanFilters: Filter[] = [Filters.equal];

export const FiltersForDataType: Record<DataType, Filter[]> = {
  [Type.DATE]: NumberAndDateFilters,
  [Type.STRING]: StringFilters,
  [Type.NUMBER]: NumberAndDateFilters,
  [Type.BOOLEAN]: BooleanFilters,
};
