import React from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import download from "../assets/download.png";
import python from "../assets/python.jpg";
import react from "../assets/react.png";
import webdesigns from "../assets/webdesigns.jpg";
import Enrollment from "./enrollment/Enrollment";

const Home = () => {
  const redirect = useNavigate();

  const courses = [
    {
      id: 1,
      title: ".NET Development",
      description:
        "Learn the fundamentals of .NET and build robust applications using C#.",
      image: download,
      path: "/enrollments",
    },
    {
      id: 2,
      title: "Python Programming",
      description:
        "Explore Python programming from basics to advanced concepts and build powerful scripts and applications.",
      image: python,
      path: "/enrollments",
    },
    {
      id: 3,
      title: "React JS",
      description:
        "Master React JS and create dynamic web applications with ease using this popular JavaScript library.",
      image: react,
      path: "/enrollments",
    },
    {
      id: 4,
      title: "Web Designing",
      description:
        "Understand the principles of web design and create visually appealing and user-friendly websites.",
      image: webdesigns,
      path: "/enrollments",
    },
  ];

  return (
    <Container maxWidth="xl" sx={{ minWidth: 300 }}>
      <Typography variant="h4" sx={{ mt: 2, mb: 1 }} textAlign="center">
        TechInnovate College
      </Typography>
      <Typography variant="body1" sx={{ mb: 3 }} textAlign="center">
        Welcome to TechInnovate College, where innovation meets education! Our
        mission is to empower students with the skills and knowledge needed to
        excel in today's fast-paced technological landscape.
      </Typography>
      <Box textAlign="center" sx={{ mb: 4 }}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => redirect("/Intakes")}
        >
          Intakes this year
        </Button>
      </Box>
      <Grid container spacing={3} sx={{ mt: 2 }}>
        {courses.map((course) => (
          <Grid item key={course.id} xs={12} sm={6} md={4} lg={3}>
            <Card
              sx={{
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                borderRadius: 2,
                boxShadow: 3,
              }}
            >
              <CardMedia
                component="img"
                image={course.image}
                alt={course.title}
                sx={{ height: { xs: 180, sm: 200 }, objectFit: 'cover' }}
              />
              <CardHeader
                title={course.title}
                titleTypographyProps={{ variant: 'h6', textAlign: 'center' }}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="body2" color="textSecondary">
                  {course.description}
                </Typography>
              </CardContent>
              <CardContent sx={{ pt: 0 }}>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  onClick={() => redirect(course.path)}
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

    </Container>
  );
};

export default Home;
