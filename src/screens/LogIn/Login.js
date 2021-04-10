import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import { Link, withRouter } from 'react-router-dom'
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import { useForm } from 'react-hook-form'
import '../LogIn/Login.css'
import NavBar from '../NavBar'
import { login, transact } from '../../APi/api';
// const dummyData ={
//   email:'amanbagrecha@gmail.com',
//   password:'12345'
// }

const useStyles = makeStyles((theme) => ({

  root: {
    height: '100vh',
  },
  paper: {
    marginTop: theme.spacing(8, 4),
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

function LogIn(props) {


  const { register, handleSubmit, errors } = useForm();


  const onSubmit = async (data) => {
  
    const signIn = await login(data);
    if (signIn.code === 200) {
      
      console.log("Props : ", props);
      await transact(props.transaction.amount)
      alert("Transaction Successful")
    }
    else {
      console.log("unauthorized");
    }
    
  }

 



  const classes = useStyles();

  return (

    <Container component="main" className={classes.root}>
      <CssBaseline />

      <div className={classes.paper} >
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h1" className={classes.title}>
          <p>Login</p>
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit(onSubmit)} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"

            autoComplete="off"
            autoFocus
            inputRef={register({
              required: true,
              pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              message: "Please enter a valid email id"
            })}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            inputRef={register({ required: true })}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="pvtKey"
            label="PrivateKey"
            type="text"

            inputRef={register({ required: true })}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}>
            Login
              </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
                  </Link>
            </Grid>
            <Grid item>
              <Link to="signup" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>


        </form>
      </div>
    </Container>

  );
}
export default withRouter(LogIn)