import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form'
import useStyles from '../../../styles'
import CurrencyRow from './CurrencyRow'
import TextField from '@material-ui/core/TextField';
import { Button  } from '@material-ui/core';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import './styles.css'
const BASE_URL = 'https://api.exchangeratesapi.io/latest'

function App() {
  
  const [currencyOptions, setCurrencyOptions] = useState([])
  const [fromCurrency, setFromCurrency] = useState()
  const [toCurrency, setToCurrency] = useState()
  const [exchangeRate, setExchangeRate] = useState()
  const [amount, setAmount] = useState(1)
  const [amountInFromCurrency, setAmountInFromCurrency] = useState(true)
  const { register, handleSubmit } = useForm();
  const classes = useStyles();
  const onSubmit = (data)=>{
    data.toCurrency = toCurrency;
    data.fromCurrency = fromCurrency
    data.fromAmount = fromAmount;
    data.toAmount = toAmount;
    
  }
  const styles = {

    largeIcon: {
      width: 60,
      height: 60,
    },
  
  };

  const size =400;
  let toAmount, fromAmount
  if (amountInFromCurrency) {
    fromAmount = amount
    toAmount = amount * exchangeRate
  } else {
    toAmount = amount
    fromAmount = amount / exchangeRate
  }

  useEffect(() => {
    fetch(BASE_URL)
      .then(res => res.json())
      .then(data => {
        const firstCurrency = Object.keys(data.rates)[0]
        setCurrencyOptions([data.base, ...Object.keys(data.rates)])
        setFromCurrency(data.base)
        setToCurrency(firstCurrency)
        setExchangeRate(data.rates[firstCurrency])
      })
  }, [])

  useEffect(() => {
    if (fromCurrency != null && toCurrency != null) {
      fetch(`${BASE_URL}?base=${fromCurrency}&symbols=${toCurrency}`)
        .then(res => res.json())
        .then(data => setExchangeRate(data.rates[toCurrency]))
    }
  }, [fromCurrency, toCurrency])

  function handleFromAmountChange(e) {
    setAmount(e.target.value)
    setAmountInFromCurrency(true)
  }

  function handleToAmountChange(e) {
    setAmount(e.target.value)
    setAmountInFromCurrency(false)
  }
  
  return (
    <>
      <div className="background">
        <form className="forms" noValidate autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
        <TextField id="outlined-full-width" label="Email" type="email" style={{ width: size }} variant="outlined" name="email" inputRef={register({ required: true })} autoFocus className="email"/>
        <TextField id="outlined-full-width" label="Acc.No" style={{ width: size }} variant="outlined" name="acountNumber" inputRef={register({ required: true })} className="email" />
        
      <CurrencyRow
        currencyOptions={currencyOptions}
        selectedCurrency={fromCurrency}
        onChangeCurrency={e => setFromCurrency(e.target.value)}
        onChangeAmount={handleFromAmountChange}
        amount={fromAmount}
        helperText = "Currency you wish to be exchanged"
        currency = {fromCurrency}
      />
      <ArrowDownwardIcon className="arrow"/>
      <CurrencyRow
        currencyOptions={currencyOptions}
        selectedCurrency={toCurrency}
        onChangeCurrency={e => setToCurrency(e.target.value)}
        onChangeAmount={handleToAmountChange}
        amount={toAmount}
        helperText = "Currency in which you want"
        currency = {toCurrency}
      />
       <Button
            type="submit"
            
            variant="contained"
            color="primary"
            className="submit">
            Send
            </Button>
      </form>
      </div>
    </>
  );
}

export default App;