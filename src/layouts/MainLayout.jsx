import React from "react";
import { Outlet } from "react-router";
import Navber from "../components/Navber";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <div>
      <Navber></Navber>
      <div className="container mx-auto">
        <Outlet></Outlet>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
