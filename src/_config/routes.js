import { BrowserRouter, Route, Switch } from 'react-router-dom'
import React from 'react'

import Login from '../pages/login'
import LoginCreditals from '../pages/login-credentials'
import SignUp from '../pages/sign-up'
import Home from '../pages/home'
import SignUpAthlete from '../pages/sign-upAthlete'
import SignUpGuest from '../pages/sign-upGuest'
import ModalConfirmation from '../pages/modal-confirmation'
import EvaluateAthlete1 from '../pages/evaluateAthlete1'
import EvaluateAthlete3 from '../pages/evaluateAthlete3'
import EvaluateAthlete4 from '../pages/evaluateAthlete4'
import SignUpAthlete2 from '../pages/sign-upAthlete2'

export default function Routes(){
    return(
        <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Login}/>
            <Route path="/login-credentials" exact component={LoginCreditals}/>
            <Route path="/sign-up" exact component={SignUp}/>
            <Route path="/sign-upAthlete" exact component={SignUpAthlete}/>
            <Route path="/sign-upAthlete2" exact component={SignUpAthlete2}/>
            <Route path="/modal" exact component={ModalConfirmation}/>
            <Route path="/sign-upGuest" exact component={SignUpGuest}/>
            <Route path="/evaluateAthlete1" exact component={EvaluateAthlete1}/>
            <Route path="/evaluateAthlete3" exact component={EvaluateAthlete3}/>
            <Route path="/evaluateAthlete4" exact component={EvaluateAthlete4}/>
            <Route path="/home" exact component={Home}/>
        </Switch>
        </BrowserRouter>
    );
}
