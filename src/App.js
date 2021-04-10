import React from 'react'
import LogIn from './screens/LogIn/Login'
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import NewSignUp from './screens/SignUp/NewSignUp';
import Password from './screens/SignUp/password';
import HomePage from './screens/HomePage/HomePage';
import Verify from './screens/SignUp/components/Verify';
import TransferMoney from './screens/Dashboard/Regular Dashboards/TransferMoney'
import Admin from './screens/Dashboard/Admin Dashboard/admin'
import SignInSide from './screens/LogIn/NewLogin'
import Exchnage from './screens/Dashboard/Regular Dashboards/Exchnage';
import Signup from './screens/SignUp/Signup' 
import NewVerify from './screens/SignUp/components/NewVerify';
function App() {
    return (
        <Router>
            <main>
                <Switch>
                    <Route path="/" exact>
                       <SignInSide/>
                    </Route>
                    <Route path="/signup" exact >
                        <NewSignUp/>
                    </Route>
                    <Route path="/signup/verify" exact >
                       <NewVerify/>
                    </Route>
                    <Route path="/signup/verify/password" exact >
                        <Password/>
                    </Route>
                    <Route path="/homepage" exact >
                        <HomePage/>
                    </Route>
                    <Route path="/homepage/transfer" exact >
                        <TransferMoney/>
                    </Route>
                    <Route path="/homepage/exchange" exact >
                        <Exchnage/>
                    </Route>
                    <Route path="/homepage/admin" exact >
                        <Admin/>
                    </Route>

                </Switch>
            </main>
        </Router>
    )
}

export default App
