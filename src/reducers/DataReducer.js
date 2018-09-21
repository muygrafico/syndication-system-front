const initialState = {
  testKey: 0
}

export default (state = initialState, action) => {
 switch (action.type) {
  case 'ACTION_SUCCESS':
    return Object.assign({}, state, { testKey: 1 })
  default:
   return state
 }
}
