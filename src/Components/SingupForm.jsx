import { useFormik } from "formik";
import { useState } from "react";

const SingupForm = () => {
  // const [userData, setUserDate] = useState({
  //   name: "",
  //   email: "",
  //   password: "",
  // });

  // const changeSingupHandler = (e) => {
  //   console.log(e.target.value);
  //   setUserDate({ ...userData, [e.target.name]: e.target.value });
  // };
  const submitHandler = (e) => {
    e.preventDefault();
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    onSubmit: (value) => console.log(value),
  });
  console.log(formik.values);
  return (
    <div className="bg-white w-full container max-w-md p-4 mt-4 rounded-lg border border-gray-300">
      <form onSubmit={formik.handleSubmit}>
        <div className="mb-3 flex flex-col items-end justify-center gap-2 rounded-lg focus:border-blue_500 focus:border">
          <label htmlFor="name">نام</label>
          <input
            className="border border-gray-300 focus:outline-2 focus:outline-blue-500 w-full rounded-sm py-[2px] px-[5px]"
            name="name"
            onChange={formik.handleChange}
            type="text"
            value={formik.values.name}
          />
        </div>
        <div className="mb-3 flex flex-col items-end justify-center gap-2 rounded-lg focus:border-blue_500 focus:border">
          <label htmlFor="email">ایمیل</label>
          <input
            className="border border-gray-300 focus:outline-2 focus:outline-blue-500 w-full rounded-sm p-[1px] px-[5px]"
            name="email"
            onChange={formik.handleChange}
            type="text"
            value={formik.values.email}
          />
        </div>
        <div className="mb-3 flex flex-col items-end justify-center gap-2 rounded-lg focus:border-blue_500 focus:border">
          <label htmlFor="password">رمز عبور</label>
          <input
            className="border border-gray-300 focus:outline-2 focus:outline-blue-500 w-full rounded-sm p-[1px] px-[5px]"
            name="password"
            onChange={formik.handleChange}
            type="text"
            value={formik.values.password}
          />
        </div>
        <button
          type="submit"
          className="flex items-center justify-center w-full bg-slate-300 mt-2 rounded-sm py-1 text-gray-500"
        >
          ثبت نام
        </button>
      </form>
    </div>
  );
};

export default SingupForm;
