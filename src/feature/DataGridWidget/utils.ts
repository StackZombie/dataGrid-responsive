import { Data } from '../../global/Interfaces';
export interface Column {
  label: string;
  key: string;
  type: string;
}
export const columns: Column[] = [
  { label: '#', key: '#', type: 'string' },

  { label: 'Name', key: 'name', type: 'string' },

  { label: 'Date', key: 'date', type: 'date' },

  { label: 'Catagory', key: 'catagory', type: 'string' },

  { label: 'Amount', key: 'amount', type: 'number' },

  { label: 'Created At', key: 'created_at', type: 'date' },
];

export const rows: Data[] = [];
