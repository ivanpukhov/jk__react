import React from 'react';
import logo from '../images/logo.png';
import { Link } from "react-router-dom";
import { AppBar, Toolbar, IconButton, Typography, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

function Header() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const theme = useTheme();
    const isMobile = useMediaQuery('(max-width:1200px)');

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            {isMobile ? (
                <AppBar position="static" style={{ backgroundColor: '#e87707' }}>
                    <Toolbar>
                        <img src={logo} alt="logo" style={{ height: '50px', marginRight: '20px' }} />
                        <Typography variant="h6" style={{ flexGrow: 1 }}>
                            Колледж
                        </Typography>
                        <IconButton
                            edge="end"
                            color="inherit"
                            aria-label="menu"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleMenuOpen}
                        >
                            <MenuIcon />
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
                            onClose={handleMenuClose}
                        >
                            <MenuItem onClick={handleMenuClose} component={Link} to={'/'}>О колледже</MenuItem>
                            <MenuItem onClick={handleMenuClose} component={Link} to={'/stud'}>Студенту</MenuItem>
                            <MenuItem onClick={handleMenuClose} component={Link} to={'/abit'}>Абитуриенту</MenuItem>
                            <MenuItem onClick={handleMenuClose} component={Link} to={'/schedule'}>Расписание</MenuItem>
                            <MenuItem onClick={handleMenuClose} component={Link} to={'/contacts'}>Контакты</MenuItem>
                            <MenuItem onClick={handleMenuClose} component={Link} to={'/news'}>Новости</MenuItem>
                        </Menu>
                    </Toolbar>
                </AppBar>
            ) : (
                <div className="header" style={{ backgroundColor: '#e87707' }}>
                    <img src={logo} alt="logo" style={{ height: '50px', marginRight: '20px' }} />
                    <div className="header__links">
                        <Link to={'/'} className="header__links-item">О колледже</Link>
                        <Link to={'/stud'} className="header__links-item">Студенту</Link>
                        <Link to={'/abit'} className="header__links-item">Абитуриенту</Link>
                        <Link to={'/schedule'} className="header__links-item">Расписание</Link>
                        <Link to={'/contacts'} className="header__links-item">Контакты</Link>
                        <Link to={'/news'} className="header__links-item">Новости</Link>
                    </div>
                    <div className="header__btn">
                        Контакты
                    </div>
                </div>
            )}
        </>
    );
}

export default Header;
