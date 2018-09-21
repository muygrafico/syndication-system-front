import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './store'
// import style from './styles/scss/main.scss'
import App from './App'

ReactDOM.render(
    <Provider store={configureStore()}>
        <App />
    </Provider>,
 document.getElementById('app')
)
