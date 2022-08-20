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
        <section className="grid w-full  grid-cols-1 md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 rounded-lg gap-x-2 gap-y-3 max-w-md md:max-w-2xl lg:max-w-7xl  ">
          {prod.products.map((p) => {
            return (
              <section
                key={p.name}
                className="bg-white flex-col items-center justify-center rounded-lg w-full "
              >
                <div className="w-full ">
                  <img
                    className="w-full h-auto overflow-auto rounded-t-lg"
                    src={p.image}
                    alt={p.name}
                  />
                </div>
                <div className="flex text-lg justify-between items-center bg-cyan-50 p-2 md:text-sm border-2 border-gray-100 rounded-b-lg">
                  <p>{p.price},000 تومان</p>

                  {checkInCart(cart, p) ? (
                    <div className="flex justify-center items-center gap-x-9 text-lg   md:gap-x-4 border border-slate-200 py-1 px-2">
                      <button
                        className="text-blue-500"
                        onClick={() => incrementHandler(p)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-5 w-5"
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
                      <div className="px-2 text-gray-700">
                        {findInCart(cart, p).quantity}
                      </div>
                      {findInCart(cart, p).quantity === 1 ? (
                        <button
                          className="text-red-500"
                          onClick={() => decrementHandler(p)}
                        >
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
                              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                            />
                          </svg>
                        </button>
                      ) : (
                        <>
                          <button
                            className="text-red-500"
                            onClick={() => decrementHandler(p)}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              class="h-5 w-5"
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
                    </div>
                  ) : (
                    <button
                      className="p-2 bg-gradient-to-r px-4 from-cyan-300 to-blue-300 rounded-lg font-bold"
                      onClick={() => addProductHandler(p)}
                    >
                      افزودن به سبد خرید
                    </button>
                  )}
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
