import Navigation from "../Components/Navigation";

const Layout = ({ children }) => {
  return (
    <div className="width-full">
      <Navigation />
      {children}
    </div>
  );
};

export default Layout;
