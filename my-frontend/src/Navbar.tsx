// import React, { useState } from 'react';
// // import { Menu, Close } from '@mui/icons-material';
// import { Link } from 'react-router-dom';
// import { Box, IconButton, Drawer, List, ListItem, Typography, Stack, Divider, ListItemButton, ListItemText, Toolbar, AppBar, CssBaseline, Button, FormGroup, FormControlLabel, Switch } from '@mui/material';

// import MenuIcon from '@mui/icons-material/Menu';
// import MenuItem from '@mui/material/MenuItem';
// import Menu from '@mui/material/Menu';
// import { AccountCircle } from '@mui/icons-material';
// import ThemeComponent from './components/theme/ThemeComponent';

// const Navbar: React.FC = () => {

//   const drawerWidth = 240;
//   const navItems = [
//     { id: 1, title: "Home", path: "/" },
//     { id: 2, title: "Intakes", path: "/Intakes" },
//     { id: 3, title: "Courses", path: "/Courses" },
//     { id: 4, title: "Students", path: "/Sample" },
//   ];
//   const [mobileOpen, setMobileOpen] = React.useState(false);
//   const handleDrawerToggle = () => {
//     setMobileOpen((prevState) => !prevState);
//   }
//   const drawer = (
//     <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
//       <Typography variant="h6" sx={{ my: 2 }}>
//       TechInnovate College
//       </Typography>
//       <Divider />
//       <List>
//         {navItems.map((item) => (
//           <ListItem key={item.id} disablePadding>
//             <ListItemButton component={Link} to={item.path} sx={{ textAlign: 'center' }}>
//               <ListItemText primary={item.title} />
//             </ListItemButton>
//           </ListItem>
//         ))}
//       </List>      
//     </Box>
//   );
//   /** objects for mode  */

//   const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

//   const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
//     setAnchorEl(event.currentTarget);
//   };
//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   return (
//     <Box sx={{ flexGrow: 1 }}>
//       <CssBaseline />
//       <AppBar position='static' sx={{ bgcolor: 'primary.main' }}>
//         <Toolbar>
//           <IconButton
//             color="inherit"
//             aria-label="open drawer"
//             edge="start"
//             onClick={handleDrawerToggle}
//             sx={{ mr: 2, display: { sm: 'none' } }}
//           >
//             <MenuIcon />
//           </IconButton>
        
//           <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
//           TechInnovate  
//           </Typography>

//           <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
//             {navItems.map((item) => (
//               <Button key={item.id} sx={{ color: '#fff' }} component={Link} to={item.path}>
//                 {item.title}
//               </Button>
//             ))}
//           </Box>

//           <IconButton
//             size="large"
//             aria-label="account of current user"
//             aria-controls="menu-appbar"
//             aria-haspopup="true"
//             onClick={handleMenu}
//             color="inherit"
//           >
//             <AccountCircle />
//           </IconButton>
//           <Menu
//             id="menu-appbar"
//             anchorEl={anchorEl}
//             anchorOrigin={{
//               vertical: 'top',
//               horizontal: 'right',
//             }}
//             keepMounted
//             transformOrigin={{
//               vertical: 'top',
//               horizontal: 'right',
//             }}
//             open={Boolean(anchorEl)}
//             onClose={handleClose}
//           >
//             <MenuItem onClick={handleClose}>Admin</MenuItem>
//             <MenuItem onClick={handleClose}>Account settings</MenuItem>
//           </Menu>


//         </Toolbar>
//       </AppBar>
//       <nav>
//         <Drawer
//           variant="temporary"
//           open={mobileOpen}
//           onClose={handleDrawerToggle}
//           ModalProps={{
//             keepMounted: true, // Better open performance on mobile.
//           }}
//           sx={{
//             display: { xs: 'block', sm: 'none' },
//             '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
//           }}
//         >
//           {drawer}
//         </Drawer>
//       </nav>
//       {/* <ThemeComponent /> */}
//     </Box>
//   );
// };

// export default Navbar;


// src/Navbar.tsx

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  AppBar,
  Box,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  Button,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';

const drawerWidth = 240;

const navItems = [
  { id: 1, title: 'Home', path: '/' },
  { id: 2, title: 'Intakes', path: '/Intakes' },
  { id: 3, title: 'Courses', path: '/Courses' },
  { id: 4, title: 'Students', path: '/Sample' },
];

const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        TechInnovate College
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.id} disablePadding>
            <ListItemButton component={Link} to={item.path} sx={{ textAlign: 'center' }}>
              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="static" component="nav">
        <Toolbar>
          {/* Mobile menu icon */}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>

          {/* Logo/Brand */}
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              fontSize: { xs: '1rem', sm: '1.25rem' },
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            TechInnovate
          </Typography>

          {/* Desktop nav buttons */}
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button key={item.id} sx={{ color: '#fff' }} component={Link} to={item.path}>
                {item.title}
              </Button>
            ))}
          </Box>

          {/* User icon */}
          <IconButton
            size="large"
            edge="end"
            color="inherit"
            aria-label="account"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
          >
            <AccountCircle />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Admin</MenuItem>
            <MenuItem onClick={handleClose}>Account settings</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>

      {/* Drawer for mobile */}
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better performance on mobile
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
};

export default Navbar;
