import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../../Redux/store';
import { getIntakes, createIntake, editIntake, deleteIntake } from '../../Redux/intakeActions';
import { Button, Container, Dialog, DialogActions, DialogContent, DialogTitle, TextField, useMediaQuery, useTheme } from '@mui/material';
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import AddIcon from '@mui/icons-material/Add';

const Intakes: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const { data: intakes, status, error } = useSelector((state: RootState) => state.intakes);

  const theme = useTheme();
  const xs = useMediaQuery(theme.breakpoints.down('xs'));  
  const [open, setOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [formData, setFormData] = useState({ intakeId: '', name: '' });

  useEffect(() => {
    if (status === 'idle') {
      dispatch(getIntakes());
    }
  }, [status, dispatch]);

  const handleAddClick = () => setOpen(true);
  const handleEditClick = (params: GridRenderCellParams) => {
    setFormData({ intakeId: params.row.intakeId, name: params.row.name });
    setEditOpen(true);
  };
  const handleDeleteClick = (intakeId: number) => dispatch(deleteIntake(intakeId));
  const handleSave = () => {
    if (formData.intakeId) {
      const intakeIdNumber = parseInt(formData.intakeId, 10);
      dispatch(editIntake({ intakeId: intakeIdNumber, name: formData.name })).then(() => {
        dispatch(getIntakes());
        setFormData({ intakeId: '', name: '' });
      });
    } 
    else {
      dispatch(createIntake({ intakeId: 0, name: formData.name }));
    }
    setOpen(false);
    setEditOpen(false);
    setFormData({ intakeId: '', name: '' });
  };

  const columns: GridColDef[] = [
    { field: 'intakeId', headerName: 'ID', headerAlign: 'center', flex: 1, align: 'center', minWidth: 100 },
    { field: 'name', headerName: 'Name', headerAlign: 'center', flex: 2, align: 'center', minWidth: 100 },
    {
      field: 'edit', headerName: 'Edit', headerAlign: 'center', flex: 1, align: 'center', minWidth: 100,
      renderCell: (params: GridRenderCellParams) => (
        <Button variant="contained" color="primary" size='small' sx={{ padding: xs ? '3px' : '8px' }} onClick={() => handleEditClick(params)}>
          Edit
        </Button>
      )
    },
    {
      field: 'delete', headerName: 'Delete', headerAlign: 'center', flex: 1, align: 'center', minWidth: 100,
      renderCell: (params: GridRenderCellParams) => (
        <Button variant="contained" color="secondary" size='small' sx={{ padding: xs ? '3px' : '8px' }} onClick={() => handleDeleteClick(params.row.intakeId)}>
          Delete
        </Button>
      )
    },
  ];

  const rows = intakes.map(intake => ({
    ...intake,
    id: intake.intakeId.toString()
  }));

  return (
    <Container>
      <h1>Intakes List</h1>
      <Button variant="contained" color="primary" sx={{ m: 2 }} onClick={handleAddClick}>
        Add Intake <AddIcon />
      </Button>
      <DataGrid 
        columns={columns}
        rows={rows} 
        autoHeight 
        sx={{ minWidth: 400, width: '90%', '& .MuiDataGrid-cell': { flex: 1, minWidth: 100 } }} 
      />
      {status === 'loading' && <p>Loading...</p>}
      {status === 'failed' && <p>Error: {error}</p>}
      <Dialog open={open || editOpen} onClose={() => { setOpen(false); setEditOpen(false); }}>
        <DialogTitle>{formData.intakeId ? 'Edit Intake' : 'Add Intake'}</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Name"
            fullWidth
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => { setOpen(false); setEditOpen(false); }}>Cancel</Button>
          <Button onClick={handleSave}>Save</Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default Intakes;

