import React from 'react'
import { Route, Switch } from 'react-router'
import Home from '../components/views/Home'
import About from '../components/views/About'
import Error404 from '../components/views/Error404'

const routes = (
    <div>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route component={Error404} />
        </Switch>
    </div>
)

export default routes
