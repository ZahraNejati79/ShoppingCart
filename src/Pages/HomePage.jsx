import { data } from "autoprefixer";
import Layout from "../Layout/Layout";
import * as prod from "../data";

const HomePage = () => {
  return (
    <Layout>
      <main className="flex justify-center items-center ">
        <section className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] rounded-lg gap-x-2 gap-y-3 max-w-7xl width-full">
          {prod.products.map((p) => {
            return (
              <section className="bg-yellow-300 flex-col items-center justify-center rounded-lg ">
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
              </section>
            );
          })}
        </section>
      </main>
      <h2>this is home page</h2>
    </Layout>
  );
};

export default HomePage;
