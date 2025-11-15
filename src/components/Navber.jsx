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
          <div className="relative dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full ring ring-[#EA6A12] ring-offset-base-100 ring-offset-2">
                <img
                  src={user?.photoURL || "https://i.ibb.co/4pDNDk1/avatar.png"}
                  alt="User"
                />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-2 p-2 shadow bg-base-100 rounded-box w-40 right-0"
            >
              <li className="px-2 py-1 text-gray-700 font-semibold">
                {user.displayName || "User"}
              </li>
              <li>
                <button
                  onClick={logOut}
                  className="w-full text-red-500 font-semibold hover:text-red-600"
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
