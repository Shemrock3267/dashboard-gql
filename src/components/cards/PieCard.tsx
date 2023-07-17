import React, { useCallback, useState } from 'react';
import { PieChart, Pie, Sector, ResponsiveContainer } from 'recharts';
import { Typography, Toolbar, Paper, Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import { generateCompanyData } from '../../helpers/generateMockData';
import { useGetNodeRefSize } from '../../hooks/useGetNodeRefSize';
import { TShape } from '../../types/props';
import { $l } from '../../helpers/getLocale';

const data = generateCompanyData(4);

const renderActiveShape = (props: TShape) => {
  const RADIAN = Math.PI / 180;
  const {
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    value,
  } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? 'start' : 'end';

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor='middle' fill={fill}>
        {payload.name}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path
        d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
        stroke={fill}
        fill='none'
      />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke='none' />
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        textAnchor={textAnchor}
        fill='#333'
      >{`Value ${value}`}</text>
    </g>
  );
};

const PieCard = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const onPieEnter = useCallback(
    (_: number, index: number) => {
      setActiveIndex(index);
    },
    [setActiveIndex]
  );
  const { parentNodeSize, parentNodeRef } = useGetNodeRefSize();
  const theme = useTheme();

  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Paper sx={{ width: '100%', mb: 0, p: 0 }} ref={parentNodeRef}>
        <Toolbar
          sx={{
            pl: { sm: 2 },
            pr: { xs: 1, sm: 1 },
            mb: -7,
          }}
        >
          <Typography
            sx={{ flex: '1 1 100%', fontWeight: 600 }}
            variant='h5'
            id='tableTitle'
            component='div'
          >
            {$l('CHART_AUM_TITLE')}
          </Typography>
        </Toolbar>
        <ResponsiveContainer width='100%' height={400}>
          <PieChart>
            <Pie
              activeIndex={activeIndex}
              activeShape={renderActiveShape}
              data={data}
              cx={parentNodeSize.width / 2}
              cy={200}
              innerRadius={60}
              outerRadius={80}
              fill={theme.palette.secondary.light}
              dataKey='value'
              onMouseEnter={onPieEnter}
            />
          </PieChart>
        </ResponsiveContainer>
      </Paper>
    </Box>
  );
};

export default PieCard;
