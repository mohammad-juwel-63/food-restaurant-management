import Lottie from "lottie-react";
import React from "react";
import errorpage from "../assets/errorlotti.json";

const ErrorPage = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center font-poppins">
        <Lottie
          className="max-w-4xl max-h-2 mx-auto"
          animationData={errorpage}
          loop={true}
        />
      </div>
    </div>
  );
};

export default ErrorPage;
