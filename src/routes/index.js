import React from 'react'
import { Route, Switch } from 'react-router'
import Home from '../components/views/Home'
import About from '../components/views/About'
import NavBar from '../components/ui/NavBar'
// import Hello from '../components/Hello'
// import Counter from '../components/Counter'
// import NoMatch from '../components/NoMatch'
// import NavBar from '../components/NavBar'

const routes = (
    <div>
        <NavBar />
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            {/* <Route path="/hello" component={Hello} />
            <Route path="/counter" component={Counter} />
            <Route component={NoMatch} /> */}
        </Switch>
    </div>
)

export default routes
