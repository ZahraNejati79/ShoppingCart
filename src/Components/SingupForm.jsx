import { useFormik } from "formik";

import { useState } from "react";
import * as yup from "yup";
import InputComponent from "../common/InputComponent";
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
    validateOnMount: true,
  });
  console.log(formik.touched);
  return (
    <div className="bg-white w-full container max-w-md p-4 mt-4 rounded-lg border border-gray-300">
      <form onSubmit={formik.handleSubmit}>
        <InputComponent name="name" formik={formik} label="نام کاربری" />
        <InputComponent
          name="email"
          formik={formik}
          label="ایمیل"
          type="email"
        />
        <InputComponent
          name="phoneNumber"
          formik={formik}
          label="تلفن همراه"
          type="tel"
        />
        <InputComponent
          name="password"
          formik={formik}
          label="رمز عبور"
          type="password"
        />
        <InputComponent
          name="passwordConfirmation"
          formik={formik}
          label="تکرار رمز عبور"
          type="password"
        />

        <button
          disabled={!formik.isValid}
          type="submit"
          className={
            formik.isValid
              ? "flex items-center justify-center w-full bg-blue-400 mt-2 rounded-sm py-1 text-white"
              : "flex items-center justify-center w-full bg-slate-300 mt-2 rounded-sm py-1 text-gray-500"
          }
        >
          ثبت نام
        </button>
      </form>
    </div>
  );
};

export default SingupForm;
