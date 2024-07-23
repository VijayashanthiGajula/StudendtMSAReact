import { useState, useEffect } from "react";
import axios from "axios";
import { baseUrl } from "../constants/url.constants";
import { IIntake } from "../types/global.typing";
import { Button } from "@mui/material";
import { Edit, Delete } from "@mui/icons-material";
import moment from "moment";
import { useNavigate, useLocation } from "react-router-dom";
import Swal from "sweetalert2";

const Intakes: React.FC = () => {
  const [intakes, setintakes] = useState<IIntake[]>([]);
  const location = useLocation();
  const redirect = useNavigate();

  console.log(location);

  const fetchintakesList = async () => {
    try {
      const response = await axios.get<IIntake[]>(baseUrl);
      setintakes(response.data);
      if (location?.state) {
        Swal.fire({
          icon: "success",
          title: location?.state?.message,
        });
        redirect(location.pathname, { replace: true });
      }
    } catch (error) {
      alert("An Error Happend");
    }
  };

  useEffect(() => {
    fetchintakesList();
  }, []);

  //    console.log(intakes);

  const redirectToEditPage = (id: number) => {
    redirect(`/intakes/edit/${id}`);
  };

  const redirectToDeletePage = (id: number) => {
    redirect(`/intakes/delete/${id}`);
  };

  return (
    <div className="intakes">
      <h1>intakes List</h1>
      {intakes.length === 0 ? (
        <h1>No intakes</h1>
      ) : (
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Title</th>
              </tr>
            </thead>
            <tbody>
              {intakes.map((intake) => (
                <tr key={intake.intakeId}>
                  <td>{intake.name}</td>

                  <td>
                    <Button
                      variant="outlined"
                      color="warning"
                      sx={{ mx: 3 }}
                      onClick={() => redirectToEditPage(intake.intakeId)}
                    >
                      <Edit />
                    </Button>
                    <Button
                      variant="outlined"
                      color="error"
                      onClick={() => redirectToDeletePage(intake.intakeId)}
                    >
                      <Delete />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Intakes;
