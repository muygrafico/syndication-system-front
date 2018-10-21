import actionTypes from '../constants/actionTypes'

const initialState = {
  testKey: 0,
  selectedProductID: null
}

export default (state = initialState, action) => {
 switch (action.type) {
  case 'ACTION_SUCCESS':
    return Object.assign({}, state, { testKey: 1 })
 case actionTypes.SELECT_PRODUCT:
    return Object.assign({}, state, { selectedProductID: action.id })
  default:
   return state
 }
}
