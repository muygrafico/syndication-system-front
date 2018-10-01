import React from 'react'
import PropTypes from 'prop-types'
import { ConnectedRouter } from 'connected-react-router'
import Layout from './components/Layout'

const App = ({ history }) => {
    console.log(process.env.ENV_KEY)
    return (
        <ConnectedRouter history={history}>
            <div className='full-height-container'>
                <Layout />
            </div>
        </ConnectedRouter>
    )
}

App.propTypes = {
  history: PropTypes.object
}

export default App
