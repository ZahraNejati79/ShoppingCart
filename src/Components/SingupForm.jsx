import { useState } from "react";

const SingupForm = () => {
  const [userData, setUserDate] = useState({
    name: "",
    email: "",
    password: "",
  });

  const changeSingupHandler = (e) => {
    console.log(e.target.value);
    setUserDate({ ...userData, [e.target.name]: e.target.value });
  };
  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className="bg-white w-full container max-w-md p-4 mt-4 rounded-lg border border-gray-300">
      <form onSubmit={submitHandler}>
        <div className="mb-3 flex flex-col items-end justify-center gap-2 rounded-lg focus:border-blue_500 focus:border">
          <label htmlFor="name">نام</label>
          <input
            className="border border-gray-300 focus:outline-2 focus:outline-blue-500 w-full rounded-sm py-[2px] px-[5px]"
            name="name"
            onChange={changeSingupHandler}
            type="text"
            value={userData.name}
          />
        </div>
        <div className="mb-3 flex flex-col items-end justify-center gap-2 rounded-lg focus:border-blue_500 focus:border">
          <label htmlFor="email">ایمیل</label>
          <input
            className="border border-gray-300 focus:outline-2 focus:outline-blue-500 w-full rounded-sm p-[1px] px-[5px]"
            name="email"
            onChange={changeSingupHandler}
            type="text"
            value={userData.email}
          />
        </div>
        <div className="mb-3 flex flex-col items-end justify-center gap-2 rounded-lg focus:border-blue_500 focus:border">
          <label htmlFor="password">رمز عبور</label>
          <input
            className="border border-gray-300 focus:outline-2 focus:outline-blue-500 w-full rounded-sm p-[1px] px-[5px]"
            name="password"
            onChange={changeSingupHandler}
            type="text"
            value={userData.password}
          />
        </div>
        <button className="flex items-center justify-center w-full bg-slate-300 mt-2 rounded-sm py-1 text-gray-500">
          ثبت نام
        </button>
      </form>
    </div>
  );
};

export default SingupForm;
