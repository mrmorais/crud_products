import * as Action from '../actions/constants'

const initialProductsState = {
  products: []
}

const products = (state = initialProductsState, action) => {
  switch (action.type) {
    case Action.SET_PRODUCTS:
      return { ...state, products: action.data }
    break;
    default:
      return state;
  }
}

export default products