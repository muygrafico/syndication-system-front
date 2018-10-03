import React from 'react'
import PropTypes from 'prop-types'

const ProductList = (props) => (
    <ul className='product-list'>
        {props.children}
    </ul>
)

ProductList.propTypes = {
  children: PropTypes.any
}

export default ProductList
