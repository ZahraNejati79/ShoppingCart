import { useFormik } from "formik";
import { Link } from "react-router-dom";
import * as yup from "yup";
import InputComponent from "../common/InputComponent";

const LoginForm = () => {
  const validationSchema = yup.object({
    email: yup
      .string()
      .email("فرمت اشتباه است")
      .required("وارد کردن ایمیل الزامی است"),
    password: yup.string().required("وارد کردن رمز عبور الزامی است"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (value) => console.log(value),
    validationSchema,
    validateOnMount: true,
  });

  return (
    <div className="bg-white w-full container max-w-md p-4 mt-4 rounded-lg border border-gray-300">
      <form onSubmit={formik.handleSubmit}>
        <InputComponent
          name="email"
          formik={formik}
          label="ایمیل"
          type="email"
        />
        <InputComponent
          name="password"
          formik={formik}
          label="رمز عبور"
          type="password"
        />
        <button
          className="flex items-center disabled:bg-gray-300 disabled:text-gray-400 justify-center w-full bg-blue-400 mt-2 rounded-sm py-1 text-white"
          disabled={!formik.isValid}
          type="submit"
        >
          وارد شدن
        </button>
      </form>
      <div className="border-t-2  flex justify-end items-center border-gray-200 mt-4 pt-4">
        <Link to="/singup" className=" text-blue-500 outline-none">
          هنوز ثبت نام نکرده اید ؟
        </Link>
      </div>
    </div>
  );
};

export default LoginForm;
