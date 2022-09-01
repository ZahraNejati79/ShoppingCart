import Layout from "../Layout/Layout";
import * as prod from "../data";
import { useCart, useCartAction } from "../Context/CartProvider";
import { checkInCart } from "../utils/checkInCart";
import { toast } from "react-toastify";
import { findInCart } from "../utils/findInCart";

const HomePage = () => {
  const { cart } = useCart();
  const dispatch = useCartAction();

  const addProductHandler = (product) => {
    toast.success("با موفقیت به سبد خرید اضافه شد");
    dispatch({ type: "ADD_TO_CART", payload: product });
  };
  const incrementHandler = (item) => {
    dispatch({ type: "ADD_TO_CART", payload: item });
  };

  const decrementHandler = (item) => {
    dispatch({ type: "REMOVE_PRODUCT", payload: item });
  };

  return (
    <Layout>
      <main className="flex justify-center items-center  w-full m-4">
        <section className="grid w-full  grid-cols-1 md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 rounded-lg gap-x-8 gap-y-10 max-w-md md:max-w-2xl lg:max-w-7xl ">
          {prod.products.map((p) => {
            return (
              <section
                key={p.name}
                className="bg-cyan-50 shadow-lg rounded-tl-lg rounded-br-lg flex-col items-center justify-between  w-full h-full"
              >
                <div className="w-full">
                  <img
                    className="w-full h-60 overflow-hidden rounded-tl-lg  max-h-80 md:max-h-52 object-cover"
                    src={p.image}
                    alt={p.name}
                  />
                </div>
                <div className="flex-col bg-white text-lg justify-between items-center relative  md:text-lg  rounded-b-lg">
                  <p className="mb-2 p-2">{p.price},000 تومان</p>

                  <div className=" w-full h-10 relative ">
                    {checkInCart(cart, p) ? (
                      <div className="bg-black text-white px-2 py-2 rounded-tl-lg rounded-br-lg absolute right-0 ">
                        <div className="flex justify-center text-lg items-center gap-x-9   md:gap-x-4  py-1 px-2">
                          {findInCart(cart, p).quantity === 1 ? (
                            <button
                              className="text-red-100 text-sm"
                              onClick={() => decrementHandler(p)}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                />
                              </svg>
                            </button>
                          ) : (
                            <>
                              <button
                                className="text-red-100"
                                onClick={() => decrementHandler(p)}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-5 w-5"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z"
                                    clip-rule="evenodd"
                                  />
                                </svg>
                              </button>
                            </>
                          )}

                          <div className="px-2 text-white">
                            {findInCart(cart, p).quantity}
                          </div>
                          <button
                            className="text-blue-100"
                            onClick={() => incrementHandler(p)}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                                clip-rule="evenodd"
                              />
                            </svg>
                          </button>
                        </div>
                      </div>
                    ) : (
                      <button
                        className="bg-black text-white px-4 py-4 rounded-tl-lg rounded-br-lg absolute right-0 "
                        onClick={() => addProductHandler(p)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </button>
                    )}
                  </div>
                </div>
              </section>
            );
          })}
        </section>
      </main>
    </Layout>
  );
};

export default HomePage;
