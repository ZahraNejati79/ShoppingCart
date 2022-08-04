import { NavLink } from "react-router-dom";
const Navigation = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to="/">خانه</NavLink>
          </li>
          <li>
            <NavLink to="/cart">سبد خرید</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
