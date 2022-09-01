const InputComponent = ({ name, type = "text", formik, label }) => {
  return (
    <div className="mb-3 flex flex-col items-end justify-center gap-2 rounded-lg focus:border-blue_500 focus:border">
      <label htmlFor={name}>{label}</label>
      <input
        className="border border-gray-300 focus:outline-2 focus:outline-gray-500 rounded-lg w-full   p-[2px] px-[5px]"
        name={name}
        id={name}
        // onBlur={formik.handleBlur}
        // onChange={formik.handleChange}
        // value={formik.values.name}
        {...formik.getFieldProps(name)}
        type={type}
      />
      {formik.errors[name] && formik.touched[name] && (
        <div className="mb-2 text-red-500 text-sm">{formik.errors[name]}</div>
      )}
    </div>
  );
};

export default InputComponent;
