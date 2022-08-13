import { NavLink } from "react-router-dom";
import { useCart, useCartAction } from "../Context/CartProvider";
import Layout from "../Layout/Layout";

const CartPage = () => {
  const { cart, total } = useCart();
  const dispatch = useCartAction();

  const incrementHandler = (item) => {
    dispatch({ type: "ADD_TO_CART", payload: item });
  };

  const decrementHandler = (item) => {
    dispatch({ type: "REMOVE_PRODUCT", payload: item });
  };

  // const calculateTotal = (items = cart) =>
  //   items.reduce((total, item) => total + item.quantity * item.price, 0);

  if (!cart.length) {
    return (
      <Layout>
        <div className="flex items-center justify-center w-1/2 h-1/2 bg-white">
          <div className="flex flex-col justify-center items-center">
            <h2 className="tex">سبد خرید خالی است</h2>
            <button>
              <NavLink to="/">رفتن به فروشگاه</NavLink>
            </button>
          </div>
        </div>
      </Layout>
    );
  }
  return (
    <Layout>
      <main className=" w-screen flex items-center justify-center text-gray-700">
        <div className="md:flex md:items-center md:justify-center  gap-x-4 md:max-w-6xl w-full md:w-5/6 container">
          <SummaryCart cart={cart} total={total} />
          <div className="max-w-xl border border-gray-300 w-full flex flex-col gap-y-3 justify-center items-center bg-white p-2 mt-2 rounded-lg">
            {cart.map((item) => {
              return (
                <div
                  className="w-full flex py-2 justify-between items-center border-b-2 border-slate-200 "
                  key={item.id}
                >
                  <div className="w-32 h-auto">
                    <img src={item.image} alt={item.name} />
                  </div>
                  <div>
                    <div>{item.name}</div>
                    <div>{item.price},000 تومان</div>
                  </div>
                  <div className=" flex items-center justify-center border border-gray-200 rounded-lg ">
                    <button
                      className="text-blue-500"
                      onClick={() => incrementHandler(item)}
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
                    <div className="px-2 text-gray-700">{item.quantity}</div>
                    <button
                      className="text-red-500"
                      onClick={() => decrementHandler(item)}
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
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default CartPage;
const SummaryCart = ({ cart, total }) => {
  const originalPrice = cart.length
    ? cart.reduce((acc, curr) => acc + curr.quantity * curr.price, 0)
    : 0;
  return (
    <div className=" mt-8 ">
      <div className="  md:w-[20rem] border border-gray-300  bg-white rounded-lg  flex flex-col gap-y-4 justify-start items-start p-2">
        <h2 className="flex justify-end  w-full font-bold">صورت حساب</h2>
        <div className="w-full">
          <div className="flex justify-between mb-2 w-full">
            <div> {originalPrice}</div>
            <div>:قیمت کل</div>
          </div>
          <div className="flex justify-between w-full border-b-2 border-gray-200 pb-2">
            <div>{originalPrice - total}</div>
            <div>:تخفیف</div>
          </div>
        </div>
        <div className="flex justify-between w-full">
          <div>{total}</div>
          <div>:پمبلغ پرداختی</div>
        </div>
        <div className="flex justify-center items-center w-full">
          <NavLink
            to="/checkout"
            className="bg-gradient-to-r from-cyan-400 to-blue-400 text-white flex justify-center items-center w-full mt-4 rounded-lg py-1"
          >
            پرداخت سفارش
          </NavLink>
        </div>
      </div>
    </div>
  );
};
