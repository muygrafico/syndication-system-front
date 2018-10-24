import React, { Component } from 'react'
import ProductList from '../ui/ProductList'
import ProductItem from '../ui/ProductItem'
import ApplicationBox from '../ui/ApplicationBox'
import ProductCrud from '../ui/ProductCrud'
import ProductListConainer from '../containers/ProductListContainer'
import SellAllIcon from '../icons/SellAllIcon'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getProducts, postPurchase } from '../../actions/FetchActions'
import utils from '../../utils'

const mapStateToProps = (store) => {
  return {
    products: store.DataReducer.products,
    productID: store.DataReducer.selectedProductID,
    productPurchases: store.DataReducer.productPurchases
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getProducts: (id) => dispatch(getProducts()),
    postPurchase: (realID, id) => dispatch(postPurchase(realID, id))
  }
}

const calculateTotal = (p) => {
    if (!p || p.length === 0) { return null }

    return p.reduce(function (accumulator, p) {
        return accumulator + p.attributes.sold
    }, 0)
}

const postHandler = (selectedProduct, props) => {
     const totalPurchases = props && props.productPurchases
        ? calculateTotal(props.productPurchases, selectedProduct.attributes.priceInDollars)
        : 0
    console.log(totalPurchases)
    if (
        selectedProduct &&
        selectedProduct.attributes &&
        selectedProduct.attributes.internalId &&
        selectedProduct.attributes.priceInDollars > totalPurchases
        ) {
        props.postPurchase(
            selectedProduct.attributes.internalId,
            props.productID
            )
    }
}

class Application extends Component {
    componentWillMount () {
        this.props.getProducts()
    }

    render () {
    const selectedProduct = this.props && this.props.products && this.props.productID
        ? utils.filterSelected(this.props.productID, this.props.products)[0] : []

    return (
        <div className='application'>
            <h2 className='application__title'>Advances for syndication</h2>
            <button
              onClick={(e) => postHandler(selectedProduct, this.props)}
              className='application__add-button'><span>+</span></button>
            <ApplicationBox>
                <ProductListConainer>
                    <h4 className='product-list__header-title'>Select a product to syndicate</h4>
                    <ProductList>
                        {this.props.products.map(i => {
                            return (
                                <ProductItem
                                  date={i.attributes.year}
                                  amount={i.attributes.priceInDollars}
                                  id={i.id}
                                  key={i.id}
                            />
                            )
                        })
                        }
                    </ProductList>
                    <div className='product-list__bottom-controls'>
                        <button className='button'>
                            <span>Close</span>
                        </button>
                        <button className='button'>
                            <span className='product-list__bottom-controls-icon'>
                                <SellAllIcon />
                                <SellAllIcon inverse />
                            </span>
                            <span>Sell all</span>
                        </button>
                    </div>
                </ProductListConainer>
                <ProductCrud />
            </ApplicationBox>
        </div>
    )
    }
}

Application.propTypes = {
  products: PropTypes.any,
  getProducts: PropTypes.any,
  productID: PropTypes.any
}

export default connect(mapStateToProps, mapDispatchToProps)(Application)
