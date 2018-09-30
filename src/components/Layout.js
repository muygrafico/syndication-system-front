import React from 'react'
import PropTypes from 'prop-types'

const Layout = (props) => (
    <header>
        {props.children}
    </header>
)

Layout.propTypes = {
  children: PropTypes.any
}

export default Layout
