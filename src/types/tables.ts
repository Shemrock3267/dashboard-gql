export interface Data {
  position: number;
  length: number;
  cost: number;
  endBalance: number;
  moneyEarned: number;
  moneyOut: number;
  moneyIn: number;
  name: string;
  type: string;
  date: string;
}

export type Order = 'asc' | 'desc';

export interface HeadCell {
  disablePadding: boolean;
  id: keyof Data;
  label: string;
  numeric: boolean;
}

export interface EnhancedTableProps {
  headers: HeadCell[];
}
