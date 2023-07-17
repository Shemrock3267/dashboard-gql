import React from 'react';
import { Grid } from '@mui/material';

import ChartCard from '../components/cards/ChartCard';
import PieCard from '../components/cards/PieCard';
import TableCard from '../components/cards/TableCard';
import StackedChartCard from '../components/cards/StackedChartCard';
import NavBar from '../components/navbar';
import { DashBoardPageProps, CombinedTableData } from '../types/props';
import { IStarship } from '../types/api';
import { $l } from '../helpers/getLocale';
import { balancesHeadCells, statementsHeadCells } from '../constants/tables';

const DashBoardPage = ({
  data: {
    allStarships: { starships },
  },
}: DashBoardPageProps) => {
  const shipsData = starships.filter((obj) => {
    for (const key in obj) {
      if (obj[key as keyof IStarship] === null) {
        return false;
      }
    }
    return true;
  });

  const balanceData: CombinedTableData = {
    headerCells: balancesHeadCells,
    complex: true,
    shipsData,
  };
  const statementsData: CombinedTableData = {
    headerCells: statementsHeadCells,
    complex: false,
    shipsData,
  };

  return (
    <Grid container spacing={2} sx={{ pt: 1 }}>
      <Grid item xs={12}>
        <NavBar />
      </Grid>

      <Grid item xs={12} md={6}>
        <ChartCard />
      </Grid>

      <Grid item xs={12} md={6}>
        <PieCard />
      </Grid>

      <Grid item xs={12}>
        <TableCard title={$l('TABLE_HEADER_COLUMN_SHIPS')} data={balanceData} />
      </Grid>

      <Grid item xs={12}>
        <StackedChartCard />
      </Grid>

      <Grid item xs={12}>
        <TableCard
          title={$l('TABLE_HEADER_MONTHLY_STATEMENTS')}
          data={statementsData}
        />
      </Grid>
    </Grid>
  );
};

export default DashBoardPage;
