import React from "react";
import { motion } from "framer-motion";
import { FaUtensils, FaSmileBeam, FaLeaf } from "react-icons/fa";

const AboutUs = () => {
  return (
    <div>
      <section className="bg-gradient-to-b from-orange-50 to-white py-16 px-6 md:px-20">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-extrabold text-orange-600 mb-6"
          >
            About <span className="text-gray-800">Our Restaurant</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-gray-600 text-lg leading-relaxed mb-12"
          >
            Welcome to{" "}
            <span className="font-semibold text-orange-500">TasteEase</span> —
            where food meets passion. We believe every meal should tell a story,
            made with love, fresh ingredients, and a sprinkle of creativity.
            Whether you dine in or order online, our goal is simple — to make
            every bite unforgettable.
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mt-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-2xl shadow-md p-8 border border-orange-100"
            >
              <FaUtensils className="text-5xl text-orange-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-700">
                Authentic Taste
              </h3>
              <p className="text-gray-600">
                Experience dishes crafted with real spices and timeless recipes
                passed down through generations.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-2xl shadow-md p-8 border border-orange-100"
            >
              <FaSmileBeam className="text-5xl text-orange-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-700">
                Customer Delight
              </h3>
              <p className="text-gray-600">
                Your happiness is our top priority — we serve smiles with every
                meal, every time.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-2xl shadow-md p-8 border border-orange-100"
            >
              <FaLeaf className="text-5xl text-orange-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-700">
                Fresh Ingredients
              </h3>
              <p className="text-gray-600">
                From farm to plate — every ingredient is selected with care for
                quality, freshness, and sustainability.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
