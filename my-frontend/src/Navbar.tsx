import React, { useState } from 'react';
import { Menu, Close } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { Box, IconButton, Drawer, List, ListItem, Typography } from '@mui/material';

const Navbar: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  const toggleNavBar = () => {
    setOpen(!open);
  };

  return (
    <Box>
      {/* Menu Icon for Mobile View */}
      <IconButton onClick={toggleNavBar} color="inherit" sx={{ display: { xs: 'block', md: 'none' } }}>
        {open ? <Close /> : <Menu />}
      </IconButton>

      {/* Drawer for Mobile View */}
      <Drawer
        anchor="left"
        open={open}
        onClose={toggleNavBar}
        PaperProps={{
          sx: {
            width: 240,
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            padding: 2,
          },
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
        }}
      >
        <Box sx={{ width: 240, height: '100%', display: 'flex', flexDirection: 'column', padding: 2 }}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            UA_College
          </Typography>
          <List>
            <ListItem button onClick={toggleNavBar}>
              <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                Home
              </Link>
            </ListItem>
            <ListItem button onClick={toggleNavBar}>
              <Link to="/Sample" style={{ textDecoration: 'none', color: 'inherit' }}>
                Sample
              </Link>
            </ListItem>
            <ListItem button onClick={toggleNavBar}>
              <Link to="/Intakes" style={{ textDecoration: 'none', color: 'inherit' }}>
                Intakes
              </Link>
            </ListItem>
            <ListItem button onClick={toggleNavBar}>
              <Link to="/Intakes/add" style={{ textDecoration: 'none', color: 'inherit' }}>
                Add an Intake
              </Link>
            </ListItem>
            <ListItem button onClick={toggleNavBar}>
              <Link to="/Courses" style={{ textDecoration: 'none', color: 'inherit' }}>
                Courses
              </Link>
            </ListItem>
            <ListItem button onClick={toggleNavBar}>
              <Link to="/Courses/add" style={{ textDecoration: 'none', color: 'inherit' }}>
                Add Courses
              </Link>
            </ListItem>
            <ListItem button onClick={toggleNavBar}>
              <Link to="/Intakes/edit" style={{ textDecoration: 'none', color: 'inherit' }}>
                Edit Intake
              </Link>
            </ListItem>
          </List>
        </Box>
      </Drawer>

      {/* Navigation Links for Larger Screens */}
      <Box sx={{ display: { xs: 'none', md: 'block' } }}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Sample">Sample</Link>
          </li>
          <li>
            <Link to="/Intakes">Intakes</Link>
          </li>
          <li>
            <Link to="/Intakes/add">Add an Intake</Link>
          </li>
          <li>
            <Link to="/Courses">Courses</Link>
          </li>
          <li>
            <Link to="/Courses/add">Add Courses</Link>
          </li>
          <li>
            <Link to="/Intakes/edit">Edit Intake</Link>
          </li>
        </ul>
      </Box>
    </Box>
  );
};

export default Navbar;
