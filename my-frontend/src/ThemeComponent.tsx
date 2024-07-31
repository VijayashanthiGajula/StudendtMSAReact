import React from 'react';
import { Box, Container, FormControlLabel, FormGroup, IconButton, Menu, MenuItem, Switch, Typography } from '@mui/material';
import { LightMode, DarkMode, AccountCircle } from '@mui/icons-material';
import { useThemeContext } from './Theme2';

const ThemeComponent: React.FC = () => {
  const { darkMode, handleThemeChange } = useThemeContext();
  // const [mode, setMode] = React.useState(true);
  // const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setMode(event.target.checked);
  // };
  // const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
  //   setAnchorEl(event.currentTarget);
  // };
  // const handleClose = () => {
  //   setAnchorEl(null);
  //};
  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 2 }}>
        <Box display="flex" justifyContent="space-between" alignItems="center">
           
          <Box display="flex" alignItems="center">
          <FormGroup>
        <FormControlLabel
          control={
            <Switch
              checked={!darkMode}
              onChange={handleThemeChange}
              aria-label="login switch"
            />
          }
          label={darkMode ? 'Black' : 'Blue '}
        />
        </FormGroup>
{/*        
            <IconButton onClick={handleThemeChange} color="inherit" sx={{border:1}}>
              {darkMode ? <LightMode /> : <DarkMode />}</IconButton>
              <Typography variant="body2" sx={{ ml: 1 }}>
                {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              </Typography> */}
            
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default ThemeComponent;
