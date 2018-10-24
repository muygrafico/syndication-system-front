import actionTypes from '../constants/actionTypes'

const initialState = {
  testKey: 0,
  selectedProductID: null,
  products: [],
  productPurchases: []
}

const arrayRemove = (arr, key, value) =>
  arr.filter(ele => ele[key] !== value)

export default (state = initialState, action) => {
 switch (action.type) {
  case actionTypes.GET_PRODUCTS_SUCCESS:
    return Object.assign({}, state, { products: action.payload.data })

  case actionTypes.GET_PRODUCT_PURCHASES_SUCCESS:
    return Object.assign({}, state, { productPurchases: action.payload.data })
  case actionTypes.SELECT_PRODUCT:
    return Object.assign({}, state, { selectedProductID: action.id })

  case actionTypes.DELETE_PRODUCT:
    let copy = Object.assign({}, state)
    const updatedArr = arrayRemove(copy.products[1].purchases, 'id', 4)
    copy.products[1].purchases = updatedArr
    return JSON.parse(JSON.stringify(copy))

  default:
   return state
 }
}
