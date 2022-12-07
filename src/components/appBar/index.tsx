import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import AodIcon from '@mui/icons-material/Aod';

export default function ButtonAppBar() {
    return (
        <Box sx={{ flexGrow: 1 }} style={{ marginBottom: "2rem" }}>
            <AppBar position="static">
                <Toolbar>
                    <AodIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        BERRY CONTROLLER
                    </Typography>

                </Toolbar>
            </AppBar>
        </Box>
    );
}