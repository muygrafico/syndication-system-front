import React, { Component } from 'react'
import ProductList from '../ui/ProductList'
import ProductItem from '../ui/ProductItem'
import ApplicationBox from '../ui/ApplicationBox'
import ProductCrud from '../ui/ProductCrud'
import ProductListConainer from '../containers/ProductListContainer'
import SellAllIcon from '../icons/SellAllIcon'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getProducts } from '../../actions/FetchActions'

const mapStateToProps = (store) => {
  return {
    products: store.DataReducer.products
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getProducts: (id) => dispatch(getProducts())
  }
}
class Application extends Component {
    componentDidMount (a, b) {
        this.props.getProducts()
    }

    render () {
    return (
        <div className='application'>
            <h2 className='application__title'>Advances for syndication</h2>
            <button className='application__add-button'><span>+</span></button>
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
  getProducts: PropTypes.any
}

export default connect(mapStateToProps, mapDispatchToProps)(Application)
