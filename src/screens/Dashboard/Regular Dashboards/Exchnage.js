import React,{useState} from 'react'
import DashNav from './DashNav'
import App from './Currency Exchange/CurrencyExchange';
import Paper from '@material-ui/core/Paper';
import './dash.css'
function Exchnage() {
  
return (
        <React.Fragment>
            <DashNav/>
        <Paper elevation={3}>
        <div className="body">
          <App/>
        </div>
        </Paper>
        </React.Fragment>
    )
}

export default Exchnage
