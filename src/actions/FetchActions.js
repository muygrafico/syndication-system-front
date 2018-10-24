import actionTypes from '../constants/actionTypes'

const API_URL = 'http://localhost:3000'

export function selectProduct (id) {
  return {
    type: actionTypes.GET_PRODUCTS,
    id
  }
}

export function deletePurchaseFetchSuccess (payload) {
    return {
        type: actionTypes.DELETE_PURCHASE_SUCESS,
        payload
    }
}

export function deletePurchaseHasErrors (errors) {
    return {
        type: actionTypes.DELETE_PURCHASE_ERROR,
        errors
    }
}

export function deletePurchase (purchaseID, productID) {
    const url = API_URL + `/purchases/${purchaseID}`

    return (dispatch) => {
      fetch(url, {
        method: 'DELETE',
        headers: {
          Accept: 'application/json',
          mode: 'no-cors'
        }
      }).then(response => {
         if (response.ok === true) {
          //  response.json().then(json => {
            dispatch(deletePurchaseFetchSuccess())
            dispatch(getProductPurchases(productID))
          //  })
         }

         if (response.ok === false) {
           response.json().then(json => {
            dispatch(deletePurchaseHasErrors(json))
           })
         }
      })
    }
}

export function productsHasErrors (errors) {
    return {
        type: actionTypes.GET_PRODUCTS_ERROR,
        errors
    }
}

export function productsFetchSuccess (payload) {
    return {
        type: actionTypes.GET_PRODUCTS_SUCCESS,
        payload
    }
}

export function purchasesHasErrors (errors) {
    return {
        type: actionTypes.GET_PRODUCT_PURCHASES_ERROR,
        errors
    }
}

export function purchasesFetchSuccess (payload) {
    return {
        type: actionTypes.GET_PRODUCT_PURCHASES_SUCCESS,
        payload
    }
}

export function getProducts () {
    const url = API_URL + `/products`

    return (dispatch) => {
      fetch(url, {
        method: 'GET',
        headers: {
          Accept: 'application/json'
        }
      }).then(response => {
         if (response.ok === true) {
           response.json().then(json => {
            dispatch(productsFetchSuccess(json))
           })
         }

         if (response.ok === false) {
           response.json().then(json => {
            dispatch(productsHasErrors(json))
           })
         }
      })
    }
}

export function getProductPurchases (productID) {
    const url = API_URL + `/products/${productID}/purchases`

    return (dispatch) => {
      fetch(url, {
        method: 'GET',
        headers: {
          Accept: 'application/json'
        }
      }).then(response => {
         if (response.ok === true) {
           response.json().then(json => {
            dispatch(purchasesFetchSuccess(json))
           })
         }

         if (response.ok === false) {
           response.json().then(json => {
            dispatch(purchasesHasErrors(json))
           })
         }
      })
    }
}
