import { AppContainer } from 'react-hot-loader'
import { applyMiddleware, compose, createStore } from 'redux'
import { createBrowserHistory } from 'history'
import { routerMiddleware, connectRouter } from 'connected-react-router'
import { Provider } from 'react-redux'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import rootReducer from './reducers/RootReducer'
import thunk from 'redux-thunk'

const history = createBrowserHistory()

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
  connectRouter(history)(rootReducer),
  composeEnhancer(
    applyMiddleware(
      thunk,
      routerMiddleware(history)
    )
  )
)

const render = () => {
    ReactDOM.render(
        <AppContainer>
            <Provider store={store}>
                <App history={history} />
            </Provider>
        </AppContainer>,
    document.getElementById('app')
  )
}

render()

// webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./App', () => {
    // if you are using harmony modules ({modules:false})
    render(App)
    // in all other cases - re-require App manually
    render(require('./App'))
  })
}
