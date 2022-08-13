import { data } from "autoprefixer";
import Layout from "../Layout/Layout";
import * as prod from "../data";
import { useCart, useCartAction } from "../Context/CartProvider";
import { checkInCart } from "../utils/checkInCart";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";

const HomePage = () => {
  const { cart } = useCart();
  const dispatch = useCartAction();
  const addProductHandler = (product) => {
    toast.success("با موفقیت به سبد خرید اضافه شد");
    dispatch({ type: "ADD_TO_CART", payload: product });
  };

  return (
    <Layout>
      <main className="flex justify-center items-center bg-gray-200 w-full p-4">
        <section className="grid w-full  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 rounded-lg gap-x-2 gap-y-3 max-w-md md:max-w-2xl lg:max-w-7xl  ">
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
                <div className="flex justify-between items-center bg-gray-100 p-2 text-sm border-2 border-gray-100 rounded-b-lg">
                  <p>{p.price},000 تومان</p>
                  <button
                    className="p-2 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-lg font-bold"
                    onClick={() => addProductHandler(p)}
                  >
                    {checkInCart(cart, p) ? (
                      <NavLink to="/cart">"ادامه سفارش"</NavLink>
                    ) : (
                      "افزودن به سبد خرید"
                    )}
                  </button>
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
