import React from 'react'
import Typography from '@material-ui/core/Typography';
import useStyles from '../../styles'
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom'
import { AppBar, Toolbar } from "@material-ui/core"

function AdminNav() {
    const classes = useStyles();

    return (
        <div>
        <AppBar position="static">
            <Toolbar>
            <Typography variant="h6" className={classes.title}>
               LS&CG
            </Typography>
            
            <Button component ={Link} to='/homepage/admin'> User Details</Button>
            
            
            </Toolbar>
        </AppBar>
            
        </div>
    )
}

export default AdminNav
