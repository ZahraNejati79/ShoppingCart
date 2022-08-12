import { useFormik } from "formik";
import * as yup from "yup";
import InputComponent from "../common/InputComponent";

const LoginForm = () => {
  const validationSchema = yup.object({
    name: yup
      .string()
      .required("وارد کردن نام الزامی است")
      .min(6, "حداقل 6 کاراکتر"),
    phoneNumber: yup
      .string()
      .matches(/^[0-9]{11}/, "شماره تلفن نامعتبر است")
      .required("وارد کردن تلفن همراه الزامی است"),
    password: yup.string().required("وارد کردن رمز عبور الزامی است"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      phoneNumber: "",
      password: "",
    },
    onSubmit: (value) => console.log(value),
    validationSchema,
    validateOnMount: true,
  });
  console.log(formik.isValid);

  return (
    <div className="bg-white w-full container max-w-md p-4 mt-4 rounded-lg border border-gray-300">
      <form onSubmit={formik.handleSubmit}>
        <InputComponent name="name" formik={formik} label="نام کاربری" />
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
        <button
          className="flex items-center disabled:bg-gray-300 disabled:text-gray-400 justify-center w-full bg-blue-400 mt-2 rounded-sm py-1 text-white"
          disabled={!formik.isValid}
          type="submit"
        >
          وراد شدن
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
