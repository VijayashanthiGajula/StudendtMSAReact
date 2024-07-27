import React, { useEffect, useState } from 'react';
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import { baseUrl } from "../../constants/url.constants";
import { IIntake } from "../../types/intakesInterface";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import { useMediaQuery, useTheme } from '@mui/material';

const Sample = () => {
    const [intakes, setIntakes] = useState<IIntake[]>([]);
    const [selectedIntake, setSelectedIntake] = useState<IIntake | null>(null);
    const [open, setOpen] = useState(false);
    const location = useLocation();
    const redirect = useNavigate();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    useEffect(() => {
        fetchIntakesList();
    }, []);

    const fetchIntakesList = async () => {
        try {
            const response = await axios.get<IIntake[]>(baseUrl);
            setIntakes(response.data);
            if (location?.state) {
                Swal.fire({
                    icon: "success",
                    title: location?.state?.message,
                });
                redirect(location.pathname, { replace: true });
            }
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'An error occurred while fetching the data.',
            });
        }
    };

    const handleEdit = (intake: IIntake) => {
        setSelectedIntake(intake);
        setOpen(true);
    };

    const handleDelete = async (id: number) => {
        try {
            await axios.delete(`${baseUrl}/${id}`);
            setIntakes(intakes.filter(intake => intake.intakeId !== id));
            Swal.fire({
                icon: 'success',
                title: 'Deleted',
                text: 'The intake has been deleted.',
            });
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'An error occurred while deleting the intake.',
            });
        }
    };

    const handleClose = () => {
        setOpen(false);
        setSelectedIntake(null);
    };

    const handleSave = async () => {
        if (selectedIntake) {
            try {
                await axios.put(`${baseUrl}/${selectedIntake.intakeId}`, selectedIntake);
                setIntakes(intakes.map(intake => intake.intakeId === selectedIntake.intakeId ? selectedIntake : intake));
                Swal.fire({
                    icon: 'success',
                    title: 'Updated',
                    text: 'The intake has been updated.',
                });
                handleClose();
            } catch (error) {
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'An error occurred while updating the intake.',
                });
            }
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (selectedIntake) {
            setSelectedIntake({ ...selectedIntake, [e.target.name]: e.target.value });
        }
    };

    const columns: GridColDef[] = [
        { field: 'intakeId', headerName: 'ID', width: 150 },
        { field: 'name', headerName: 'Name', width: 200 },
        // Add more columns as needed
        {
            field: 'edit',
            headerName: 'Edit',
            width: 100,
            renderCell: (params: GridRenderCellParams) => (
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => handleEdit(params.row)}
                    sx={{
                        width: 'auto',
                        minWidth: isMobile ? '60px' : '80px',
                        fontSize: isMobile ? '0.75rem' : '1rem',
                        padding: isMobile ? '6px' : '8px 16px',
                    }}
                >
                    Edit
                </Button>
            ),
        },
        {
            field: 'delete',
            headerName: 'Delete',
            width: 100,
            renderCell: (params: GridRenderCellParams) => (
                <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => handleDelete(params.row.intakeId)}
                >
                    Delete
                </Button>
            ),
        },
    ];

    return (
        <Container style={{ height: 400, width: isMobile ? '100%' : '80%' }}>
            <DataGrid
                columns={columns}
                rows={intakes.map(intake => ({
                    ...intake,
                    id: intake.intakeId.toString() // Ensure ID is a string as DataGrid expects a string or number
                }))}
                autoHeight
            />
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Edit Intake</DialogTitle>
                <DialogContent>
                    <TextField
                        margin="dense"
                        name="name"
                        label="Name"
                        type="text"
                        fullWidth
                        value={selectedIntake?.name || ''}
                        onChange={handleChange}
                    />
                    {/* Add more fields as needed */}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="secondary" 
                    >
                        Cancel
                    </Button>
                    <Button onClick={handleSave} color="primary">
                        Save
                    </Button>
                </DialogActions>
            </Dialog>
        </Container>
    );
};

export default Sample;
