import { useAuth } from "../Context/AuthProvider";
import { useCart } from "../Context/CartProvider";

const Checkout = () => {
  const auth = useAuth();
  const { cart, total } = useCart();
  return (
    <div
      dir="rtl"
      className="flex flex-col items-center justify-center w-full m-4   "
    >
      <div className="flex flex-col justify-center items-center w-full max-w-sm md:max-w-3xl md:grid md:grid-cols-3">
        <div className="bg-white w-full h-full p-4 col-span-2 ">
          <h2 className="mb-4">جزئیات صورت حساب</h2>
          <div className="text-sm flex flex-col justify-centert items-start gap-y-2">
            <p>نام: {auth.name}</p>
            <p>ایمیل: {auth.email}</p>
            <p>شماره موبایل: {auth.phoneNumber}</p>
          </div>
        </div>
        <div className=" w-full p-4 bg-white col-span-1">
          <h2 className="mb-4">سفارش شما</h2>
          <div className="mb-4">
            <h3 className="flex items-center justify-between mb-2 border-b-2 border-gray-200 pb-2 text-sm">
              <p>محصول</p>
              <p>جمع جز</p>
            </h3>
            {cart.map((cart) => {
              return (
                <div
                  key={cart.id}
                  className="flex items-center justify-between text-sm text-gray-600"
                >
                  <p>{cart.name}</p>
                  <p>{cart.offPrice},000</p>
                </div>
              );
            })}
          </div>
          <div className="pb-4">
            <p className="text-blue-300 hover:text-blue-400 hover:font-bold cursor-pointer">
              کد تخفیف دارید ؟
            </p>
          </div>
          <div className="flex justify-between items-center">
            <p>مجموع</p>
            <p>هزار تومان {total},000</p>
          </div>
        </div>
      </div>
      <div className="bg-white w-full max-w-sm md:max-w-3xl p-4">
        <button className="w-full bg-gradient-to-r from-cyan-400 to-blue-400 py-1 rounded-md  ">
          ثبت سفارش
        </button>
      </div>
    </div>
  );
};

export default Checkout;
