import React from 'react'
import PropTypes from 'prop-types'

const Footer = (props) => (
    <footer>
        {props.children}
    </footer>
)

Footer.propTypes = {
  children: PropTypes.any
}

export default Footer
