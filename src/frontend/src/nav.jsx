import logo from "./assets/logo.png";
import PropTypes from 'prop-types'; // ES6
import { BsSearch } from "react-icons/bs";
import { FaBars } from "react-icons/fa";


export function Nav() {
  return (
    <>
      <div className="flex flex-row h-[8vh] bg-base-100 items-center">
        <img src={logo} className="w-[8vh] h-[8vh] mx-3" alt="" />

        <NavBarItem name="Home" />
        <NavBarItem name="About" />
        <NavBarItem name="Recipies" />

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

        {/* <NavBarItem name="Search" /> */}

        {/* <div className="flex space-x-10">
          <a className="text-xl normal-case btn btn-ghost">Home</a>
          <a className="text-xl normal-case btn btn-ghost">About</a>
          <a className="text-xl normal-case btn btn-ghost">Blog</a>
        </div>
        <div className=" flex justify-end w-[100%]">
          <div>
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle">
                <div className="indicator">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  <span className="badge badge-sm indicator-item">8</span>
                </div>
              </label>
            </div>
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src={logo} alt="" />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a>Logout</a>
                </li>
              </ul>
            </div>
          </div>
        </div> */}
      </div >
    </>
  );
}


function NavBarItem({ name }) {
  console.log(name);
  return (
    <>
      <div className="flex items-center justify-center h-[8vh] px-6 hover:bg-gray-200">
        <h2 >{name}</h2>
      </div>
    </>
  );
}

NavBarItem.propTypes = {
  name: PropTypes.string.isRequired,
};
