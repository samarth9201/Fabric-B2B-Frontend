import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import {Link} from "react-router-dom";
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import {useForm} from 'react-hook-form'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { login } from '../../APi/api';
import below from '../../images/below.png';
import logo from '../../images/logo.png'
import './Login.css'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop:"100px"
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
  rightSide:{
      backgroundColor:'white',
      
  },
  
  

}));

export default function SignInSide() {

  const { register, handleSubmit,errors } = useForm();
  
    const onSubmit = async (data) =>{
      
      const signIn = await login(data);
            if(signIn.code==200){
            changeScreen()
            }
            else{
              console.log("unauthorized");
            }
            
      }

const changeScreen = ()=>{
  window.location.href +="homepage";
}





  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className="left-side"  >
      <img src={logo} alt="Below image" className="logo"/> <br/>
        <img src={below} alt="Below image" className="below"/>
      </Grid>
      <Grid item xs={12} sm={8} md={5}  elevation={2} square className="right-side">
        <div className={classes.paper}>
          
          <Typography component="h1" variant="h5" className ={classes.title}>
            <h1 className="title">Login</h1>
          </Typography>
          <form className={classes.form} noValidate onSubmit={handleSubmit(onSubmit)} >
            <TextField
            className='textF'
              variant="outlined"
              margin="normal"
              required
              autoComplete="off"
              id="email"
              label="Email Address"
              name="email"
              inputRef={register({
                required: true,
                pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message:"Please enter a valid email id"
              })}
              autoFocus
            />
            <TextField
              className="textF "
              variant="outlined"
              margin="normal"
              required
              name="password"
              label="Password"
              type="password"
              id="password"
              inputRef={register({required:true})}
              autoComplete="current-password"
            />
            <TextField
              className="textF "
              variant="outlined"
              margin="normal"
              autoComplete="off"
              required
              name="pvtKey"
              label="Private Key"
              type="text"
              id="pvtKey"
              inputRef={register({required:true})}
            />
            
            <Button
              type="submit"
             
              variant="contained"
             
              className="submit"
            >
              Sign In
            </Button>
            
            <Box mt={5}>
              <p className="text-below">If you dont have an account then,   <Link to="signup" variant="body2" className="link">  { "Sign Up"}</Link></p>
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}