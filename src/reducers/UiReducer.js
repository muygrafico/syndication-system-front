import actionTypes from '../constants/actionTypes'

const initialState = {
  loading: false,
  error: null
}

export default (state = initialState, action) => {
 switch (action.type) {
  case actionTypes.GET_PRODUCTS_STARTED:
    return Object.assign({}, state, { loading: true })
case actionTypes.GET_PRODUCTS_SUCCESS:
    return Object.assign({}, state, { loading: false })
case actionTypes.GET_PRODUCTS_ERROR:
    return Object.assign({}, state, { error: true, loading: false })
  default:
   return state
 }
}
