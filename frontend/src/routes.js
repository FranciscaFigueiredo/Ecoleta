import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import User from './pages/Search-results'
import Profile from './pages/Profile'

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact = "/" component = {User}/>
                <Route path = "/create" component = {Profile}/>
                <Route path = "/update/:id" component = {Profile}/>

            </Switch>
        </BrowserRouter>
    )
}