export const showError = (error) => {
  if (error == `"password" length must be at least 8 characters long`) {
    return (
      <div dir="rtl" className="text-red-500 text-sm">
        رمز عبور حداقل 8 کاراکتر باید باشد
      </div>
    );
  }
  if (error == `Email already exists !`) {
    return (
      <div dir="rtl" className="text-red-500 text-sm">
        کاربری با این ایمیل وجود دارد
      </div>
    );
  }
  return error;
};
