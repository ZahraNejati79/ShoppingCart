import { NavLink } from "react-router-dom";
import { useCart } from "../Context/CartProvider";
const Navigation = () => {
  const { cart } = useCart();
  return (
    <header className="text-gray-600 bg-gradient-to-r from-cyan-200 to-blue-200 bg-blue-2 00 width-screen h-16 flex justify-center sticky top-0">
      <nav className="container flex justify-between items-center max-w-xl md:max-w-2xl lg:max-w-7xl px-4">
        <ul className="flex items-center justify-start gap-x-2 gap-y-2">
          <li>
            <NavLink exact to="/singup">
              <div
                className="hover:bg-white hover:text-blue-400 p-2 rounded-lg flex justify-center items-center"
                activeClassName="bg-white text-blue-400"
              >
                <div>ورود</div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                    />
                  </svg>
                </div>
              </div>
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
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
