import { NavLink } from "react-router-dom";
const Navigation = () => {
  return (
    <header className="text-gray-600 bg-blue-300 width-screen h-16 flex justify-center">
      <nav className="container flex justify-center items-center ">
        <ul className="flex justify-center items-center gap-x-4">
          <li>
            <NavLink
              className="hover:bg-white hover:text-blue-400 p-2 rounded-lg"
              activeClassName="bg-white text-blue-400"
              exact
              to="/"
            >
              خانه
            </NavLink>
          </li>
          <li>
            <NavLink
              className="hover:bg-white hover:text-blue-400 p-2 rounded-lg"
              activeClassName="bg-white text-blue-400"
              exact
              to="/cart"
            >
              سبد خرید
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
