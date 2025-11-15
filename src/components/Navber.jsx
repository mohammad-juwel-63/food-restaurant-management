import React, { useContext } from "react";
import { Link } from "react-router";
import { AuthContexts } from "../contexts/AuthContexts/AuthContexts";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContexts);

  return (
    <div className="bg-base-100 font-poppins mt-5 flex flex-col lg:flex-row justify-between items-center px-6 py-3 shadow-sm rounded-xl border border-gray-100">
      <div className="text-3xl font-bold tracking-wide">
        Restro<span className="text-[#EA6A12]">Biz</span>
      </div>

      <div className="flex flex-wrap justify-center gap-4 mt-3 lg:mt-0">
        <Link
          to="/"
          className="text-gray-700 hover:text-[#EA6A12] font-semibold text-lg transition-colors duration-200"
        >
          Home
        </Link>
        <Link
          to="/aboutus"
          className="text-gray-700 hover:text-[#EA6A12] font-semibold text-lg transition-colors duration-200"
        >
          About
        </Link>
        <Link
          to="/allfoods"
          className="text-gray-700 hover:text-[#EA6A12] font-semibold text-lg transition-colors duration-200"
        >
          All Foods
        </Link>
        <Link
          to="/gallery"
          className="text-gray-700 hover:text-[#EA6A12] font-semibold text-lg transition-colors duration-200"
        >
          Gallery
        </Link>
      </div>

      {/* Auth Section */}
      <div className="flex items-center gap-3 mt-3 lg:mt-0">
        {!user ? (
          <>
            <Link
              to="/login"
              className="px-5 py-2 rounded-full border border-[#EA6A12] text-[#EA6A12] font-semibold hover:bg-[#EA6A12] hover:text-white transition-all duration-300"
            >
              Login
            </Link>
            <Link
              to="/resister"
              className="px-5 py-2 rounded-full bg-[#EA6A12] text-white font-semibold hover:bg-orange-600 transition-all duration-300"
            >
              Register
            </Link>
          </>
        ) : (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full ring ring-[#EA6A12] ring-offset-base-100 ring-offset-2">
                <img src={user?.photoURL} alt="User" />
              </div>
              <p>{user.displayName}</p>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-4 shadow bg-base-100 rounded-box w-52"
            >
              <Link to="/myfooditem">
                <li>
                  <a className="font-semibold">My Food Items</a>
                </li>
              </Link>
              <Link to="/additem">
                <li>
                  <a className="font-semibold">Add Item</a>
                </li>
              </Link>
              <Link to="/myordered">
                <li>
                  <a className="font-semibold">My Ordered</a>
                </li>
              </Link>
              <li>
                <button
                  onClick={logOut}
                  className="font-semibold text-red-500 hover:text-red-600"
                >
                  Log Out
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
