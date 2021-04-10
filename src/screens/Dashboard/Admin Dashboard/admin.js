import React,{useState} from 'react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Button } from '@material-ui/core';
import  useStyles from '../../styles'
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import { useForm } from 'react-hook-form'
import { withStyles } from '@material-ui/core/styles';
import AdminNav from './adminNav'
import './admin.css'

function Admin() {
    
    const [open, setOpen] = useState(false);
    const [userArray,setuserArray] = useState([]);

    const { register, handleSubmit } = useForm();
    const StyledButton = withStyles({
        root: {
          background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
          borderRadius: 3,
          border: 0,
          color: 'white',
          height: 48,
          padding: '0 30px',
          boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
          left:'40%',
          margin:'30px'
        },
        label: {
          textTransform: 'capitalize',
        },
      })(Button);
    const classes = useStyles();
      const handleClickOpen = () => {
         setOpen(true);};
    
      const handleClose = () => { // handling popover
        setOpen(false); };

        const onSubmit= (data)=>{ // submitting the popver form
            var  n = Number(userArray.length+1);
            let obj = { 
                no:n,
                email:data.email,
                wallenNo:data.wnumber,
                username:data.UserName,
                currency:data.currency
            }
            setuserArray(oldArray=>[...oldArray,obj]);
            
    
        }

    
    return (
        <div>
            <AdminNav/>
            
               <div> 

               <TableContainer component={Paper} style={{ justifyContent:'center'}}  className={classes.tableMain}>
                    <Table className={classes.table} aria-label="simple table" classes="styled-table">
                        <TableHead>
                            <TableRow>
                                <TableCell>No.</TableCell>
                                <TableCell align="centre">User Email</TableCell>
                                <TableCell align="centre">Wallet No</TableCell>
                                <TableCell align="centre">User Name</TableCell>
                                <TableCell align="centre">Currency</TableCell>

                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {userArray.map((row,index)=>(
                                <TableRow key={row.no}  style ={ index % 2? { background : "#fdffe0" }:{ background : "white" }}>
                                    <TableCell component="th" scope="row">
                                    {row.no}
                                </TableCell>
                                <TableCell component="th" scope="row">
                                    {row.email}
                                </TableCell>
                                <TableCell component="th" scope="row">
                                    {row.wallenNo}
                                </TableCell>
                                <TableCell component="th" scope="row">
                                    {row.username}
                                </TableCell>
                                <TableCell component="th" scope="row">
                                    {row.currency}
                                </TableCell>
                                </TableRow>
                                
                            ))}
                        </TableBody>
                        </Table>
                        </TableContainer>

                        {/* Popover starts here-----------------------------------------------------------------------------------------------------------*/}
                        <StyledButton onClick={handleClickOpen}> Add Users</StyledButton>
                        
                                    <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                                        <DialogTitle id="form-dialog-title">User Details</DialogTitle>
                                        <DialogContent>
                                        <DialogContentText>Please fill up all the details mentioned below</DialogContentText>
                                        <form  onSubmit={handleSubmit(onSubmit)}>
                                       
                                        <TextField
                                            autoFocus
                                            variant="outlined"
                                            id="outlined-basic"
                                            autoFocus
                                            className={classes.textF}
                                            label="Email Address"
                                            type="email"
                                            name="email"
                                            inputRef={register({ required: true })}
                                            fullWidth
                                        />
                                        <TextField
                                           variant="outlined"
                                            id="outlined-basic"
                                            className={classes.textF}
                                            label="Wallet Number"
                                            type="number"
                                            name="wnumber"
                                            inputRef={register({ required: true })}
                                            fullWidth
                                        />
                                        <TextField
                                            variant="outlined"
                                            id="outlined-basic"
                                            label="User Name"
                                            className={classes.textF}
                                            type="text"
                                            name="UserName"
                                            inputRef={register({ required: true })}
                                            fullWidth
                                        />
                                        <TextField
                                            variant="outlined"
                                            id="outlined-basic"
                                            label="Currency"
                                            className={classes.textF}
                                            type="text"
                                            name="currency"
                                            inputRef={register({ required: true })}
                                            fullWidth
                                        />
                                             
                                            <Button
                                                type="submit"
                                                fullWidth
                                                className={classes.btn}
                                                onClick ={handleClose}>
                                                Add user
                                            </Button>
                                        </form>
                                        </DialogContent>
                                        
                                </Dialog>
               </div>
                    
                
                

        </div>
    )
}

export default Admin
