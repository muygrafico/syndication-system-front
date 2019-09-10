import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Loading from '../../assets/icons/loading-icon.gif'

const ApplicationBox = (props) => (
    <>
        <div className={props.loading
          ? 'application__box-loading'
          : 'application__box-loading--hide'}>
            <img src={Loading} />
        </div>
        <div className='application__box'>
            {props.children}
        </div>
    </>
)

ApplicationBox.propTypes = {
  children: PropTypes.any
}

const mapStateToProps = (store) => {
  return {
    loading: store.UIReducer.loading
  }
}

export default connect(mapStateToProps)(ApplicationBox)
