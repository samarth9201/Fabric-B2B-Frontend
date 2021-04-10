import React from 'react'
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import Avatar from '@material-ui/core/Avatar';


const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));

function Signuptop(props) {
    const classes = useStyles();

    return(
        <div>
        
          <Typography component="h1" variant="h5">
           <h1>Verify email</h1>
          </Typography>
          </div>
    )
}

export default Signuptop
