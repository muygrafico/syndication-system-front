import keyMirror from 'keymirror'

const actionTypes = keyMirror({
  'SELECT_PRODUCT': null,
  'DELETE_PRODUCT': null,
  'GET_PRODUCTS': null,
  'GET_PRODUCTS_SUCCESS': null,
  'GET_PRODUCTS_ERROR': null,
  'GET_PRODUCT_PURCHASES': null,
  'GET_PRODUCT_PURCHASES_SUCCESS': null,
  'GET_PRODUCT_PURCHASES_ERROR': null

})

export default actionTypes
