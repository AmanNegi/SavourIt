import logo from "./assets/logo.png";
import PropTypes from 'prop-types'; // ES6
import { BsSearch } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


export function Nav() {
  return (
    <>
      <div className="flex flex-row h-[8vh] bg-base-100 items-center">
        <img src={logo} className="w-[8vh] h-[8vh] mx-3" alt="" />

        <NavBarItem name="Home" path="/" />
        <NavBarItem name="About" path="/" />
        <NavBarItem name="Recipies" path="/blog" />

        <div className="flex-1"></div>
        <div className="flex items-center justify-center h-[8vh] px-6 hover:bg-gray-200">
          <BsSearch />
        </div>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="m-1 btn">
            <FaBars />
          </label>
          <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
            <li><a>Login</a></li>
          </ul>
        </div>
      </div >
    </>
  );
}


function NavBarItem({ name, path }) {

  const navigate = useNavigate();
  return (
    <>
      <div onClick={() => {
        navigate(path);
      }} className="cursor-pointer flex items-center justify-center h-[8vh] px-6 hover:bg-gray-200">
        <h2 >{name}</h2>
      </div>
    </>
  );
}

NavBarItem.propTypes = {
  name: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};
