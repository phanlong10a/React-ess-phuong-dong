import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import FormControl from '@mui/material/FormControl';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import React from 'react';
import './main-header.css';

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
const Header = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    return (
        <div className="main-nav" id="main-nav">
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={12} className='d-flex'>
                        <div className="main-nav-logo">
                            <img src={process.env.PUBLIC_URL + '/images/logo-text.svg'} />
                        </div>
                        <div className="main-nav-utils">
                            <div className="main-nav-utils-actions">
                                <button className="btn btn-light btn-sm">login</button>
                                <div className="light-through">|</div>
                                <FormControl sx={{ m: 1, minWidth: 120 }}>
                                    <Select
                                        displayEmpty
                                        defaultValue={'vi'}
                                        inputProps={{ 'aria-label': 'Without label' }}
                                    >
                                        <MenuItem value="vi">
                                            Vi
                                        </MenuItem>
                                        <MenuItem value='en'>En</MenuItem>
                                        <MenuItem value='vi'>Vi</MenuItem>
                                    </Select>
                                </FormControl>
                                <div className="main-nav-utils-actions-dropdown dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="main-nav-utils-actions-dropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        En
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="main-nav-utils-actions-dropdown">
                                        <li><a className="dropdown-item" href="#">En</a></li>
                                        <li><a className="dropdown-item" href="#">Vi</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="main-nav-logo-mini">
                                <img src="public/images/logo-mini.png" alt />
                            </div>
                            <AppBar position="static">
                                <Container maxWidth="xl">
                                    <Toolbar disableGutters>
                                        <Typography
                                            variant="h6"
                                            noWrap
                                            component="div"
                                            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                                        >
                                            LOGO
                                        </Typography>

                                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                                            <IconButton
                                                size="large"
                                                aria-label="account of current user"
                                                aria-controls="menu-appbar"
                                                aria-haspopup="true"
                                                onClick={handleOpenNavMenu}
                                                color="inherit"
                                            >
                                                <MenuIcon />
                                            </IconButton>
                                            <Menu
                                                id="menu-appbar"
                                                anchorEl={anchorElNav}
                                                anchorOrigin={{
                                                    vertical: 'bottom',
                                                    horizontal: 'left',
                                                }}
                                                keepMounted
                                                transformOrigin={{
                                                    vertical: 'top',
                                                    horizontal: 'left',
                                                }}
                                                open={Boolean(anchorElNav)}
                                                onClose={handleCloseNavMenu}
                                                sx={{
                                                    display: { xs: 'block', md: 'none' },
                                                }}
                                            >
                                                {pages.map((page) => (
                                                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                                                        <Typography textAlign="center">{page}</Typography>
                                                    </MenuItem>
                                                ))}
                                            </Menu>
                                        </Box>
                                        <Typography
                                            variant="h6"
                                            noWrap
                                            component="div"
                                            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                                        >
                                            LOGO
                                        </Typography>
                                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                                            {pages.map((page) => (
                                                <Button
                                                    key={page}
                                                    onClick={handleCloseNavMenu}
                                                    sx={{ my: 2, color: 'white', display: 'block' }}
                                                >
                                                    {page}
                                                </Button>
                                            ))}
                                        </Box>

                                        <Box sx={{ flexGrow: 0 }}>
                                            <Tooltip title="Open settings">
                                                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                                    <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                                                </IconButton>
                                            </Tooltip>
                                            <Menu
                                                sx={{ mt: '45px' }}
                                                id="menu-appbar"
                                                anchorEl={anchorElUser}
                                                anchorOrigin={{
                                                    vertical: 'top',
                                                    horizontal: 'right',
                                                }}
                                                keepMounted
                                                transformOrigin={{
                                                    vertical: 'top',
                                                    horizontal: 'right',
                                                }}
                                                open={Boolean(anchorElUser)}
                                                onClose={handleCloseUserMenu}
                                            >
                                                {settings.map((setting) => (
                                                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                                        <Typography textAlign="center">{setting}</Typography>
                                                    </MenuItem>
                                                ))}
                                            </Menu>
                                        </Box>
                                    </Toolbar>
                                </Container>
                            </AppBar>
                            {/* <div className="main-nav-utils-navigation">
                                <nav className="navbar navbar-expand-lg navbar-light bg-none">
                                    <div className="container-fluid">
                                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                            <span className="navbar-toggler-icon" />
                                        </button>
                                        <div className="collapse navbar-collapse" id="navbarNav">
                                            <ul className="navbar-nav">
                                                <li className="nav-item">
                                                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" href="#">{'{'}'Fleet &amp; Client List'{'}'}</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" href="#">RECRUITMENT</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" href="#">CREW TRAINING CENTER</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" href="#">CONTACT</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </nav>
                            </div> */}
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </div>

    );
};


export default Header;