import React, { useState } from 'react';
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Toolbar,
  Typography,
  Paper,
} from '@mui/material';

import { EnhancedTableProps } from '../../types/tables';
import { TableProps } from '../../types/props';
import { getMonth } from '../../helpers/getMonth';
import { capitalize } from '../../helpers/capitalize';

function EnhancedTableHead(props: EnhancedTableProps) {
  const { headers } = props;

  return (
    <TableHead>
      <TableRow>
        {headers.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sx={{ fontWeight: 600 }}
          >
            {headCell.label.toUpperCase()}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

function TableToolbar({ title }: Omit<TableProps, 'data'>) {
  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
      }}
    >
      <Typography
        sx={{ flex: '1 1 100%', fontWeight: 600 }}
        variant='h5'
        id='tableTitle'
        component='div'
      >
        {title}
      </Typography>
    </Toolbar>
  );
}

export default function EnhancedTable({ title, data }: TableProps) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const { headerCells, shipsData, complex } = data;

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - shipsData.length) : 0;

  const visibleRows = shipsData.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  return (
    <Box sx={{ width: '100%' }}>
      <Paper sx={{ width: '100%', mb: 2 }}>
        <TableToolbar title={title} />
        <TableContainer
          sx={{
            pl: { sm: 2 },
            pr: { xs: 1, sm: 1 },
          }}
        >
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby='tableTitle'
            size='medium'
          >
            <EnhancedTableHead headers={headerCells} />
            <TableBody>
              {visibleRows.map((row, index) => {
                const labelId = `enhanced-table-cell-${index}`;

                if (complex)
                  return (
                    <TableRow
                      hover
                      tabIndex={-1}
                      key={row.name}
                      sx={{ cursor: 'pointer' }}
                    >
                      <TableCell
                        component='th'
                        id={labelId}
                        scope='row'
                        padding='none'
                      >
                        {capitalize(row.name)}
                      </TableCell>
                      <TableCell align='right'>
                        {row.hyperdriveRating}
                      </TableCell>
                      <TableCell align='right'>₹ {row.costInCredits}</TableCell>
                      <TableCell align='right'>{row.length}</TableCell>
                      <TableCell align='right'>
                        {capitalize(row.starshipClass)}
                      </TableCell>
                    </TableRow>
                  );

                return (
                  <TableRow
                    hover
                    tabIndex={-1}
                    key={row.name}
                    sx={{ cursor: 'pointer' }}
                  >
                    <TableCell
                      component='th'
                      id={labelId}
                      scope='row'
                      padding='none'
                    >
                      {getMonth(row.created)}
                    </TableCell>
                    <TableCell align='right'>₹ {row.costInCredits}</TableCell>
                    <TableCell align='right'>₹ {row.costInCredits}</TableCell>
                    <TableCell align='right'>₹ {row.costInCredits}</TableCell>
                    <TableCell align='right'>₹ {row.costInCredits}</TableCell>
                  </TableRow>
                );
              })}

              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: 53 * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component='div'
          count={shipsData.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
}
