import React from 'react'
import PropTypes from 'prop-types'

const ProductListContainer = (props) => (
    <div className='product-list-container'>
        {props.children}
    </div>
)

ProductListContainer.propTypes = {
  children: PropTypes.any
}

export default ProductListContainer
