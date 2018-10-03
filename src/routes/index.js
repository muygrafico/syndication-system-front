import React from 'react'
import { Route, Switch } from 'react-router'
import Application from '../components/views/Application'
import Dashboard from '../components/views/Dashboard'
import Error404 from '../components/views/Error404'

const routes = (
    <Switch>
        <Route exact path='/' component={Application} />
        <Route path='/application' component={Application} />
        <Route path='/dashboard' component={Dashboard} />
        <Route component={Error404} />
    </Switch>
)

export default routes
