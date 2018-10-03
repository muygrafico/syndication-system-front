import React from 'react'
import PropTypes from 'prop-types'

const ApplicationBox = (props) => (
    <div className='application__box'>
        {props.children}
    </div>
)

ApplicationBox.propTypes = {
  children: PropTypes.any
}

export default ApplicationBox
