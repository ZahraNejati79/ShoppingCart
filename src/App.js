import HomePage from "./Pages/HomePage";
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  useRouteMatch,
  Router,
} from "react-router-dom";
const App = () => {
  return (
    <BrowserRouter>
      <div dir="rtl" className="container bg-red-500">
        <HomePage />
      </div>
    </BrowserRouter>
  );
};

export default App;
