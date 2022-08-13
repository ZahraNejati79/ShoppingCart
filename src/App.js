import HomePage from "./Pages/HomePage";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import CartPage from "./Pages/CartPage";
import CartProvider from "./Context/CartProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CheckoutPage from "./Pages/CheckoputPage";
import LoginPage from "./Pages/LoginPage";
import SingupPage from "./Pages/SingupPage";
import AuthProvider from "./Context/AuthProvider";

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <CartProvider>
          <ToastContainer />
          <Switch>
            <Route path="/checkout" component={CheckoutPage} />
            <Route path="/cart" component={CartPage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/singup" component={SingupPage} />
            <Route path="/" component={HomePage} />
          </Switch>
        </CartProvider>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
