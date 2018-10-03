import React from 'react'
import PropTypes from 'prop-types'

const ProductItem = (props) => (
    <li className='product-item'>
        <span className='product-item__top'>
            <span className='product-item__top__left'>
                <h5 className='product-item__title product-item__title--gray'>product ID</h5>
                <span className='product-item__id'>{props.id}</span>
            </span>
            <span className='product-item__top__right'>
                <h5 className='product-item__title product-item__title--blue'>Advance</h5>
                <span className='product-item__date'>{props.date}</span>
            </span>
        </span>
        <span className='product-item__bottom'>
            <span className='product-item__amount'>${props.amount}</span>
        </span>
    </li>
)

ProductItem.propTypes = {
  id: PropTypes.any,
  date: PropTypes.any,
  amount: PropTypes.any
}

export default ProductItem
