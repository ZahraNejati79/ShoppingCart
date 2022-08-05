import HomePage from "./Pages/HomePage";
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  useRouteMatch,
  Router,
} from "react-router-dom";
import CartPage from "./Pages/CartPage";
const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/cart" component={CartPage} />
        <Route path="/" component={HomePage} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
