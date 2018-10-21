import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { selectProduct } from '../../actions/ProductActions'

const mapStateToProps = (store) => {
  return {
    selectedProductID: store.DataReducer.selectedProductID
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    selectProduct: (id) => dispatch(selectProduct(id))
  }
}

const clickHandler = (event, props) => {
    props.selectProduct(props.id)
}

const ProductItem = (props) => (
    <li
      onClick={(e) => clickHandler(e, props)}
      className={'product-item ' +
        (props.selectedProductID === parseInt(props.id)
        ? 'product-item--active'
        : '')}
      >
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
            <span className='product-item__amount'>${props.amount.toLocaleString()}</span>
        </span>
    </li>
)

// export default ProductItem

ProductItem.propTypes = {
  id: PropTypes.any,
  date: PropTypes.any,
  amount: PropTypes.any,
  selectedProductID: PropTypes.any
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductItem)
