// import classes from '*.module.css';
import useStyles from './styles'

import { AppBar, Badge, IconButton, Toolbar, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import React from 'react';
import { Link, useLocation } from 'react-router-dom'

import logo from '../../assets/commerce.png'

const Navbar = ({ totalItems }) => {
    const classes = useStyles();
    const location = useLocation();

    return (
        <>
            <AppBar position="fixed" className={classes.appBar} color="inherit">
                <Toolbar>
                    <Typography component={Link} to="/" variant="h6" className={classes.title} color="inherit">
                        <img src={logo} alt="commerce.js" className={classes.image} />
                        E - Commerce Shop
                    </Typography>
                    <div className={classes.grow} />
                    {location.pathname === '/' && (
                    <div className={classes.button}>
                        <IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit">
                            <Badge badgeContent={totalItems} color="secondary">
                                <ShoppingCart />
                            </Badge>
                        </IconButton>
                    </div>)}
                </Toolbar>
            </AppBar>
        </>
    )
};

export default Navbar;
