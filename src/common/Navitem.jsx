import { NavLink } from "react-router-dom";

const Navitem = ({ path, name }) => {
  return (
    <li className="md:ml-7 text-xl mb-4 ">
      <NavLink
        exact
        to={path}
        className="duration-500 text-gray-700 hover:text-gray-400"
      >
        <div>
          <div>{name}</div>
        </div>
      </NavLink>
    </li>
  );
};

export default Navitem;
