import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../../Redux/store';
import { getIntakes, createIntake, editIntake, deleteIntake } from '../../Redux/intakeActions';
import CustomGrid from '../CustomGrid';
import {   Alert, Button, CircularProgress, Snackbar } from '@mui/material';
import { GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import CustomDialog from '../CustomDialog';


const IntakesContainer: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const { data: intakes, status, error } = useSelector((state: RootState) => state.intakes);
  const [open, setOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [formData, setFormData] = useState({ intakeId: '', name: '' });
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState<'success' | 'error'>('success');

  useEffect(() => {
    if (status === 'idle') {
      dispatch(getIntakes());
    }
  }, [status, dispatch]);
  const resetForm = () => setFormData({ intakeId: '', name: '' });//resetting the form

  const handleAddClick = () => setOpen(true);
  const handleEditClick = (params: GridRenderCellParams) => {
    setFormData({ intakeId: params.row.intakeId, name: params.row.name });
    setEditOpen(true);
  };
  const handleDeleteClick = (intakeId: number) => dispatch(deleteIntake(intakeId));

  const handleSave = () => {
    if (formData.intakeId) {
      const intakeIdNumber = parseInt(formData.intakeId, 10);
      dispatch(editIntake({
         intakeId: intakeIdNumber, 
         name: formData.name 
        }))
        .then(() => {
        dispatch(getIntakes());
        resetForm();
        setSnackbarMessage('Intake updated successfully');
          setSnackbarSeverity('success');
          setSnackbarOpen(true);
      });
    }
    else {
      
      //const newIntakeId = intakes.length > 0 ? Math.max(...intakes.map(i => i.intakeId)) + 1 : 1;
      dispatch(createIntake({ intakeId:0, name: formData.name }));
      setSnackbarMessage('Intake added successfully');
          setSnackbarSeverity('success');
          setSnackbarOpen(true);
    }
    setOpen(false);
    setEditOpen(false);
    resetForm();
    
  };
  const handleSnackbarClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnackbarOpen(false);
  };

  const columns: GridColDef[] = [
    { field: 'intakeId', headerName: 'ID', headerAlign: 'center', flex: 1, align: 'center', minWidth: 100 },
    { field: 'name', headerName: 'Name', headerAlign: 'center', flex: 2, align: 'center', minWidth: 100 },
    {
      field: 'edit', headerName: 'Edit', headerAlign: 'center', flex: 1, align: 'center', minWidth: 100,
      renderCell: (params: GridRenderCellParams) => (
        <Button variant="contained" color="primary" size='small' onClick={() => handleEditClick(params)}>
          Edit
        </Button>
      )
    },
    {
      field: 'delete', headerName: 'Delete', headerAlign: 'center', flex: 1, align: 'center', minWidth: 100,
      renderCell: (params: GridRenderCellParams) => (
        <Button variant="contained" color="secondary" size='small' onClick={() => handleDeleteClick(params.row.intakeId)}>
          Delete
        </Button>
      )
    },
  ];

  const rows = intakes.map(intake => ({
    ...intake,
    id: intake.intakeId.toString()
  }));
  const fields = [
    { label: 'Name', name: 'name', type: 'text' }
  ];

  
  return (
    <div>  
      <CustomGrid
        columns={columns}
        rows={rows}
        onAddClick={handleAddClick}
        onEditClick={handleEditClick}
        onDeleteClick={handleDeleteClick}
        status={status}
        error={error}
        listName='Intake'
      />
     
      <CustomDialog
        open={open || editOpen}
        onClose={() => { setOpen(false); setEditOpen(false); resetForm(); }}
        title={formData.intakeId ? 'Edit Intake' : 'Add Intake'}
        formData={formData}
        onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
        onSave={handleSave}
        fields={fields}
      /> 
       <Snackbar
            open={snackbarOpen}
            autoHideDuration={6000}
            onClose={handleSnackbarClose}
          >
            <Alert  onClose={handleSnackbarClose} severity={snackbarSeverity}>
              {snackbarMessage}
            </Alert>
          </Snackbar>
    </div>
  );
};

export default IntakesContainer;
function setSnackbarSeverity(arg0: string) {
  throw new Error('Function not implemented.');
}

function setSnackbarMessage(arg0: string) {
  throw new Error('Function not implemented.');
}

function setSnackbarOpen(arg0: boolean) {
  throw new Error('Function not implemented.');
}

