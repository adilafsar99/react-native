const INITIAL_STATE = {
  cart: []
}

const reducer = (state = INITIAL_STATE, action) => {
  const cart = [...state.cart];
  cart.push(action.item);
  switch (action.type) {
    case "addToCart":
      return {
        cart
      }
    default:
      return state;
  } 
}

export default reducer;