import React from 'react'
import Typography from '@material-ui/core/Typography';
import useStyles from '../../styles'
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom'

import { AppBar, Toolbar } from "@material-ui/core"
function DashNav() {

    const classes = useStyles();
    return (
        <AppBar position="static">
            <Toolbar>
            <Typography variant="h6" className={classes.title}>
               LS&CG
            </Typography>
            
            
            <Button component ={Link} to='/homepage/transfer' className={classes.link}>Transfer Money</Button>
            <Button component={Link} to="/homepage/exchange" className={classes.link}>Exchange Money</Button>
            
            </Toolbar>
        </AppBar>
    )
}

export default DashNav
