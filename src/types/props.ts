import { ReactNode } from 'react';
import { IStarships, IStarship } from './api';
import { HeadCell } from './tables';

export type TChildren = {
  children: ReactNode;
};

export type DashBoardPageProps = {
  data: IStarships;
};

export type CombinedTableData = {
  headerCells: HeadCell[];
  shipsData: IStarship[];
  complex: boolean;
};

export type TableProps = {
  title: string;
  data: CombinedTableData;
};

export type TPayload = {
  name: string;
  value: number;
};

export type TShape = {
  cx: number;
  cy: number;
  midAngle: number;
  innerRadius: number;
  outerRadius: number;
  startAngle: number;
  endAngle: number;
  fill: string;
  payload: TPayload;
  value: string;
};
