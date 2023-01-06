import { Data } from '../../global/Interfaces';
export interface Column {
  label: string;
  key: string;
  type: string;
}
export const columns: Column[] = [
  { label: 'Name', key: 'name', type: 'text' },

  { label: 'Date', key: 'date', type: 'date' },

  { label: 'Category', key: 'category', type: 'text' },

  { label: 'Amount', key: 'amount', type: 'number' },

  { label: 'Created At', key: 'created_at', type: 'date' },
];

export const rows: Data[] = [];

export function getProperty<T, K extends keyof T>(o: T, propertyName: K): T[K] {
  return o[propertyName]; // o[propertyName] is of type T[K]
}
