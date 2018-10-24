import React from 'react'
import RemainingAmount from './RemainingAmount'
import CircularProgressbar from 'react-circular-progressbar'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import utils from '../../utils'
import { deletePurchase } from '../../actions/FetchActions'

import 'react-circular-progressbar/dist/styles.css'

const mapStateToProps = (store) => {
  return {
    selectedProductID: store.DataReducer.selectedProductID,
    products: store.DataReducer.products,
    productPurchases: store.DataReducer.productPurchases
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    deletePurchase: (id, productID) => dispatch(deletePurchase(id, productID))
  }
}

const deleteHandler = (id, props, productID) => {
    props.deletePurchase(id, productID)
}

const ProductCrud = (props) => {
    const productCRUD = props && props.products && props.selectedProductID
        ? utils.filterSelected(props.selectedProductID, props.products)[0] : []

    const productSelected =
        utils.filterSelected(props.selectedProductID, props.products)

    const limitAmount = productCRUD &&
                        productCRUD.attributes &&
                        productCRUD.attributes.priceInDollars
                        ? productCRUD.attributes.priceInDollars
                        : 0

    let leftAcc = 0

    return (
        <div className='product-crud'>
            <div>
                <div className='product-crud__header'>
                    <h3 className='product-crud__id'>
                        Product ID {productCRUD.id}
                    </h3>
                </div>
                <div className='product-crud__purchase-list'>
                    <table className='product-crud__table'>
                        <thead>
                            <tr>
                                <th>Inverstors name</th>
                                <th>Sold</th>
                                <th>% Purchased</th>
                                <th>Left amount</th>
                                <th>% Remaining</th>
                                <th>&nbsp;</th>
                            </tr>
                        </thead>
                        <tbody>
                            {productCRUD &&
                            props.productPurchases &&
                            props.productPurchases.length > 0 &&
                            props.productPurchases.map((p, i) => {
                                leftAcc += p.attributes.sold
                                p.amountLeft = limitAmount - leftAcc
                                p.purchasedPercentage = ((p.attributes.sold * 100) / limitAmount).toFixed(1)
                                p.remainingPercentage = ((leftAcc * 100) / limitAmount).toFixed(1)
                                    return (
                                        <tr key={i}>
                                            <td>
                                                <span className='product-crud__text'>
                                                    {p.attributes.investor}
                                                </span>
                                            </td>
                                            <td>
                                                <span className='product-crud__text'>
                                                    ${p.attributes.sold.toLocaleString()}
                                                </span>
                                            </td>
                                            <td>
                                                <div className='circular-progressbar-container'>
                                                    <CircularProgressbar
                                                      percentage={p.purchasedPercentage}
                                                      text={`${p.purchasedPercentage}`}
                                                      strokeWidth={4}
                                                      styles={{
                                                        path: { stroke: `rgba(60, 207, 199, 1)` },
                                                        text: { fill: 'rgba(0,0,0, .6)', fontSize: '22px' }
                                                    }}
                                                    />
                                                </div>
                                            </td>
                                            <td>
                                                <span className='product-crud__text'>
                                                    ${p.amountLeft.toLocaleString()}
                                                </span>
                                            </td>
                                            <td>
                                                <div className='circular-progressbar-container'>
                                                    <CircularProgressbar
                                                      percentage={p.remainingPercentage}
                                                      text={`${p.remainingPercentage}`}
                                                      strokeWidth={4}
                                                      styles={{
                                                        path: { stroke: `#FF9804` },
                                                        text: { fill: 'rgba(0,0,0, .6)', fontSize: '22px' }
                                                    }}
                                                    />
                                                </div>
                                            </td>
                                            <td>
                                                <button>&#9999;</button>
                                                <button
                                                  onClick={(e) => deleteHandler(p.id, props, productCRUD.id)}
                                                  >
                                                  x
                                                </button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            <div className='product-crud__footer'>
                <RemainingAmount
                  productSelected={productSelected}
                  products={props.products}
                  productPurchases={props.productPurchases}
                />
            </div>
        </div>
    )
}

ProductCrud.propTypes = {
  selectedProductID: PropTypes.any,
  productPurchases: PropTypes.any,
  products: PropTypes.any
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductCrud)
