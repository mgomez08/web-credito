import React from 'react'
import {  Route, Switch } from 'react-router-dom'
import Error404 from '../pages/Error404'
import Home from '../pages/Home/Home'
import Profile from '../pages/Profile/Profile'

export const UserRoutes = () => {
    return (
        <>
            <Switch>
                <Route exact path='/user' component={Home}/>
                <Route exact path='/perfil' component={Profile}/>
                <Route component={Error404}/>
            </Switch>
        </>
    )
}
