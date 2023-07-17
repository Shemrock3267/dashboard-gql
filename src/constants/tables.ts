import { HeadCell } from '../types/tables';
import { $l } from '../helpers/getLocale';

export const balancesHeadCells: HeadCell[] = [
  {
    id: 'name',
    numeric: false,
    disablePadding: true,
    label: $l('TABLE_COLUMN_NAME'),
  },
  {
    id: 'position',
    numeric: true,
    disablePadding: false,
    label: $l('TABLE_COLUMN_RATING'),
  },
  {
    id: 'cost',
    numeric: true,
    disablePadding: false,
    label: $l('TABLE_COLUMN_COST'),
  },
  {
    id: 'length',
    numeric: true,
    disablePadding: false,
    label: $l('TABLE_COLUMN_LENGTH'),
  },
  {
    id: 'type',
    numeric: true,
    disablePadding: false,
    label: $l('TABLE_COLUMN_TYPE'),
  },
];

export const statementsHeadCells: HeadCell[] = [
  {
    id: 'date',
    numeric: false,
    disablePadding: true,
    label: $l('TABLE_COLUMN_DATE'),
  },
  {
    id: 'endBalance',
    numeric: true,
    disablePadding: false,
    label: $l('TABLE_COLUMN_END_BALANCE'),
  },
  {
    id: 'moneyEarned',
    numeric: true,
    disablePadding: false,
    label: $l('TABLE_COLUMN_MONEY_EARNED'),
  },
  {
    id: 'moneyOut',
    numeric: true,
    disablePadding: false,
    label: $l('TABLE_COLUMN_MONEY_OUT'),
  },
  {
    id: 'moneyIn',
    numeric: true,
    disablePadding: false,
    label: $l('TABLE_COLUMN_MONEY_IN'),
  },
];
