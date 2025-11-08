import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const RatingSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024, // Tablet
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // Mobile
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const reviews = [
    { name: "Rahim", text: "The food was absolutely delicious!" },
    { name: "Karim", text: "Great ambiance and friendly service." },
    { name: "Amina", text: "Loved the desserts! Will come again." },
    { name: "Rafiq", text: "Best restaurant in town!" },
    { name: "Sumi", text: "Affordable and tasty meals." },
  ];

  return (
    <div className="px-4 sm:px-8 md:px-12 py-10 bg-gray-50">
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
        Customer Reviews
      </h2>
      <Slider {...settings}>
        {reviews.map((review, index) => (
          <div key={index} className="px-3">
            <div className="bg-white rounded-2xl shadow-md p-6 text-center h-full">
              <p className="text-gray-600 italic mb-4">"{review.text}"</p>
              <h4 className="font-semibold text-gray-800">{review.name}</h4>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default RatingSlider;
