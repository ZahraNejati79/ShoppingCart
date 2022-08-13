import { useFormik } from "formik";
import { useState } from "react";
import { Link, NavLink, withRouter } from "react-router-dom";
import * as yup from "yup";
import InputComponent from "../common/InputComponent";
import { singupUser } from "../services/SingupService";
import { showError } from "../utils/shoeError";

const SingupForm = ({ history }) => {
  // const [userData, setUserDate] = useState({
  //   name: "",
  //   email: "",
  //   password: "",
  // });

  // const changeSingupHandler = (e) => {
  //   console.log(e.target.value);
  //   setUserDate({ ...userData, [e.target.name]: e.target.value });
  // };

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

  const [error, setError] = useState(null);

  const onSubmit = async (value) => {
    const { name, email, phoneNumber, password } = value;
    const userData = {
      name,
      email,
      phoneNumber,
      password,
    };
    try {
      const { data } = await singupUser(userData);
      history.push("/");
    } catch (error) {
      if (error.response.data.message) {
        setError(error.response.data.message);
      }
    }
  };

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
    onSubmit,
    // validate,
    validationSchema,
    validateOnMount: true,
  });

  return (
    <div className="bg-white w-full container max-w-md p-4 mt-4 rounded-lg border border-gray-300 mx-2">
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
          className="flex items-center disabled:bg-gray-300 disabled:text-gray-400 justify-center w-full bg-blue-400 mt-2 rounded-sm py-1 text-white"
          // className={
          //   formik.isValid
          //     ? "flex items-center disabled: justify-center w-full bg-blue-400 mt-2 rounded-sm py-1 text-white"
          //     : "flex items-center justify-center w-full bg-slate-300 mt-2 rounded-sm py-1 text-gray-500"
          // }
        >
          ثبت نام
        </button>
        {error && <div>{showError(error)}</div>}
      </form>
      <div className="border-t-2  flex justify-end items-center border-gray-200 mt-4 pt-4">
        <Link to="/login" className=" text-blue-500 outline-none">
          قبلا ثبت نام کرده اید ؟
        </Link>
      </div>
    </div>
  );
};

export default withRouter(SingupForm);
