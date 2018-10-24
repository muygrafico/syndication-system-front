import keyMirror from 'keymirror'

const actionTypes = keyMirror({
  'SELECT_PRODUCT': null,
  'DELETE_PURCHASE': null,
  'DELETE_PURCHASE_SUCESS': null,
  'DELETE_PURCHASE_ERROR': null,
  'POST_PURCHASE': null,
  'POST_PURCHASE_SUCESS': null,
  'POST_PURCHASE_ERROR': null,
  'GET_PRODUCTS': null,
  'GET_PRODUCTS_SUCCESS': null,
  'GET_PRODUCTS_ERROR': null,
  'GET_PRODUCT_PURCHASES': null,
  'GET_PRODUCT_PURCHASES_SUCCESS': null,
  'GET_PRODUCT_PURCHASES_ERROR': null

})

export default actionTypes
