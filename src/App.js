import HomePage from "./Pages/HomePage";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import CartPage from "./Pages/CartPage";
import CartProvider from "./Context/CartProvider";
const App = () => {
  return (
    <BrowserRouter>
      <CartProvider>
        <Switch>
          <Route path="/cart" component={CartPage} />
          <Route path="/" component={HomePage} />
        </Switch>
      </CartProvider>
    </BrowserRouter>
  );
};

export default App;
