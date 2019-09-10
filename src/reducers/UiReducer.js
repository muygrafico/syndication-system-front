import actionTypes from '../constants/actionTypes'

const initialState = {
  loading: false,
  error: null
}

export default (state = initialState, action) => {
 switch (action.type) {
  case actionTypes.GET_PRODUCTS_STARTED:
    return Object.assign({}, state, { loading: true })
  case actionTypes.GET_PRODUCT_PURCHASES:
    return Object.assign({}, state, { loading: true })
  case actionTypes.DELETE_PURCHASE:
    return Object.assign({}, state, { loading: true })
  case actionTypes.POST_PURCHASE:
    return Object.assign({}, state, { loading: true })
case actionTypes.POST_PURCHASE_SUCCESS:
    return Object.assign({}, state, { loading: false })
  case actionTypes.DELETE_PURCHASE_SUCESS:
      return Object.assign({}, state, { loading: false })
  case actionTypes.GET_PRODUCT_PURCHASES_SUCCESS:
    return Object.assign({}, state, { loading: false })
case actionTypes.GET_PRODUCTS_SUCCESS:
    return Object.assign({}, state, { loading: false })
case actionTypes.GET_PRODUCTS_ERROR:
    return Object.assign({}, state, { error: true, loading: false })
  default:
   return state
 }
}
