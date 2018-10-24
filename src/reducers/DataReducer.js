import actionTypes from '../constants/actionTypes'

const initialState = {
  testKey: 0,
  selectedProductID: null,
  products: [],
  productPurchases: []
}

export default (state = initialState, action) => {
 switch (action.type) {
  case actionTypes.GET_PRODUCTS_SUCCESS:
    return Object.assign({}, state, { products: action.payload.data })

  case actionTypes.GET_PRODUCT_PURCHASES_SUCCESS:
    return Object.assign({}, state, { productPurchases: action.payload.data })
  case actionTypes.SELECT_PRODUCT:
    return Object.assign({}, state, { selectedProductID: action.id })

  case actionTypes.DELETE_PURCHASE_SUCCESS:
    return state

  default:
   return state
 }
}
