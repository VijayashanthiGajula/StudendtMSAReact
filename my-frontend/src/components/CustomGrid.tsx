import React from 'react';
import { Button, Container, useMediaQuery, useTheme } from '@mui/material';
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';

interface CustomGridProps {
  columns: GridColDef[];
  rows: any[];
  onAddClick: () => void;
  onEditClick: (params: GridRenderCellParams) => void;
  onDeleteClick: (id: number) => void;
  status: 'loading' | 'failed' | 'succeeded' | 'idle';
  error: string | null;
  listName: string | null;
}

const CustomGrid: React.FC<CustomGridProps> = ({
  columns,
  rows,
  onAddClick,
  onEditClick,
  onDeleteClick,
  status,
  error,
  listName
}) => {
  const theme = useTheme();
  const xs = useMediaQuery(theme.breakpoints.down('xs'));

  return (
    <Container>
      <h1>{listName} List</h1>
      <Button variant="contained" color="primary" sx={{ m: 2 }} onClick={onAddClick}>
        Add {listName}
      </Button>
      <DataGrid
        columns={columns}
        rows={rows}
        autoHeight 
        sx={{ 
          minWidth: 400, 
          width: '90%', 
          '& .MuiDataGrid-cell': { flex: 1, minWidth: 100 },
         '& .MuiDataGrid-columnHeaderTitle': {
            fontWeight: 'bold', // Ensure the text in header is bold
          }, }}
      />
      {status === 'loading' && <p>Loading...</p>}
      {status === 'failed' && <p>Error: {error}</p>}
      </Container>
  );
};

export default CustomGrid;
