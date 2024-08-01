import { useState, useEffect } from "react";
import axios from "axios";
import { baseUrl } from "../../constants/url.constants";
import { IIntake } from "../../types/intakesInterface";
import { Button, Container, styled } from "@mui/material";
import { Edit, Delete } from "@mui/icons-material"; 
import { useNavigate, useLocation } from "react-router-dom";
import Swal from "sweetalert2";

import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Intakes: React.FC = () => {
  const [intakes, setIntakes] = useState<IIntake[]>([]);
  const location = useLocation();
  const redirect = useNavigate();
  console.log(location);
  const fetchintakesList = async () => {
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
      alert("An Error Happened");
    }
  };
  useEffect(() => {
    fetchintakesList();
  }, []);
  const redirectToEditPage = (id: number) => {
    redirect(`/Intakes/edit/${id}`);
  };
  const redirectToDeletePage = (id: number) => {
    redirect(`/Intakes/delete/${id}`);
  };
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  

  return (
    <Container className="intakes">
      <h1>intakes List</h1>
      {intakes.length === 0 ? (
        <h1>No intakes</h1>
      ) : (
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm: 8, md: 10 }}>
              {intakes.map((intake) => (
                <Grid item xs={4} sm={8} md={12} key={intake.intakeId}>
                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <div>{intake.name}</div>
                    </Grid>
                    <Grid item xs={6}>
                      <Button
                        variant="contained"
                        color="primary"
                        sx={{ mx: 1 }}
                        onClick={() => redirectToEditPage(intake.intakeId)}
                      >Edit
                        <EditIcon />
                      </Button>
                      <Button
                        variant="contained"
                        color="error"
                        sx={{ mx: 1 }}
                        onClick={() => redirectToDeletePage(intake.intakeId)}
                      >
                        <DeleteIcon />
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              ))}
            </Grid>
        
      )}

 
    </Container>
  );
};

export default Intakes;
