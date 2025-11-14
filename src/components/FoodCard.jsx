import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";

const FoodCard = ({ food }) => {
  const {
    _id,
    food_name,
    food_image,
    food_category,
    price,
    quantity,
    food_origin,
    description,
  } = food;

  return (
    <motion.div
      layout
      whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.12)" }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="max-w-sm bg-white rounded-2xl overflow-hidden border border-gray-100"
    >
      <div className="relative">
        <motion.img
          src={food_image}
          alt={food_name}
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.06 }}
          transition={{ duration: 0.5 }}
          className="w-full h-56 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
        <div className="absolute left-4 top-4">
          <span className="px-3 py-1 text-xs font-semibold text-white bg-rose-500 rounded-full">
            {food_category}
          </span>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.12 }}
          className="absolute right-4 top-4"
        >
          <div className="bg-white/90 px-3 py-1 rounded-lg text-sm font-semibold">
            {quantity} pcs
          </div>
        </motion.div>
      </div>

      <div className="p-5">
        <motion.h3
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.14 }}
          className="text-lg font-semibold text-gray-900"
        >
          {food_name}
        </motion.h3>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.18 }}
          className="mt-2 text-sm text-gray-600 line-clamp-2"
        >
          {description}
        </motion.p>

        <div className="flex items-center justify-between mt-4">
          <div>
            <motion.div
              initial={{ scale: 0.98 }}
              animate={{ scale: [1, 1.03, 1] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="text-xl font-bold"
            >
              ${price}
            </motion.div>
            <div className="text-xs text-gray-500">Origin: {food_origin}</div>
          </div>

          <Link to={`/details/${_id}`}>
            <button className="px-4 py-2 rounded-xl bg-rose-500 text-white font-semibold shadow-md">
              View
            </button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default FoodCard;
