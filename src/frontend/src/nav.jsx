import logo from "./assets/logo.png";
import PropTypes from "prop-types"; // ES6
import { BsSearch } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import appState from "./data/appstate";

export function Nav() {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex flex-row h-[8vh] bg-white items-center shadow-md w-full fixed top-0 z-10">
        <img src={logo} className="w-[8vh] h-[8vh] mx-3" alt="" />

        <NavBarItem name="Home" path="/" />
        <NavBarItem name="About" path="/" />
        <NavBarItem name="Recipies" path="/blog" />

        <div className="flex-1"></div>
        <div
          onClick={() => {
            navigate("/search");
          }}
          className="flex items-center justify-center h-[8vh] px-6 hover:bg-gray-200"
        >
          <BsSearch />
        </div>
        <div className="mr-6 dropdown dropdown-end">
          <label tabIndex={0} className="m-1 btn">
            <FaBars />
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              {appState.isUserLoggedIn() ? (
                <a
                  onClick={() => {
                    appState.logOutUser();
                  }}
                >
                  Logout
                </a>
              ) : (
                <a
                  onClick={() => {
                    navigate("/login");
                  }}
                >
                  Login
                </a>
              )}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

function NavBarItem({ name, path }) {
  const navigate = useNavigate();
  return (
    <>
      <div
        onClick={() => {
          navigate(path);
        }}
        className="cursor-pointer flex items-center justify-center h-[8vh] px-6 hover:bg-gray-200"
      >
        <h2>{name}</h2>
      </div>
    </>
  );
}

NavBarItem.propTypes = {
  name: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};
