import React from 'react';
import Sidenavbar from '../../../components/Sidenavbar';
import { Box, Button, Typography, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from '@mui/material';

const columns = [
  { id: 'name', label: 'Project Name', minWidth: 170 },
  { id: 'code', label: 'Project Manager Name', minWidth: 100 },
  { id: 'client', label: 'Client Name', minWidth: 170, align: 'right' },
  { id: 'date', label: 'Date', minWidth: 170, align: 'right' },
  { id: 'duration', label: 'Duration', minWidth: 170, align: 'right' },
  { id: 'status', label: 'Status', minWidth: 170, align: 'right' },
  { id: 'action', label: 'Action', minWidth: 170 },
];

function createData(name, code, client, date, duration, status) {
  return { name, code, client, date, duration, status };
}

const rows = [
  createData('Project A', 'Alice', 'Client X', '2024-11-12', '6 months', 'In Progress'),
  createData('Project B', 'Bob', 'Client Y', '2024-09-01', '3 months', 'Completed'),
  createData('Project C', 'Charlie', 'Client Z', '2024-10-15', '1 year', 'Pending'),
];

function Addproject() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" } }}>
      <Sidenavbar />
      <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "column", alignItems: "center", p: 3 }}>
        <Box sx={{ display: "flex", justifyContent: "center", width: '100%', mb: 2 }}>
          <Typography variant="h4" component="h1" sx={{ fontWeight: 'bold', color: '#3f51b5', textAlign: 'center' }}>
            Project List
          </Typography>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between", width: '100%', mb: 3 }}>
          <Button variant="contained" color="primary" sx={{ alignSelf: 'flex-start' }}>Add Project</Button>
        </Box>
        <TableContainer component={Paper} sx={{ maxWidth: 1200 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.name}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.id === 'action' ? (
                          <Box sx={{ display: 'flex', gap: 1 }}>
                            <Button variant="contained" color="success" size="small">
                              Update
                            </Button>
                            <Button variant="contained" color="error" size="small">
                              Delete
                            </Button>
                          </Box>
                        ) : (
                          value
                        )}
                      </TableCell>
                    );
                  })}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          sx={{ mt: 2 }}
        />
      </Box>
    </Box>
  );
}

export default Addproject;
