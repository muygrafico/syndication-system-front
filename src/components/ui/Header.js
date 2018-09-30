import React from 'react'
import PropTypes from 'prop-types'

const Header = (props) => (
    <header>
        {props.children}
    </header>
)

Header.propTypes = {
  children: PropTypes.any
}

export default Header
