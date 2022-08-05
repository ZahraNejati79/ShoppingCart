import { createContext, useContext, useReducer } from "react";

const CartContext = createContext();
const CartDispatchContext = createContext();

const initialState = {
  cart: [],
  total: 0,
};

const Provider = ({ children }) => {
  const [cart, dispatch] = useReducer(reducer, []);
  return (
    <CartContext.Provider value={cart}>
      <CartDispatchContext value={dispatch}>{children}</CartDispatchContext>
    </CartContext.Provider>
  );
};

export default Provider;

export const useCart = () => useContext(CartContext);
export const useCartAction = () => useContext(CartDispatchContext);
