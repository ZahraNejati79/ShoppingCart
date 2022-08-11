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
    name: yup
      .string()
      .required("وارد کردن نام الزامی است")
      .min(6, "حداقل 6 کاراکتر"),
    email: yup
      .string()
      .email("فرمت اشتباه است")
      .required("وارد کردن ایمیل الزامی است"),
    phoneNumber: yup
      .string()
      .matches(/^[0-9]{11}/, "شماره تلفن نامعتبر است")
      .required("وارد کردن تلفن همراه الزامی است"),
    password: yup.string().required("وارد کردن رمز عبور الزامی است"),
    passwordConfirmation: yup
      .string()
      .required("الزامی*")
      .oneOf([yup.ref("password"), null], "با رمز عبور مطابقت ندارد"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phoneNumber: "",
      password: "",
      passwordConfirmation: "",
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
            // onBlur={formik.handleBlur}
            // onChange={formik.handleChange}
            // value={formik.values.name}
            {...formik.getFieldProps("name")}
            type="text"
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
            // onBlur={formik.handleBlur}
            // onChange={formik.handleChange}
            // value={formik.values.email}
            {...formik.getFieldProps("email")}
            type="email"
          />
          {formik.errors.email && formik.touched.email && (
            <div className="mb-2 text-red-500 text-sm">
              {formik.errors.email}
            </div>
          )}
        </div>
        <div className="mb-3 flex flex-col items-end justify-center gap-2 rounded-lg focus:border-blue_500 focus:border">
          <label htmlFor="phoneNumber">تلفن همراه</label>
          <input
            className="border border-gray-300 focus:outline-2 focus:outline-blue-500 w-full rounded-sm p-[2px] px-[5px]"
            name="phoneNumber"
            // onBlur={formik.handleBlur}
            // onChange={formik.handleChange}
            // value={formik.values.email}
            {...formik.getFieldProps("phoneNumber")}
            type="text"
          />
          {formik.errors.phoneNumber && formik.touched.phoneNumber && (
            <div className="mb-2 text-red-500 text-sm">
              {formik.errors.phoneNumber}
            </div>
          )}
        </div>
        <div className="mb-3 flex flex-col items-end justify-center gap-2 rounded-lg focus:border-blue_500 focus:border">
          <label htmlFor="password">رمز عبور</label>
          <input
            className="border border-gray-300 focus:outline-2 focus:outline-blue-500 w-full rounded-sm p-[2px] px-[5px]"
            name="password"
            // onBlur={formik.handleBlur}
            // onChange={formik.handleChange}
            // value={formik.values.password}
            {...formik.getFieldProps("password")}
            type="password"
          />
          {formik.errors.password && formik.touched.password && (
            <div className="mb-2 text-red-500 text-sm">
              {formik.errors.password}
            </div>
          )}
        </div>
        <div className="mb-3 flex flex-col items-end justify-center gap-2 rounded-lg focus:border-blue_500 focus:border">
          <label htmlFor="passwordConfirmation">تکرار رمز عبور</label>
          <input
            className="border border-gray-300 focus:outline-2 focus:outline-blue-500 w-full rounded-sm p-[2px] px-[5px]"
            name="passwordConfirmation"
            // onBlur={formik.handleBlur}
            // onChange={formik.handleChange}
            // value={formik.values.password}
            {...formik.getFieldProps("passwordConfirmation")}
            type="password"
          />
          {formik.errors.passwordConfirmation &&
            formik.touched.passwordConfirmation && (
              <div className="mb-2 text-red-500 text-sm">
                {formik.errors.passwordConfirmation}
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
