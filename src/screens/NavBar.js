import React from 'react'
import { AppBar, Toolbar } from "@material-ui/core"
import {  IconButton } from "@material-ui/core"
import { Home } from "@material-ui/icons"
import Typography from '@material-ui/core/Typography';
import useStyles from './styles'
import Button from '@material-ui/core/Button';
import {Link,withRouter } from 'react-router-dom'


function NavBar() {
    const classes = useStyles();
    return (
        <AppBar position="static">
            <Toolbar>
            <Typography variant="h6" className={classes.title}>
               LS&CG
            </Typography>
            
         
        <Button component ={Link} to='' className={classes.link}>Login</Button>

            </Toolbar>
        </AppBar>
    )
}

export default NavBar
