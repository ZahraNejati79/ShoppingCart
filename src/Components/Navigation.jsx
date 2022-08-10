import { NavLink } from "react-router-dom";
import { useCart } from "../Context/CartProvider";
const Navigation = () => {
  const { cart } = useCart();
  return (
    <header className="text-gray-600 bg-blue-200 bg-blue-2 00 width-screen h-16 flex justify-center sticky top-0">
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
              to="/singup"
            >
              ثبت نام/ورود
            </NavLink>
          </li>
          <li className="relative">
            <NavLink
              className="hover:bg-white hover:text-blue-400 p-2 rounded-lg"
              activeClassName="bg-white text-blue-400"
              exact
              to="/cart"
            >
              سبد خرید
            </NavLink>
            <span className="bg-blue-500 flex justify-center items-center top-[-11px] p-2 left-[70px] rounded-full w-[15px] h-[15px] absolute px-2 mr-1 text-white">
              {cart.length}
            </span>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
