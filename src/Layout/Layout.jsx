import Footer from "../Components/Footer";
import Navigation from "../Components/Navigation";
const Layout = ({ children }) => {
  return (
    <>
      <div className="h-aouto ">
        <Navigation />
        <div className=" flex justify-center  w-full ">{children}</div>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
