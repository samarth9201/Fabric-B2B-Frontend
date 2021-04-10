import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField';
import useStyles from '../../styles'
import DashNav from './DashNav'
import { useForm } from 'react-hook-form'
import MenuItem from '@material-ui/core/MenuItem';
import { Button, Dialog, DialogContent } from '@material-ui/core';
import Login from '../../LogIn/Login';
import './dash.css'


function TransferMoney() {
 
  const { register, handleSubmit } = useForm();
  const [currency, setCurrency] = useState('EUR');
  const [currency1, setCurrency1] = useState('EUR');
  const [value, setValue] = useState('');
  const [open, setOpen] = useState(false)

  const currencies = [
    {
      value: 'USD',
      label: '$-(Dollars)',

    },
    {
      value: 'EUR',
      label: '€-(EURO)',
    },
    {
      value: 'BTC',
      label: '฿-(Bitcoin)',
    },
    {
      value: 'JPY',
      label: '¥-(YEN)',
    },
    {
      value: 'INR',
      label: '₹-(Ruppees)',
    },
    {
      value: 'ETH',
      label: 'Ξ-(Etherium)',
    },
  ];

  const handleClose = () => {
    setOpen(false)
  }
  const handleChange = (event) => {
    setCurrency(event.target.value);
  };
  const handleChange1 = (event) => {
    setCurrency1(event.target.value);
  };
  const handleValue = (event) => {
    var n = Number(event.target.value);
    var res = Number(n + n * 0.001);
    setValue(res);

  }
  const onSubmit = (data) => {
    data.amount = value;
    data.senderCurrency = currency;
    data.reciverCurrency = currency1;
    
    setOpen(true)
  }
  const size = 400;
  return (
    <React.Fragment>
      <DashNav />
      <div className="sender">


        
        <form className="form"  noValidate autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
        <h2>SENDER</h2>
          <TextField id="outlined-full-width" label="Email" style={{ width: size }} variant="outlined" name="email" inputRef={register({ required: true })} autoFocus className="textFeild"/>
          <TextField id="outlined-full-width" label="Acc.No" style={{ width: size }} variant="outlined" name="sacc" inputRef={register({ required: true })} className="textFeild"/>
            <TextField
              id="outlined-select-currency"
              select
              label="Select"
              inputRef={register({ required: true })}
              style={{ width: size }}
              value={currency}
              onChange={handleChange}
              name="curr"
              helperText="Please select your currency"
              variant="outlined"
            >
              {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
         
          <div><h2>Reciever</h2></div>


          <TextField id="outlined-basic" label="Email" variant="outlined" style={{ width: size }} name="remail" inputRef={register({ required: true })} className="textFeild"/>
          <TextField id="outlined-basic" label="Acc.No" variant="outlined" style={{ width: size }} name="racc" inputRef={register({ required: true })} className="textFeild"/>
          <TextField
            id="outlined-select-currency"
            select
            label="Select"
            value={currency1}
            onChange={handleChange1}
            helperText="Please select your currency"
            variant="outlined"
            style={{ width: size }}
            inputRef={register({ required: true })}
            name="recurr"

          >
            {currencies.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
              <br/>
              <h2>Message to be sent</h2>
              
              <TextField
                id="outlined-full-width"
                label="Message"
                style={{ margin: 8 }}
                placeholder="Why did you transfer money?"
                className="msgBox"
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
        />
                <br/>
                
              <h2>Amount to be Transferred</h2>

          <TextField
            inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
            id="outlined-name"
            label="Amount"
            style={{ width: size }}
            onChange={handleValue}
            inputRef={register({ required: true })} variant="outlined"
            type="number"
            className="textFeild"
          />
          <TextField
            id="filled-read-only-input"
            type="number"
            label="Amount after tax"
            value={value}
            className="textFeild"      
            style={{ width: size }}
            variant="outlined"
          />
          <br/>
          <Button
            type="submit"
           
            variant="contained"
            color="primary"
            className="submit1"
           >
            Send
            </Button>

          <Dialog open={open} onClose={handleClose}>
            <DialogContent>
              <Login NotNavBar={true} transaction={{amount: value}}/>
            </DialogContent>
          </Dialog>
        </form>





      </div>
    </React.Fragment>
  )
}

export default TransferMoney
