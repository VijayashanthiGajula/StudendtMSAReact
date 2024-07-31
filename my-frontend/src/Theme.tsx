import React,{useState} from 'react'
import { Box, Container, CssBaseline, IconButton, ThemeProvider, Typography, createTheme } from '@mui/material';
import { LightMode, DarkMode } from '@mui/icons-material';

const Theme = () => {
    const [darkMode, setDarkMode] = useState(false);

    const theme = createTheme({
        palette: {
            mode: darkMode ? 'dark' : 'light',
        },
        breakpoints: {
            values: {
              lg: 1024,
              md: 640,
              sm: 412,
              xl: 1280,
              xs: 375,
            },
        },
    });

    const handleThemeChange = () => {
        setDarkMode(!darkMode);
    };
    return (


        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Container maxWidth="lg">
                <Box sx={{ my: 2 }}>
                    <Box display="flex" justifyContent="space-between" alignItems="center">
                        <Typography variant="h6">UA_College</Typography>
                        <IconButton onClick={handleThemeChange} color="inherit">
                            {darkMode ? <LightMode /> : <DarkMode />}
                            <Typography variant="body2" sx={{ ml: 1 }}>
                                {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
                            </Typography>
                        </IconButton>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>

    )
}

export default Theme



