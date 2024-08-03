import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../../Redux/store';
import { getCourses, createCourse, editCourse, deleteCourse } from '../../Redux/courseActions';
import { getIntakes } from '../../Redux/intakeActions';
import CustomGrid from '../CustomGrid';
import { Button, TextField, Autocomplete } from '@mui/material';
import { GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import CustomDialog from '../CustomDialog';

const CourseContainer: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const { data: courses, status: coursesStatus, error: coursesError } = useSelector((state: RootState) => state.courses);
  const { data: intakes, status: intakesStatus, error: intakesError } = useSelector((state: RootState) => state.intakes);

  const [open, setOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [formData, setFormData] = useState({ id: '', name: '', capacity: '', fees: '', intakeId: '' });
  const [selectedIntake, setSelectedIntake] = useState<{ intakeId: number, name: string } | null>(null);

  useEffect(() => {
    if (coursesStatus === 'idle') {
      dispatch(getCourses());
    }
    if (intakesStatus === 'idle') {
      dispatch(getIntakes());
    }
  }, [coursesStatus, intakesStatus, dispatch]);
  const resetForm = () => setFormData({ id: '', name: '', capacity: '', fees: '', intakeId: '' });//resetting the form


  const handleAddClick = () => (setOpen(true),  resetForm(),setSelectedIntake(null));
  const handleEditClick = (params: GridRenderCellParams) => {
    const intake = intakes.find(intake => intake.intakeId === params.row.intakeId);
    setSelectedIntake(intake || null);
    setFormData({
      id: params.row.id.toString(),
      name: params.row.name,
      capacity: params.row.capacity.toString(),
      fees: params.row.fees.toString(),
      intakeId: params.row.intakeId.toString()
    });
    setEditOpen(true);
  };
  const handleDeleteClick = (id: number) => dispatch(deleteCourse(id));
  const handleSave = () => { 
    const intakeIdNumber = selectedIntake ? selectedIntake.intakeId : 0;
    const idNumber = formData.id ? parseInt(formData.id, 10) : 0;
    const capacityNumber = parseInt(formData.capacity, 10);
    const feesNumber = parseFloat(formData.fees);
    
    if (formData.id) {      
      dispatch(editCourse({
        id: idNumber,
        name: formData.name,
        capacity: capacityNumber,
        fees: feesNumber,
        intakeId: intakeIdNumber
      }))
      .then(() => {
        dispatch(getCourses());
        resetForm();
       
      });
    } else {

      dispatch(createCourse({ 
        id: idNumber,
        name: formData.name, 
        capacity: capacityNumber,
         fees: feesNumber,
          intakeId: intakeIdNumber 
        })).then (()=> {
          dispatch(getCourses());
            resetForm();
           
        });
    }
    
    setOpen(false);
    setEditOpen(false);
    resetForm();
  };

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', headerAlign: 'center', flex: 1, align: 'center', minWidth: 100 },
    { field: 'name', headerName: 'Name', headerAlign: 'center', flex: 2, align: 'center', minWidth: 100 },
    { field: 'capacity', headerName: 'Capacity', headerAlign: 'center', flex: 1, align: 'center', minWidth: 100 },
    { field: 'fees', headerName: 'Fees', headerAlign: 'center', flex: 1, align: 'center', minWidth: 100 },
    { field: 'intakeId', headerName: 'Intake', headerAlign: 'center', flex: 1, align: 'center', minWidth: 100 },
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
        <Button variant="contained" color="secondary" size='small' onClick={() => handleDeleteClick(params.row.id)}>
          Delete
        </Button>
      )
    },
  ];

  const rows = courses.map(course => ({
    ...course,
    id: course.id.toString()
  }));

  const fields = [
    { label: 'Name', name: 'name', type: 'text' },
    { label: 'Capacity', name: 'capacity', type: 'text' },
    { label: 'Fees', name: 'fees', type: 'text' },
    {
      label: 'Intake',
      name: 'intakeId', type: 'autoComplete',
      component: (
        <Autocomplete
          options={intakes}
          getOptionLabel={(option) => option.name}
          value={selectedIntake}
          onChange={(event, newValue) => setSelectedIntake(newValue)}
          renderInput={(params) => <TextField {...params} label="Intake" />}
        />
      )
    },
  ];

  return (
    <div>
      <CustomGrid
        columns={columns}
        rows={rows}
        onAddClick={handleAddClick}
        onEditClick={handleEditClick}
        onDeleteClick={handleDeleteClick}
        status={coursesStatus}
        error={coursesError}
        listName='courses'
      />
      <CustomDialog
        open={open || editOpen}
        onClose={() => { setOpen(false); setEditOpen(false); }}
        title={formData.id ? 'Edit Course' : 'Add Course'}
        formData={formData}
        onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
        onSave={handleSave}
        fields={fields}
      />
    </div>
  );
};

export default CourseContainer;
