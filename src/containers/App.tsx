import React from 'react';
import { Box, Container } from '@mui/material';

import DashBoardPage from '../pages/DashboardPage';
import Loader from '../components/loader';
import { useGetData } from '../hooks/useGetData';
import { mockShips } from '../constants/query';

function App() {
  const { data, loading } = useGetData(mockShips);

  return (
    <Container maxWidth='xl' disableGutters>
      <Box sx={{ height: '100vh', margin: 0 }}>
        {loading ? <Loader /> : <DashBoardPage data={data} />}
      </Box>
    </Container>
  );
}

export default App;
