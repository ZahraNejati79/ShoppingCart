import { data } from "autoprefixer";
import Layout from "../Layout/Layout";
import * as prod from "../data";
import { useCartAction } from "../Context/CartProvider";

const HomePage = () => {
  const dispatch = useCartAction();
  const addProductHandler = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };

  return (
    <Layout>
      <main className="flex justify-center items-center ">
        <section className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))]  rounded-lg gap-x-2 gap-y-3 max-w-7xl width-full">
          {prod.products.map((p) => {
            return (
              <section
                key={p.name}
                className="bg-blue-200 flex-col items-center justify-center rounded-lg "
              >
                <div className="">
                  <img
                    className="w-full h-auto overflow-auto rounded-t-lg"
                    src={p.image}
                    alt={p.name}
                  />
                </div>
                <div className="flex justify-between items-center p-2">
                  <p>{p.name}</p>
                  <p>{p.price},000 تومان</p>
                </div>
                <div className="flex justify-center items-center rounded-b-lg">
                  <button
                    className="p-2 bg-blue-400 w-full rounded-b-lg"
                    onClick={() => addProductHandler(p)}
                  >
                    افزودن به سبد خرید
                  </button>
                </div>
              </section>
            );
          })}
        </section>
        <h2>this is home page</h2>
      </main>
    </Layout>
  );
};

export default HomePage;
