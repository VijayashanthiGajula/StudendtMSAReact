import { useState, useEffect } from "react";
import axios from "axios";
import { CourseUrl } from "../../constants/url.constants";
import { ICourse } from "../../types/courseInterface";
import { Button } from "@mui/material";
import { Edit, Delete } from "@mui/icons-material";
import { useNavigate, useLocation } from "react-router-dom";
import Swal from "sweetalert2";

const Courses: React.FC = () => {
  const [course, setCourse] = useState<ICourse[]>([]);
  const location = useLocation();
  const redirect = useNavigate();

 // console.log(location);

  const fetchCourseList = async () => {
    try {
      const response = await axios.get<ICourse[]>(CourseUrl);
      setCourse(response.data);
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
    fetchCourseList();
  }, []);

  //   console.log(courses);

  const redirectToEditPage = (id: number) => {
    redirect(`/Courses/edit/${id}`);
  };

  const redirectToDeletePage = (id: number) => {
    redirect(`/Courses/delete/${id}`);
  };

  return (
    <div className="courses">
      <h1>courses List</h1>
      {course.length === 0 ? (
        <h1>No courses</h1>
      ) : (
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>                
                <th>Name</th>
                <th>Capacity</th>
                <th>Fees</th>
                <th>Intake</th>

              </tr>
            </thead>
            <tbody>
              {course.map((courses) => (
                <tr key={courses.id}>
                  <td>{courses.name}</td>
                  <td>{courses.capacity} </td>
                  <td>{courses.fees}</td>
                  <td>{courses.intakeId}</td>

                  <td>
                    <Button
                      variant="outlined"
                      color="warning"
                      sx={{ mx: 3 }}
                      onClick={() => redirectToEditPage(courses.id)}
                    >
                      <Edit />
                    </Button>
                    <Button
                      variant="outlined"
                      color="error"
                      onClick={() => redirectToDeletePage(courses.id)}
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

export default Courses;
