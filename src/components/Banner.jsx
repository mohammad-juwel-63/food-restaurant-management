import React from "react";
import { Link } from "react-router";
import { Typewriter } from "react-simple-typewriter";

const Banner = () => {
  return (
    <div>
      <div
        className="hero min-h-96 my-5 object-cover font-poppins"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/wKYFW77/edward-franklin-Nb-Q-M3-Cdzg-unsplash.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-4xl font-bold font-playfairDisplay">
              Welcome To
              <span className="ml-2" style={{ color: "", fontWeight: "bold" }}>
                <Typewriter
                  words={["RestroBiz"]}
                  loop={10}
                  cursor
                  cursorStyle="_"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </h1>
            <p className="mb-5 w-full">
              Our restaurant offers a captivating fusion of flavors, blending
              traditional recipes with modern techniques
            </p>
            <Link to="/allfoods">
              <button className="btn border-none text-white hover:text-black bg-[#EA6A12]">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
