import React from 'react'
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import './styles.css'
export default function CurrencyRow(props) {
  const {
    currencyOptions,
    selectedCurrency,
    onChangeCurrency,
    onChangeAmount,
    amount,
    helperText
  } = props
  const size = 400;
  return (
    <div>
          
        <TextField
          id="outlined-select-currency"
          select
          label="Select"
          value={selectedCurrency}
          onChange={onChangeCurrency}
          name="curr"
          helperText="Please select your currency"
          variant="outlined"
          className="email"
          style={{ width: size }}
        >
          {currencyOptions.map(option=>(
            
            <MenuItem key={option} value={option} className="option" >
              {option}
            </MenuItem>
          ))}
        </TextField>
        <TextField
            inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
            id="outlined-name"
            label="Amount"
            placeholder={helperText}
            value={amount}
            style={{ width: size }}
            onChange={onChangeAmount}
            variant="outlined"
            className="email"
           type="number"
          />
      
    </div>
  )
}
