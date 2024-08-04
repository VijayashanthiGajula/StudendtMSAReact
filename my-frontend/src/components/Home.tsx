import React from 'react';
import { Button, Card, CardContent, CardHeader, CardMedia, Container, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import download from '../assets/download.png';
import python from '../assets/python.jpg';
import react from '../assets/react.png';
import webdesigns from '../assets/webdesigns.jpg';
import Enrollment from '../components/Enrollment';

const Home = () => {
  const redirect = useNavigate();

  const courses = [
    {
      id: 1,
      title: ".NET Development",
      description: "Learn the fundamentals of .NET and build robust applications using C#.",
      image: download,
      path:"/enrollments"
    },
    {
      id: 2,
      title: "Python Programming",
      description: "Explore Python programming from basics to advanced concepts and build powerful scripts and applications.",
      image: python,
      path:"/enrollments"
    },
    {
      id: 3,
      title: "React JS",
      description: "Master React JS and create dynamic web applications with ease using this popular JavaScript library.",
      image: react,
      path:"/enrollments"
    },
    {
      id: 4,
      title: "Web Designing",
      description: "Understand the principles of web design and create visually appealing and user-friendly websites.",
      image: webdesigns,
      path:"/enrollments"
    }
  ];

  return (
    <Container maxWidth="lg">
      <h1>TechInnovate College</h1>
      <p>Welcome to TechInnovate College, where innovation meets education!
        Our mission is to empower students with the skills and knowledge needed to
        excel in today's fast-paced technological landscape.</p>
      <Button
        variant="contained"
        color="primary"
        onClick={() => redirect("/Intakes")}
      >
        Intakes this year
      </Button>
      <Grid container spacing={2} sx={{ mt: 2 }}>
        {courses.map((course) => (
           <Grid item key={course.id} xs={12} sm={6} md={4}>
           <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
             <CardMedia
               component="img"
               height="140"
               image={course.image}
               alt={course.title}
             />
             <CardHeader title={course.title} />
             <CardContent sx={{ flexGrow: 1 }}>
               <Typography variant="body2" color="textSecondary" component="p">
                 {course.description}
               </Typography>
             </CardContent>
             <CardContent sx={{ flexGrow: 0 }}>
               <Button variant="contained" color="primary" fullWidth onClick={() => redirect(course.path)} > 
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
