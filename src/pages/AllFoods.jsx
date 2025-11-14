import React, { useState } from "react";
import { useLoaderData } from "react-router";
import FoodCard from "../components/FoodCard";
import Banner from "../components/Banner";

const AllFoods = () => {
  const allfoods = useLoaderData();
  const [search, setSearch] = useState("");

  const filteredFoods = allfoods.filter((food) =>
    food.food_name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="font-poppins">
      {/* Hero Section */}
      <div
        className="hero h-56 my-5 bg-cover bg-center relative"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/j4pvG0b/foods-to-eat-to-lose-weight.jpg)",
        }}
      >
        <div className="absolute inset-0 bg-black/55"></div>
        <div className="hero-content text-center text-white relative z-10">
          <h1 className="text-5xl font-bold">All Foods</h1>
        </div>
      </div>

      {/* Search Input */}
      <div className="max-w-3xl mx-auto flex justify-center items-center px-4 md:px-0 mb-8">
        <input
          type="text"
          placeholder="Search foods..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-1/2 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-rose-500 shadow-sm"
        />
      </div>

      {/* Foods Grid */}
      <div className="px-4 md:px-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-10">
        {filteredFoods.length > 0 ? (
          filteredFoods.map((food) => <FoodCard key={food._id} food={food} />)
        ) : (
          <p className="text-center text-gray-500 col-span-full mt-10">
            No foods found.
          </p>
        )}
      </div>
    </div>
  );
};

export default AllFoods;
