import React from "react";
import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import ErrorPage from "../components/ErrorPage";
import AllFoods from "../pages/AllFoods";
import Gallery from "../pages/Gallery";
import AboutUs from "../components/AboutUs";
import Resister from "../pages/Resister";
import Login from "../pages/Login";
import AddressPage from "../components/AddressPage";
import Contact from "../pages/Contact";
// import { RouterProvider } from "react-router/dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        path: "/allfoods",
        Component: AllFoods,
      },

      {
        path: "/gallery",
        Component: Gallery,
      },

      // footer component route
      {
        path: "/aboutus",
        Component: AboutUs,
      },
      {
        path: "/address",
        Component: AddressPage,
      },

      {
        path: "/contact",
        Component: Contact,
      },

      {
        path: "/resister",
        Component: Resister,
      },

      {
        path: "/login",
        Component: Login,
      },
    ],
  },
]);

export default router;
