import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Home, Landing, Login, Register} from '../../pages'

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/login">
                    <Login/>
                </Route>
                <Route path="/register">
                    <Register/>
                </Route>
                <Route path="/home">
                    <Home/>
                </Route>
                <Route path="/">
                    <Landing/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes
