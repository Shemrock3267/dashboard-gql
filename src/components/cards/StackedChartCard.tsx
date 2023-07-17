import React from 'react';
import { AreaChart, Area, Tooltip } from 'recharts';
import { Box, Paper } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import { generateAreaChartData } from '../../helpers/generateMockData';
import { useGetNodeRefSize } from '../../hooks/useGetNodeRefSize';

const mockData = generateAreaChartData(15);

const StackedChartCard = () => {
  const theme = useTheme();
  const { parentNodeRef, parentNodeSize } = useGetNodeRefSize();

  return (
    <Box sx={{ width: '100%' }} ref={parentNodeRef}>
      <Paper sx={{ width: '100%', mb: 2, p: 2 }}>
        <AreaChart
          width={parentNodeSize.width}
          height={400}
          data={mockData}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <Tooltip />
          <Area
            type='monotone'
            dataKey='a'
            stackId='1'
            stroke={theme.palette.primary.main}
            fill={theme.palette.primary.main}
          />
          <Area
            type='monotone'
            dataKey='b'
            stackId='1'
            stroke={theme.palette.error.main}
            fill={theme.palette.error.main}
          />
          <Area
            type='monotone'
            dataKey='c'
            stackId='1'
            stroke={theme.palette.grey[400]}
            fill={theme.palette.grey[400]}
          />
          <Area
            type='monotone'
            dataKey='d'
            stackId='1'
            stroke={theme.palette.success.main}
            fill={theme.palette.success.main}
          />
          <Area
            type='monotone'
            dataKey='e'
            stackId='1'
            stroke={theme.palette.warning.main}
            fill={theme.palette.warning.main}
          />
        </AreaChart>
      </Paper>
    </Box>
  );
};

export default StackedChartCard;
