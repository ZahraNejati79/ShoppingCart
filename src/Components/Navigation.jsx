import { useState } from "react";
import { NavLink } from "react-router-dom";
import Navitem from "../common/Navitem";
import { useAuth, useAuthAction } from "../Context/AuthProvider";
import { useCart } from "../Context/CartProvider";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { cart } = useCart();
  const auth = useAuth();
  const setAuth = useAuthAction();
  const [isShow, setIsShow] = useState(false);

  const logOut = () => {
    localStorage.removeItem("authState");
    setAuth(false);
  };

  return (
    <header className=" bg-gradient-to-r from-cyan-50 to-blue-200  width-full  sticky top-0 mb-4 z-10 shadow-md flex items-center justify-center h-20">
      <nav className="container md:flex bg-transparent  md:mx-10 px-7 justify-between md:items-center w-full max-w-xl md:max-w-2xl lg:max-w-7xl ">
        <div className="flex items-center justify-between w-full">
          <div className=" flex items-center ">
            <div>
              <div>
                {auth ? (
                  <div
                    className="relative ml-2 "
                    onClick={() => setOpen(!open)}
                  >
                    <div className="text-lg cursor-pointer border-2 text-blue-900 rounded-full p-[0.1rem] border-blue-900">
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
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                    </div>
                    {open && (
                      <ul className="bg-white text-sm py-0 text-gray-700 absolute top-[3rem] right-[-6rem] w-60 text-right  md:text-lg rounded-md flex flex-col justify-center gap-y-1 shadow-lg">
                        <li className="p-2 w-full  border-b-2 border-gray-300">
                          <div>
                            <div dir="rtl" className="flex gap-x-3">
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
                                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                />
                              </svg>
                              <span>{auth.name}</span>
                            </div>
                            <div>{auth.email}</div>
                          </div>
                        </li>
                        <li className="p-2 w-full   ">
                          <div dir="rtl" className="flex items-center gap-x-2">
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
                                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                              />
                            </svg>

                            <div className="cursor-pointer " onClick={logOut}>
                              خروج از حساب کاربری
                            </div>
                          </div>
                        </li>
                      </ul>
                    )}
                  </div>
                ) : (
                  <Navitem path="/singup" name="ورود" />
                )}
              </div>
            </div>
            <NavLink to="/cart" className="relative ml-6">
              <div className="text-blue-900 text-lg">
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
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <div className="rounded-full bg-cyan-200 w-6 h-6 flex items-center justify-center absolute top-[-1rem] left-2 ">
                {cart.length}
              </div>
            </NavLink>
          </div>
          <div>
            <div
              onClick={() => setIsShow(!isShow)}
              className="w-20 h-auto font-bold text-lg absolute top-6 right-0 cursor-pointer text-gray-700 md:hidden"
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
              className={` md:flex md:items-center md:justify-center pb-12 md:pb-0 md:static bg-gradient-to-r from-cyan-50 to-blue-200  absolute  md:bg-none  left-0 md:z-auto z-[-1] w-full md:w-auto pl-9 md:pl-0 transition-all duration-500 ease-in ${
                isShow ? "top-20 opacity-100" : "top-[-490px]"
              } md:opacity-100`}
            >
              <Navitem path="/" name="درباره ما" />
              <Navitem path="/" name="محصولات" />
              <Navitem path="/" name="خانه" />
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
