import actionTypes from '../constants/actionTypes'

const initialState = {
  testKey: 0,
  selectedProductID: null,
  products: [
    {
        id: 35352323521,
        date: '15/02/2018',
        amount: 300000,
        purchases: [
          {
              inverstorsName: 'This is another that might be a little way... too long',
              sold: 100000,
              purchasedPercentage: 25,
              amountLeft: 25000,
              remainingPercentage: 100
          }
        ]
    },
     {
        id: 7854232322,
        date: '20/08/2017',
        amount: 150000,
        purchases: [
            {
              inverstorsName: 'Y Combinator',
              sold: 830800,
              purchasedPercentage: 10.7,
              amountLeft: 230800,
              remainingPercentage: 100
            },
            {
              inverstorsName: 'SassStr',
              sold: 830800,
              purchasedPercentage: 20,
              amountLeft: 230800,
              remainingPercentage: 89.3
            },
            {
              inverstorsName: 'IndieGo',
              sold: 830800,
              purchasedPercentage: 20,
              amountLeft: 230800,
              remainingPercentage: 89.3
            }
        ]
    }
  ]
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
