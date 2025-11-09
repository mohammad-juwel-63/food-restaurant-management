import React from "react";
import { Link } from "react-router";

const Navber = () => {
  return (
    <div>
      <div className="bg-base-100 font-poppins mt-5 flex lg:flex-row flex-col gap-4 justify-between items-center font-poppins">
        <div className="">
          <a className=" font-bold text-3xl">
            Restro<span className="text-[#EA6A12]">Biz</span>{" "}
          </a>
        </div>

        <div className="flex flex-row gap-2 font-playfairDisplay ">
          <button className="btn btn-ghost">
            <Link to="/">
              <p className="font-semibold text-lg ">Home</p>
            </Link>
          </button>
          <button className="btn btn-ghost">
            <Link to="/aboutus">
              <p className="font-semibold text-lg ">About</p>
            </Link>
          </button>
          <button className="btn btn-ghost">
            {" "}
            <Link to="/allfoods">
              <p className="font-semibold text-lg">All Foods</p>
            </Link>
          </button>
          <button className="btn btn-ghost">
            {" "}
            <Link to="/gallery">
              {" "}
              <p className="font-semibold text-lg">Gallery</p>
            </Link>
          </button>
        </div>

        <div className="flex flex-row items-center gap-2">
          <>
            <Link to="/login" className="hidden md:block mr-4">
              Login
            </Link>
            <Link to="/resister" className="hidden md:block mr-4">
              Register
            </Link>
          </>

          <>
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img src="" alt="User" />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-4 shadow bg-base-100 rounded-box w-52"
              >
                <Link to="/myfooditem">
                  <li>
                    <a className="font-semibold">My food items</a>
                  </li>
                </Link>
                <Link to="/additem">
                  <li>
                    <a className="font-semibold">Add item</a>
                  </li>
                </Link>
                <Link to="/myordered">
                  <li>
                    <a className="font-semibold">My Ordered</a>
                  </li>
                </Link>
                <li>
                  <a className="font-semibold">Log Out</a>
                </li>
              </ul>
            </div>
          </>
        </div>
      </div>
    </div>
  );
};

export default Navber;
