import { useCart } from "../Context/CartProvider";
import Layout from "../Layout/Layout";

const CartPage = () => {
  const cart = useCart().cart;
  const totalCart = useCart().total;
  return (
    <Layout>
      <main>
        <div>{totalCart}</div>
        {cart ? (
          cart.map((p) => <div key={p.id}>{p.name}</div>)
        ) : (
          <div>سبد خرید خالی است</div>
        )}
      </main>
    </Layout>
  );
};

export default CartPage;
