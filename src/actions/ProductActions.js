import actionTypes from '../constants/actionTypes'

export function selectProduct (id) {
  return {
    type: actionTypes.SELECT_PRODUCT,
    id
  }
}
