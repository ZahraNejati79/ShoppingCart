import { NavLink } from "react-router-dom";
import { useCart } from "../Context/CartProvider";
import Layout from "../Layout/Layout";

const CartPage = () => {
  const { cart, total } = useCart();

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
      <main className=" w-screen flex items-center justify-center">
        <div className="md:grid md:grid-cols-4 w-2/3  gap-x-4 md:max-w-3xl  md:w-5/6 container">
          <div className=" md:col-span-3 w-full flex flex-col gap-y-3 justify-center items-center">
            {cart.map((item) => {
              return (
                <div
                  className="w-full flex  justify-between items-center border-b-2 border-slate-500 "
                  key={item.id}
                >
                  <div className="w-32 h-auto">
                    <img src={item.image} alt={item.name} />
                  </div>
                  <div>
                    <div>{item.name}</div>
                    <div>قیمت : {item.price},000 هزار تومان</div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="md:col-spam-2 mt-8 ">
            <div className=" border-slate-400 max-w-sm border rounded-lg p-1 flex flex-col gap-y-4 justify-start items-start">
              <div className="w-full">
                <div className="flex justify-between mb-2 w-full">
                  <div>تومان 10</div>
                  <div>:قیمت کل</div>
                </div>
                <div className="flex justify-between w-full">
                  <div>10 /</div>
                  <div>:تخفیف</div>
                </div>
              </div>
              <div className="flex justify-center items-center w-full">
                <button className="bg-blue-200 w-full mt-4 rounded-lg py-1">
                  ادامه سفارش
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default CartPage;
