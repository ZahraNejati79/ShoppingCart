const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const updatedCart = [...state.cart];
      const index = updatedCart.findIndex(
        (product) => product.id === action.payload.id
      );
      if (index < 0) {
        updatedCart.push({ ...action.payload, quantity: 1 });
      } else {
        const updatedItem = { ...updatedCart[index] };
        updatedItem.quantity++;
        updatedCart[index] = updatedItem;
      }
      return {
        ...state,
        cart: updatedCart,
        total: state.total + action.payload.offPrice,
      };
    }
    case "REMOVE_PRODUCT": {
      const updatedCart = [...state.cart];
      const index = updatedCart.findIndex(
        (pro) => pro.id === action.payload.id
      );
      const updatedItem = { ...updatedCart[index] };
      const quantity = updatedItem.quantity;
      if (quantity === 1) {
        const deletedItem = updatedCart.filter(
          (p) => p.id !== action.payload.id
        );
        return {
          ...state,
          cart: deletedItem,
          total: state.total - action.payload.offPrice,
        };
      } else {
        const quantity = updatedItem.quantity--;
        updatedCart[index] = updatedItem;
        return {
          ...state,
          cart: updatedCart,
          total: state.total - action.payload.offPrice,
        };
      }
    }
    default:
      return state;
  }
};
export default cartReducer;
