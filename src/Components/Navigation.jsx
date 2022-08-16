import { useState } from "react";
import { NavLink } from "react-router-dom";
import Navitem from "../common/Navitem";
import { useAuth } from "../Context/AuthProvider";
import { useCart } from "../Context/CartProvider";
import logo from "../icon.svg";
const Navbar = () => {
  const { cart } = useCart();
  const auth = useAuth();
  const [isShow, setIsShow] = useState(false);
  return (
    <header className=" bg-gradient-to-r from-cyan-50 to-blue-200  width-full  sticky top-0 mb-4 z-10 shadow-md">
      <nav className="container md:flex bg-transparent  md:mx-10 px-7 justify-between md:items-center w-full max-w-xl md:max-w-2xl lg:max-w-7xl ">
        <div className="w-20 ">
          <img src={logo} alt="logo" />
        </div>
        <div className="w-20 h-auto font-bold text-lg absolute top-6 right-2 cursor-pointer text-gray-700 md:hidden"></div>
        <div
          onClick={() => setIsShow(!isShow)}
          className="w-20 h-auto font-bold text-lg absolute top-6 right-2 cursor-pointer text-gray-700 md:hidden"
        >
          {isShow ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </div>
        <ul
          className={` md:flex md:items-center pb-12 md:pb-0 md:static bg-gradient-to-r from-cyan-50 to-blue-200  absolute  md:bg-none  left-0 md:z-auto z-[-1] w-full md:w-auto pl-9 md:pl-0 transition-all duration-500 ease-in ${
            isShow ? "top-20 opacity-100" : "top-[-490px]"
          } md:opacity-100`}
        >
          {auth ? (
            <Navitem path="/singup" name="پروفایل" />
          ) : (
            <Navitem path="/singup" name="ورود" />
          )}
          <Navitem path="/" name="خانه" />
          <Navitem path="/" name="محصولات" />
          <Navitem path="/" name="درباره ما" />
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
