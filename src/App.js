import HomePage from "./Pages/HomePage";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import CartPage from "./Pages/CartPage";
import CartProvider from "./Context/CartProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CheckoutPage from "./Pages/CheckoputPage";

const App = () => {
  return (
    <BrowserRouter>
      <CartProvider>
        <ToastContainer />
        <Switch>
          <Route path="/checkout" component={CheckoutPage} />
          <Route path="/cart" component={CartPage} />
          <Route path="/" component={HomePage} />
        </Switch>
      </CartProvider>
    </BrowserRouter>
  );
};

export default App;
