import Navigation from "../Components/Navigation";
const Layout = ({ children }) => {
  return (
    <div className="w-screen h-screen ">
      <Navigation />
      <div className=" flex justify-center  w-full ">{children}</div>
    </div>
  );
};

export default Layout;
