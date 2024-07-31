import React, { createContext, useState, useMemo, useContext, ReactNode } from 'react';
import { createTheme, ThemeProvider, CssBaseline, Theme, PaletteOptions } from '@mui/material';

interface ThemeContextProps {
  darkMode: boolean;
  handleThemeChange: () => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {        
      main: '#1e88e5 ',
      light: '#004500',
      dark: '#9fa8cf',
      contrastText: '#fff', // Replace this with your primary color
    },
    secondary: {
        main: '#963199 ',
        light: '#004500',
        dark: '#9fa8cf',
        contrastText: '#fff'
    },
    text: {
      primary: 'rgba(31, 29, 31)',
      secondary: 'rgba(0, 0, 0, 0.87)',
      disabled: 'rgba(0, 0, 0, 0.87)',
    },
    background:{
        paper:'#fff',
        default:'#fff'
    },
    
  },
  components: {
    MuiButton: {
      styleOverrides: {
        containedPrimary: {
          color: '#fff', // Light theme button text color
        },
        containedSecondary: {
            color: '#fff', 
            backgroundColor:'#963199'// Light theme button text color
          },
      },
    },
  },
});
const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#108573  ', // Matching light theme primary color for consistency
        light: '#108573',
        dark: '#d64a40',
        contrastText: '#108573', // Text color on primary button
      },
      secondary: {
        main: '#ed9566', // Matching light theme secondary color for consistency
        light: '#b56ab1',
        dark: '#d64a40',
        contrastText: '#fff', // Text color on secondary button
      },
      text: {
        primary: '#fff', // Light text color on dark background
        secondary: '#b0bec5', // Slightly darker text color for secondary text
        disabled: '#757575', // Disabled text color
      },
      background: {
        paper: '#424242', // Dark background for paper elements
        default: '#121212', // Overall dark background color
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          containedPrimary: {
            color: '#fff', // Dark theme button text color
          },
          containedSecondary: {
            color: '#fff', // Dark theme button text color
            
          },
        },
      },
    },
  });

interface ThemeProviderWrapperProps {
  children: ReactNode;
}

export const ThemeProviderWrapper: React.FC<ThemeProviderWrapperProps> = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  const handleThemeChange = () => {
    setDarkMode(!darkMode);
  };

  const theme = useMemo<Theme>(() => (darkMode ? darkTheme : lightTheme), [darkMode]);

  return (
    <ThemeContext.Provider value={{ darkMode, handleThemeChange }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useThemeContext = (): ThemeContextProps => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useThemeContext must be used within a ThemeProviderWrapper');
  }
  return context;
};
