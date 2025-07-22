import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../../Redux/store';
import { getIntakes, createIntake, editIntake, deleteIntake } from '../../Redux/intakeActions';
import CustomGrid from '../customComponents/CustomGrid';
import { Alert, Box, Button, Container, Snackbar } from '@mui/material';
import { GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import CustomDialog from '../customComponents/CustomDialog';

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

  const resetForm = () => setFormData({ intakeId: '', name: '' });

  const handleAddClick = () => setOpen(true);

  const handleEditClick = (params: GridRenderCellParams) => {
    setFormData({ intakeId: params.row.intakeId, name: params.row.name });
    setEditOpen(true);
  };

  const handleDeleteClick = (intakeId: number) => dispatch(deleteIntake(intakeId));

  const handleSave = () => {
    if (formData.intakeId) {
      const intakeIdNumber = parseInt(formData.intakeId, 10);
      dispatch(editIntake({ intakeId: intakeIdNumber, name: formData.name }))
        .then(() => {
          dispatch(getIntakes());
          resetForm();
          setSnackbarMessage('Intake updated successfully');
          setSnackbarSeverity('success');
          setSnackbarOpen(true);
        });
    } else {
      dispatch(createIntake({ intakeId: 0, name: formData.name }));
      setSnackbarMessage('Intake added successfully');
      setSnackbarSeverity('success');
      setSnackbarOpen(true);
    }

    setOpen(false);
    setEditOpen(false);
    resetForm();
  };

  const handleSnackbarClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') return;
    setSnackbarOpen(false);
  };

  const columns: GridColDef[] = [
    {
      field: 'intakeId',
      headerName: 'ID',
      minWidth: 100,
      flex: 1
    },
    {
      field: 'name',
      headerName: 'Name',
      minWidth: 150,
      flex: 2
    },
    {
      field: 'edit',
      headerName: 'Edit',
      minWidth: 100,
      flex: 1,
      sortable: false,
      filterable: false,
      disableColumnMenu: true,
      renderCell: (params: GridRenderCellParams) => (
        <Button
          variant="contained"
          color="primary"
          size="small"
          onClick={() => handleEditClick(params)}
          sx={{ minWidth: 64 }}
        >
          Edit
        </Button>
      )
    },
    {
      field: 'delete',
      headerName: 'Delete',
      minWidth: 100,
      flex: 1,
      sortable: false,
      filterable: false,
      disableColumnMenu: true,
      renderCell: (params: GridRenderCellParams) => (
        <Button
          variant="contained"
          color="secondary"
          size="small"
          onClick={() => handleDeleteClick(params.row.intakeId)}
          sx={{ minWidth: 64 }}
        >
          Delete
        </Button>
      )
    }
  ];



  const rows = intakes.map((intake) => ({
    ...intake,
    id: intake.intakeId.toString()
  }));

  const fields = [
    { label: 'Name', name: 'name', type: 'text' }
  ];

  return (
    //  <Container maxWidth="xl" sx={{ px: { xs: 1, sm: 2, md: 4 }, py: 3 }}>

    //   <Box sx={{
    //     borderRadius: 2,
    //     p: { xs: 2, sm: 3 },
    //     overflowX: 'auto', maxWidth: '100%'
    //   }}      >
    //     {/* Automatically scale on smaller viewports */}
    //     <Box sx={{ minWidth: 300, width: '90%', maxWidth: 'lg', margin: '0 auto' }}>
    //       <CustomGrid
    //         columns={columns}
    //         rows={rows}
    //         onAddClick={handleAddClick}
    //         onEditClick={handleEditClick}
    //         onDeleteClick={handleDeleteClick}
    //         status={status}
    //         error={error}
    //         listName='Intake'
    //       />
    //     </Box>

    //     <CustomDialog
    //       open={open || editOpen}
    //       onClose={() => { setOpen(false); setEditOpen(false); resetForm(); }}
    //       title={formData.intakeId ? 'Edit Intake' : 'Add Intake'}
    //       formData={formData}
    //       onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
    //       onSave={handleSave}
    //       fields={fields}
    //     />

    //     <Snackbar
    //       open={snackbarOpen}
    //       autoHideDuration={6000}
    //       onClose={handleSnackbarClose}
    //       anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
    //     >
    //       <Alert onClose={handleSnackbarClose} severity={snackbarSeverity} sx={{ width: '100%' }}>
    //         {snackbarMessage}
    //       </Alert>
    //     </Snackbar>
    //   </Box>
    // </Container>
    <Container
      maxWidth="xl"
      sx={{
        minWidth: 300,
        width: '100%',
        margin: '0 auto',
        padding: { xs: 1, sm: 2, md: 4 }
      }}
    >
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
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={handleSnackbarClose} severity={snackbarSeverity} sx={{ width: '100%' }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>

    </Container>
  );
};

export default IntakesContainer;
