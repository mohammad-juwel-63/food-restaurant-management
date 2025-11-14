import React from "react";
import { motion } from "framer-motion";
import { useLoaderData } from "react-router";

const FoodDetails = () => {
  const detailsFood = useLoaderData();

  const {
    _id,
    food_name,
    food_image,
    food_category,
    price,
    quantity,
    food_origin,
    description,
  } = detailsFood;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-5xl mx-auto p-6 md:p-10"
    >
      <motion.div
        initial={{ y: 20 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        className="bg-white rounded-2xl shadow-lg overflow-hidden border"
      >
        <div className="relative">
          <motion.img
            src={food_image}
            alt={food_name}
            className="w-full h-[320px] md:h-[420px] object-cover"
            initial={{ scale: 1.02 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6 }}
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

          <div className="absolute left-6 bottom-6">
            <h1 className="text-3xl md:text-4xl font-bold text-white drop-shadow-lg">
              {food_name}
            </h1>
            <span className="mt-2 inline-block bg-rose-500 text-white text-xs px-3 py-1 rounded-full">
              {food_category}
            </span>
          </div>
        </div>

        <div className="p-6 md:p-8 space-y-6">
          <p className="text-gray-700 text-lg leading-relaxed">{description}</p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <motion.div
              whileHover={{ scale: 1.04 }}
              className="bg-gray-50 p-4 rounded-xl border text-center"
            >
              <h3 className="text-gray-500 text-sm">Price</h3>
              <p className="text-2xl font-bold text-green-600">${price}</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.04 }}
              className="bg-gray-50 p-4 rounded-xl border text-center"
            >
              <h3 className="text-gray-500 text-sm">Quantity</h3>
              <p className="text-xl font-semibold">{quantity} pcs</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.04 }}
              className="bg-gray-50 p-4 rounded-xl border text-center"
            >
              <h3 className="text-gray-500 text-sm">Origin</h3>
              <p className="text-xl font-semibold">{food_origin}</p>
            </motion.div>
          </div>

          <div className="flex justify-center mt-4">
            <motion.button
              whileTap={{ scale: 0.95 }}
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 250, damping: 20 }}
              className="px-6 py-3 bg-rose-500 text-white font-semibold rounded-xl shadow-md"
            >
              Order Now
            </motion.button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default FoodDetails;
