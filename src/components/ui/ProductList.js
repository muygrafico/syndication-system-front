import React from 'react'
import PropTypes from 'prop-types'
// import { Scrollbars } from 'react-custom-scrollbars'
import ShadowScrollbar from './ShadowScrollbar'

// const bottomOffset = '32'
// const bottomButtonsHeight = '50'
const totalOffset = '82px'

const ProductList = (props) => (
    <ShadowScrollbar
      style={{ height: `calc(100% - ${totalOffset})` }}
      className='product-list-container'>
        <ul className='product-list'>
            {props.children}
        </ul>
    </ShadowScrollbar>
)

ProductList.propTypes = {
  children: PropTypes.any
}

export default ProductList
