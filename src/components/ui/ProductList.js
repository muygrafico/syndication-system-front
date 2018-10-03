import React from 'react'
import PropTypes from 'prop-types'
// import { Scrollbars } from 'react-custom-scrollbars'
import ShadowScrollbar from './ShadowScrollbar'

const ProductList = (props) => (
    <ShadowScrollbar
      style={{ height: '100%' }}
      className='product-list-container'>
        <ul className='product-list'>
            {props.children}
        </ul>
    </ShadowScrollbar
    >
)

ProductList.propTypes = {
  children: PropTypes.any
}

export default ProductList
