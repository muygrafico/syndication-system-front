import React from 'react'
import PropTypes from 'prop-types'

const ProductItem = (props) => (
    <li className='product-item'>
        <span className='product-item__top'>
            <span className='product-item__top__left'>
                <h5 className='product-item__title'>product id</h5>
                <span>{props.id}</span>
            </span>
            <span className='product-item__top__right'>
                <h5 className='product-item__title'>Advance</h5>
                <span>{props.date}</span>
            </span>
        </span>
        <span className='product-item__bottom'>
            <span>${props.amount}</span>
        </span>
    </li>
)

ProductItem.propTypes = {
  id: PropTypes.any,
  date: PropTypes.any,
  amount: PropTypes.any
}

export default ProductItem
