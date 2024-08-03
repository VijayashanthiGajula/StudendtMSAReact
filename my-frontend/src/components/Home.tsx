import React from 'react';
import { Button, Card, CardContent, CardHeader, CardMedia, Container, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const redirect = useNavigate();

  const courses = [
    { id: 1, title: ".NET Development", 
      description: "Learn the fundamentals of .NET and build robust applications using C#." },
    { id: 2, title: "Python Programming",
       description: "Explore Python programming from basics to advanced concepts and build powerful scripts and applications."  },
    { id: 3, title: "React JS", 
      description: "Master React JS and create dynamic web applications with ease using this popular JavaScript library."  },
    { id: 4, title: "Web Designing", 
      description: "Understand the principles of web design and create visually appealing and user-friendly websites." }
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
        onClick={() => redirect("/extra")}
      >
        Intakes this year
      </Button>
      <Grid container spacing={2} sx={{ mt: 2 }}>
        {courses.map((course, index) => (
          <Grid 
            item 
             
            key={course.id}
             
          >
            <Card>
              <CardHeader title={course.title} />
              
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  {course.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Home;
