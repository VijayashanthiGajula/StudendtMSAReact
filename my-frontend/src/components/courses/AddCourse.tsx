import React from "react";
import { TextField, Button, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { ICourse } from "../../types/courseInterface";  // Ensure this import points to the correct file where ICourse is defined
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { baseUrl } from "../../constants/url.constants";
import { SelectChangeEvent } from '@mui/material/Select';

const AddCourse: React.FC = () => {
  const [course, setCourse] = React.useState<Partial<ICourse>>({
    name: "",
    capacity: 0,
    fees: 0,
    intakeId: 0
  });
  const [intakes, setIntakes] = React.useState<{ id: number; name: string }[]>([]);
  const redirect = useNavigate();

  React.useEffect(() => {
    axios.get<{ id: number; name: string }[]>('https://localhost:7295/api/Intakes')
      .then(response => {
        setIntakes(response.data);
      })
      .catch(error => {
        console.error("Error fetching intakes:", error);
      });
  }, []);

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCourse({
      ...course,
      [event.target.name]: event.target.value,
    });
  };

  const selectChangeHandler = (event: SelectChangeEvent<number>) => {
    setCourse({
      ...course,
      intakeId: event.target.value as number
    });
  };

  const handleSaveBtnClick = () => {
    if (course.name === "" || course.capacity === 0 || course.fees === 0 || course.intakeId === 0) {
      alert("Please fill out all fields");
      return;
    }

    const data: Partial<ICourse> = {
      name: course.name,
      capacity: course.capacity,
      fees: course.fees,
      intakeId: course.intakeId
    };

    axios
      .post(`${baseUrl}/courses`, data)
      .then((response) =>
        redirect("/Courses", {
          state: { message: "Course Created Successfully" },
        })
      )
      .catch((error) => alert("Error creating course"));
  };

  const handleBackBtnClick = () => {
    redirect("/Courses");
  };

  return (
    <div className="add-course">
      <h2>Add New Course</h2>
      <TextField
        autoComplete="off"
        label="Course Name"
        variant="outlined"
        name="name"
        value={course.name}
        onChange={changeHandler}
        fullWidth
        margin="normal"
      />
      <TextField
        autoComplete="off"
        label="Capacity"
        variant="outlined"
        name="capacity"
        type="number"
        value={course.capacity}
        onChange={changeHandler}
        fullWidth
        margin="normal"
      />
      <TextField
        autoComplete="off"
        label="Fees"
        variant="outlined"
        name="fees"
        type="number"
        value={course.fees}
        onChange={changeHandler}
        fullWidth
        margin="normal"
      />
       
       
     
      <div>
        <Button variant="outlined" color="primary" onClick={handleSaveBtnClick}>
          Save
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          onClick={handleBackBtnClick}
        >
          Back
        </Button>
      </div>
    </div>
  );
};

export default AddCourse;
