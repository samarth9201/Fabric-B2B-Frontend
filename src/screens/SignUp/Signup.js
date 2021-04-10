import React,{useState} from 'react'
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import {useForm} from 'react-hook-form'
import Signuptop from './components/signup-top';
import Signupbottom from './components/signup-bottom';
import useStyles from '../styles'
import NavBar from '../NavBar';
import Grid from '@material-ui/core/Grid';
import {verifyEmail} from '../../APi/api'
import {verifiedData} from '../../data'
import '../SignUp/signup.css'
export var emailID="";

function Signup() {

    const { register, handleSubmit,errors } = useForm();
    

    const onSubmit =  async (data) =>{ 
     
     const verified = await  verifyEmail(data.email);
     console.log(verified);
     console.log(verified.code);
     if(verified.code == 200){
       changeScreen();
     }
     verifiedData.email = data.email;
      
    };
    const changeScreen =()=>{
      window.location.href +="/verify";
    }

    const classes = useStyles();


    return (
     
        <Grid container component="main" className={classes.root}>
         <CssBaseline />
        <Grid item xs={false} sm={4} md={7} className={classes.image} />
        <Grid item xs={12} sm={8} md={5} component={classes.paper} elevation={6} square className={classes.rightSide}>
        <div className={classes.paper}>
          <Signuptop/>
            <form className={classes.form} onSubmit={handleSubmit(onSubmit)} >
            <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="off"
                autoFocus
                inputRef={register({
                          required: "Emaill is required",
                          pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                          message:"Please enter a valid email id"
                        })}
                />
                {errors?.email && <p className="errors">Please enter a valid email id</p>}

                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                   >
                  Send OTP
                </Button>
                
                    <Signupbottom text="Aleardy have an account? Login"/>

            </form>
          </div>
          </Grid>
          </Grid>
         
    )
}

export default Signup

