import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

import {verifyOTP} from '../../../APi/api'

import {useForm} from 'react-hook-form'
import { makeStyles } from '@material-ui/core/styles';
import logo from '../../../images/logo.png'
import below from '../../../images/below.png'
import './verify.css'
const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },

  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop:"200px"
  },
  avatar: {
    
    backgroundColor: theme.palette.secondary.main,
    
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
}));



export default function NewVerify() {
  const classes = useStyles();
  const { register, handleSubmit,errors } = useForm();
    

  const onSubmit = async (data) => {
    console.log(data)
    console.log(data.verification);

    const verified = await verifyOTP(data);
    console.log(verified.code);
   
    if(verified.code == 200){
      
      changeScreen();
    }
    else{
      console.log("error");
    }
   };
  const changeScreen=()=>{
    window.location.href +="/password";

  }
  

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className="left-side"  >
      <img src={logo} alt="Below image" className="logo"/> <br/>
        <img src={below} alt="Below image" className="below"/>
      </Grid>
      <Grid item xs={12} sm={8} md={5}  elevation={1} square className="rightSide" >
        <div className={classes.paper}>
        <Avatar className={classes.avatar } >
            <LockOutlinedIcon />
          </Avatar>
          <h1 className="title">Verify</h1>
          <form className={classes.form}  onSubmit={handleSubmit(onSubmit)}>
                    <TextField
                      variant="outlined"
                      margin="normal"
                      className="email"
                      required
                      className="email"
                      id="email"
                      label="Email Address"
                      name="email"
                      autoComplete="off"
                      autoFocus
                      type="email"
                      inputRef={register()}
                    />
                {errors?.email && <p className="errors">Please enter a valid email id</p>}
                <TextField
                      className="otp"
                      variant="outlined"
                      margin="normal"
                      hidden="true"
                      className="email"
                      id="otp"
                      label="OTP"
                      name="verification"
                      autoComplete="off"
                      required
                      inputRef={register({required:true})}
                />
                <Button
                    type="submit"
                    variant="contained"
                    className="submit"
                   >
                  Verify Email
                </Button>
            
          </form>
          
        </div>
      </Grid>
    </Grid>
  );
}