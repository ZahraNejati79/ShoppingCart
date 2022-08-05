const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      console.log(action);
      return state;
    default:
      return state;
  }
};
export default cartReducer;
