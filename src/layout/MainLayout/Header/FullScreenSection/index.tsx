import { useCallback, useState } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';

// assets
import { IconArrowsMaximize, IconArrowsMinimize } from '@tabler/icons-react';

// types
import { ThemeMode } from 'types/config';

// ==============================|| HEADER CONTENT - FULLSCREEN ||============================== //

const FullScreen = () => {
    const theme = useTheme();

    const [open, setOpen] = useState(false);
    const handleToggle = useCallback(() => {
        setOpen((prevOpen) => !prevOpen);
        if (document && !document.fullscreenElement) {
            document.documentElement.requestFullscreen();
        } else if (document.exitFullscreen) {
            document.exitFullscreen();
        }
    }, []);

    return (
        <Box sx={{ ml: 2 }}>
            <Tooltip title={open ? 'Salir de pantalla completa' : 'Pantalla completa'}>
                <Avatar
                    variant="rounded"
                    sx={{
                        ...theme.typography.commonAvatar,
                        ...theme.typography.mediumAvatar,
                        bgcolor: theme.palette.mode === ThemeMode.DARK ? 'dark.main' : 'primary.light',
                        color: 'primary.dark',
                        transition: 'all .2s ease-in-out',
                        '&[aria-controls="menu-list-grow"],&:hover': {
                            bgcolor: 'primary.main'
                        }
                    }}
                    aria-controls={open ? 'menu-list-grow' : undefined}
                    aria-haspopup="true"
                    onClick={handleToggle}
                    color="inherit"
                >
                    {open ? <IconArrowsMinimize /> : <IconArrowsMaximize />}
                </Avatar>
            </Tooltip>
        </Box>
    );
};

export default FullScreen;
