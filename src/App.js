    import React from 'react'
    import ReactDOM from 'react-dom'
    const App = () => {
        console.log(process.env.ENV_KEY)
        return (
            <div>
                <p>Hello World</p>
            </div>
        )
    }
    export default App
    ReactDOM.render(<App />, document.getElementById('app'))
