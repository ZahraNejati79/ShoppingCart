import { BsTelegram, BsLinkedin, BsYoutube } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
const Footer = () => {
  return (
    <footer className="w-full bg-white flex items-center justify-center  py-8 mt-8 mb-0">
      <div className="md:flex md:justify-evenly md:items-center justify-center items-center container text-right w-full ">
        <div className="md:mb-0 mb-4 flex items-center justify-center">
          <ul className="max-w-full">
            <li className="mb-2 font-bold">درباره شیکا</li>
            <li className="cursor-pointer hover:bg-white px-2 rounded-md mb-1 text-slate-600">
              شیکا چیست؟
            </li>
            <li className="cursor-pointer hover:bg-white px-2 rounded-md mb-1 text-slate-600">
              وبلاگ شیکا
            </li>
            <li className="cursor-pointer hover:bg-white px-2 rounded-md mb-1 text-slate-600">
              مزایای شیکا
            </li>
          </ul>
        </div>
        <div className="md:mb-0 mb-4 flex items-center justify-center">
          <ul className="max-w-full">
            <li className="mb-2 font-bold">راهنمای مشتریان</li>
            <li className="cursor-pointer hover:bg-white px-2 rounded-md mb-1 text-slate-600">
              پرسش‌های متداول
            </li>
            <li className="cursor-pointer hover:bg-white px-2 rounded-md mb-1 text-slate-600">
              شرایط و قوانین
            </li>
            <li className="cursor-pointer hover:bg-white px-2 rounded-md mb-1 text-slate-600">
              حریم خصوصی
            </li>
          </ul>
        </div>
        <div className="md:mb-0 mb-4 flex items-center justify-center">
          <ul className="max-w-full">
            <li className="mb-2 font-bold">مارا دنبال کنید</li>
            <li className="flex justify-center md:justify-end text-xl my-2 cursor-pointer text-gray-600">
              <BsTelegram />
            </li>
            <li className="flex justify-center md:justify-end text-xl my-2 cursor-pointer text-gray-600">
              <AiFillInstagram />
            </li>
            <li className="flex justify-center md:justify-end text-xl my-2 cursor-pointer text-gray-600">
              <BsLinkedin />
            </li>
            <li className="flex justify-center md:justify-end text-xl my-2 cursor-pointer text-gray-600">
              <BsYoutube />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
