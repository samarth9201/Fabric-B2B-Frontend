import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import {verifyEmail} from '../../APi/api'
import {verifiedData} from '../../data'
import {useForm} from 'react-hook-form'
import { makeStyles } from '@material-ui/core/styles';
import logo from '../../images/logo.png'
import below from '../../images/below.png'
import './signup.css'
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
  notchedOutline: {
    borderWidth: "6px",
    borderColor: "yellow !important"
  },
  rightSide:{
    backgroundColor:"purple"
  }

  
  
  
  

}));



export default function NewSignUp() {
  const classes = useStyles();
  const { register, handleSubmit,errors } = useForm();
    

    const onSubmit =  async (data) =>{ 
    
     const verified = await  verifyEmail(data.email);
     
     if(verified.code == 200){
       changeScreen();
     }
     verifiedData.email = data.email;
      
    };
    const changeScreen =()=>{
      window.location.href +="/verify";
    }

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className="left-side"  >
      <img src={logo} alt="Below image" className="logo"/> <br/>
        <img src={below} alt="Below image" className="below"/>
      </Grid>
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={1} square className="rightSide" >
        <div className={classes.paper}>
        <Avatar className={classes.avatar } >
            <LockOutlinedIcon />
          </Avatar>
          <h1 className="title">SignUp</h1>
          <form className={classes.form}  onSubmit={handleSubmit(onSubmit)}>
            <TextField
              variant="outlined"
              margin="normal"
              className="textf"
              type="email"
              required
              type="email"
              id="email"
              label="Email Address"
              name="email"
              InputProps={{
                classes: {
                  notchedOutline: classes.notchedOutline
                }
              }}
              autoComplete="email"
              inputRef={register()}
              autoFocus
                />
                {errors?.email && <p className="errors">Please enter a valid email id</p>}
             
            
                <Button
                    type="submit"
                    
                    variant="contained"
                    
                    className="submit"
                   >
                  Send OTP
                </Button>
            
          </form>
          
        </div>
      </Grid>
    </Grid>
  );
}