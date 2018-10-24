import actionTypes from '../constants/actionTypes'

export function selectProduct (id) {
  return {
    type: actionTypes.SELECT_PRODUCT,
    id
  }
}

export function deleteProduct (id) {
  return {
    type: actionTypes.DELETE_PRODUCT,
    id
  }
}
