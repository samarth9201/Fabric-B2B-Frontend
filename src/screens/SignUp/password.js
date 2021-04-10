
import React,{useState,useRef} from 'react'
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

import Container from '@material-ui/core/Container';
import {useForm} from 'react-hook-form'
import Signuptop from './components/signup-top';
import Signupbottom from './components/signup-bottom';
import {Link} from "react-router-dom";
import { registerUser } from '../../APi/api';
import { user } from '../../APi/userDetails';
import NavBar from '../NavBar'
import Paper from '@material-ui/core/Paper';

import jsPdf from 'jspdf'
import Grid from '@material-ui/core/Grid';
import logo from '../../images/logo.png'
import below from '../../images/below.png'

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
      left:'30'
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: "100",
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
    
  }));



function Password() {

    const classes = useStyles();
    const { register, handleSubmit,errors,watch } = useForm();

    const [pvtKey,setpvtKey] = useState("")
    const [er,seter] = useState(0);
    const [svalue,setSvalue] = useState(0)
    const onSubmit = async (data) => {
        
        const verify = await  registerUser(data.password,data.email);
        
        
        setSvalue(1);
        
        setpvtKey(verify.pvtKey);
        var doc = new jsPdf('p','pt');
          doc.text(20,20,`This is your private key ${verify.pvtKey}`);
          doc.setFont('courier');
          doc.text(30,30, "This pvt key is only genrated once so please do not loose it as it will be required at the time of login ");
          doc.save("PrivateKey.pdf")
        
        setTimeout(() => {
          changeScreen()
        }, 100000);
        };

        const changeScreen = ()=>{
          window.location.href="/homepage"
        }
        

     const pdf =  () => { }
     
        const password = useRef({});
        password.current = watch("password", "");


    return (
      <React.Fragment>
      { svalue ==1 ?<NavBar/>:""}
        <Grid container component="main"container component="main" className={classes.root}>
        <CssBaseline />
        <Grid item xs={false} sm={4} md={7} className="left-side"  >
      <img src={logo} alt="Below image" className="logo"/> <br/>
        <img src={below} alt="Below image" className="below"/>
      </Grid>
      <Grid item xs={12} sm={8} md={5} elevation={2} square className="right-side">
        <div className="right">
        <Avatar className="avatar"  >
            <LockOutlinedIcon className="icon" />
          </Avatar>
          <h1 className="titles">Password</h1>
            <form className={classes.form} onSubmit={handleSubmit(onSubmit)} noValidate>
                <TextField
                variant="outlined"
                margin="normal"
                required
                className="textFeilds"
                id="email"
                label="Email Address"
                name="email"
                autoComplete="off"
                autoFocus
                inputRef={register({
                required: true,
                pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message:"Please enter a valid email id"
              })}
                  />
            <TextField
                variant="outlined"
                margin="normal"
                required
                className="textFeilds"
                id="password"
                label="Password"
                name="password"
                autoComplete="off"
                autoFocus
                inputRef={register({
                    required: "You must specify a password",
                    minLength: {
                      value: 8,
                      message: "Password must have at least 8 characters"
                    }
                  })}
                />
                {errors.password && <p>{errors.password.message}</p>}
            <TextField
                className="otp"
                variant="outlined"
                margin="normal"
                
                className="textFeilds"
                id="confirm-password"
                label="Confirm Password"
                name="confirm_Password"
                autoComplete="off"
               
                inputRef={register({
                  validate: value =>
                    value === password.current || "The passwords do not match"
                })}
                />
                {errors.confirm_Password && <p className="errors">{errors.confirm_Password.message}</p>}
                
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className="submits"
                    onClick={()=>{setSvalue(1)}}
                >
                   Set Password
                </Button>
                {/* <Button 
                    fullWidth 
                    variant="contained"
                    color="primary"
                    onClick ={pdf()}
                    >
                    Download Pvt Key
                    </Button> */}
                <h3>Your private key is <span>{pvtKey}</span></h3>
                <h4>Please use the pvt key generated just now to login.Keep the pvt key secure as it is only generated once.</h4>
             

            </form>     
        </div>
        </Grid>
        </Grid>
        
        
        </React.Fragment>
    )
}

export default Password
//f89d895b49201b61b61ae55d25f0ca90c3669ee4dfed07a99bef65055767295e