import React, { useEffect, useState } from "react";
import FoodCard from "./FoodCard";

const TopSelling = () => {
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/allfoods")
      .then((res) => res.json())
      .then((data) => {
        setFoods(data);
        setLoading(false);
      });
  }, []);

  return (
    <div className="font-poppins px-4 md:px-10 mb-5">
      <h2 className="font-bold mb-4 flex justify-center text-3xl mt-4">
        Top Selling Food
      </h2>

      {loading && (
        <p className="text-center text-gray-500 text-lg mt-6">
          Loading foods...
        </p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-8">
        {!loading &&
          foods.map((food) => <FoodCard key={food._id} food={food} />)}
      </div>
    </div>
  );
};

export default TopSelling;
