import Footer from "../Components/Footer";
import Navigation from "../Components/Navigation";
const Layout = ({ children }) => {
  return (
    <div className="h-screen ">
      <Navigation />
      <div className=" flex justify-center  w-full ">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
