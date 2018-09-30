import React from 'react'

export default () => {
    console.log(process.env.ENV_KEY)
    return (
        <div>
            <p>Hello World</p>
        </div>
    )
}
