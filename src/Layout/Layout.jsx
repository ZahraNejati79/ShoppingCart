import Navigation from "../Components/Navigation";

const Layout = ({ children }) => {
  return (
    <div className="width-full">
      <Navigation></Navigation>
      {children}
    </div>
  );
};

export default Layout;
