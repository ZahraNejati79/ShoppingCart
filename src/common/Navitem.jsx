import { NavLink } from "react-router-dom";

const Navitem = ({ path, name }) => {
  return (
    <li className="md:ml-7 text-lg md:text-xl mb-4 list-none ">
      <NavLink
        exact
        to={path}
        className="duration-500  text-black hover:text-gray-500"
      >
        <div>
          <div>{name}</div>
        </div>
      </NavLink>
    </li>
  );
};

export default Navitem;
