import { NavLink } from "react-router-dom";

const Navitem = ({ path, name }) => {
  return (
    <li className="md:ml-7 text-lg md:flex md:items-center md:justify-center md:text-xl md:mb-0 mb-4 list-none  ">
      <NavLink
        exact
        to={path}
        className="duration-500 text-black hover:text-gray-500"
      >
        <div>{name}</div>
      </NavLink>
    </li>
  );
};

export default Navitem;
