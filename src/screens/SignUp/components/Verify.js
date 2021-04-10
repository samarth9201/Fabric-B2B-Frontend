import React,{useState} from 'react'
import useStyles from '../../styles'
import Signuptop from '../components/signup-top';
import Signupbottom from '../components/signup-bottom'
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import {useForm} from 'react-hook-form'
import emailID from '../Signup'
import {verifyOTP} from '../../../APi/api'
import {verifiedData} from '../../../data'
import { user } from '../../../APi/userDetails';
import logo from '../../../images/logo.png'
import below from '../../../images/below.png'
import './verify.css'
function Verify() {
  
    const { register, handleSubmit ,errors} = useForm();
    
    

    const onSubmit = async (data) => {
     
      console.log(data.verification);

      const verified = await verifyOTP(data);
      
      
      if(verified.code == 200){
        user.email = data.email;
        changeScreen();
      }
      else{
        console.log("error");
      }
      

     
      
    };
    const changeScreen=()=>{
      window.location.href +="/password";

    }
    

    const classes = useStyles();


    return (
        <Grid container component="main" className={classes.root}>
        <CssBaseline />
            <Grid item xs={false} sm={4} md={7} className="left-side">
          <img src={logo} alt="Below image" className="logo"/> <br/>
            <img src={below} alt="Below image" className="below"/>
          </Grid>
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={1} square className="rightSide" >
              <div className={classes.paper}>
              <Signuptop/>
              <form className="form" onSubmit={handleSubmit(onSubmit)} noValidate>
                <TextField
                      variant="outlined"
                      margin="normal"
                      className="email"
                      required
                      
                      id="email"
                      label="Email Address"
                      name="email"
                      autoComplete="off"
                      autoFocus
                      type="email"
                      inputRef={register()}
                    />
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
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    
                >
                  Verify Email
                </Button>
                
                
                

            </form>
          </div>
          </Grid>
          </Grid>
          
    )
}

export default Verify
