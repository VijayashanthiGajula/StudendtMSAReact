import React from 'react';
import { Box, Container, FormControlLabel, FormGroup, IconButton, Menu, MenuItem, Switch, Typography } from '@mui/material';
import { useThemeContext } from '../../constants/ThemeConstants';

const ThemeComponent: React.FC = () => {
  const { darkMode, handleThemeChange } = useThemeContext();
  
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
            
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default ThemeComponent;
