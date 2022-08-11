import { useFormik } from "formik";
import { useState } from "react";
import * as yup from "yup";
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

  // const validate = (values) => {
  //   let errors = {};
  //   if (!values.name) {
  //     errors.name = "وارد کردن نام الزامی است";
  //   }
  //   if (!values.email) {
  //     errors.email = "وارد کردن ایمیل الزامی است";
  //   }
  //   if (!values.password) {
  //     errors.password = "وارد کردن رمز عبور الزامی است";
  //   }
  //   return errors;
  // };
  const validationSchema = yup.object({
    name: yup.string().required("وارد کردن نام الزامی است"),
    email: yup
      .string()
      .email("فرمت اشتباه است")
      .required("وارد کردن ایمیل الزامی است"),
    password: yup.string().required("وارد کردن رمز عبور الزامی است"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    onSubmit: (value) => console.log(value),
    // validate,
    validationSchema,
  });
  console.log(formik.touched);
  return (
    <div className="bg-white w-full container max-w-md p-4 mt-4 rounded-lg border border-gray-300">
      <form onSubmit={formik.handleSubmit}>
        <div className="mb-3 flex flex-col items-end justify-center gap-2 rounded-lg focus:border-blue_500 focus:border">
          <label htmlFor="name">نام کاربری</label>
          <input
            className="border border-gray-300 focus:outline-2 focus:outline-blue-500 w-full rounded-sm  p-[2px] px-[5px]"
            name="name"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            type="text"
            value={formik.values.name}
          />
          {formik.errors.name && formik.touched.name && (
            <div className="mb-2 text-red-500 text-sm">
              {formik.errors.name}
            </div>
          )}
        </div>
        <div className="mb-3 flex flex-col items-end justify-center gap-2 rounded-lg focus:border-blue_500 focus:border">
          <label htmlFor="email">ایمیل</label>
          <input
            className="border border-gray-300 focus:outline-2 focus:outline-blue-500 w-full rounded-sm p-[2px] px-[5px]"
            name="email"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            type="email"
            value={formik.values.email}
          />
          {formik.errors.email && formik.touched.email && (
            <div className="mb-2 text-red-500 text-sm">
              {formik.errors.email}
            </div>
          )}
        </div>
        <div className="mb-3 flex flex-col items-end justify-center gap-2 rounded-lg focus:border-blue_500 focus:border">
          <label htmlFor="password">رمز عبور</label>
          <input
            className="border border-gray-300 focus:outline-2 focus:outline-blue-500 w-full rounded-sm p-[2px] px-[5px]"
            name="password"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            type="password"
            value={formik.values.password}
          />
          {formik.errors.password && formik.touched.password && (
            <div className="mb-2 text-red-500 text-sm">
              {formik.errors.password}
            </div>
          )}
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
