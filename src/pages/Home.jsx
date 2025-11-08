import React from "react";
import Banner from "../components/Banner";
import TopSelling from "../components/TopSelling";
import OurChefs from "../components/OurChefs";
import RatingSlider from "../components/RatingSlider";
import ContactUs from "../components/ContactUs";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <TopSelling></TopSelling>
      <OurChefs></OurChefs>
      <RatingSlider></RatingSlider>
      <ContactUs></ContactUs>
    </div>
  );
};

export default Home;
