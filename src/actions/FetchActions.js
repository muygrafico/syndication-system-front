import actionTypes from '../constants/actionTypes'

const API_URL = 'http://localhost:3000'

export function selectProduct (id) {
  return {
    type: actionTypes.GET_PRODUCTS,
    id
  }
}

export function postPurchaseFetchSuccess (payload) {
    return {
        type: actionTypes.POST_PURCHASE_SUCESS,
        payload
    }
}

export function postPurchaseHasErrors (errors) {
    return {
        type: actionTypes.POST_PURCHASE_ERROR,
        errors
    }
}

export function postPurchase (realID, productID) {
    const url = API_URL + `/purchases`
    const object = {
      'purchase': {
            investor: 'Some Inversor',
            sold: '50000',
            product_id: realID
          }
    }

    return (dispatch) => {
      fetch(url, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json; charset=utf-8'
        },
        body: JSON.stringify(object)
      }).then(response => {
         if (response.ok === true) {
            dispatch(postPurchaseFetchSuccess())
            dispatch(getProductPurchases(productID))
         }

         if (response.ok === false) {
           response.json().then(json => {
            dispatch(postPurchaseHasErrors(json))
           })
         }
      })
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
          Accept: 'application/json'
        }
      }).then(response => {
         if (response.ok === true) {
            dispatch(deletePurchaseFetchSuccess())
            dispatch(getProductPurchases(productID))
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

export function productsFetch () {
    return {
        type: actionTypes.GET_PRODUCTS_STARTED
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

    return (dispatch, getState) => {
      dispatch(productsFetch())

      console.log('current state:', getState())
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

    return (dispatch, getState) => {
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
