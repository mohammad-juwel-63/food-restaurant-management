import React from "react";

const OurChefs = () => {
  return (
    <div>
      <section className="bg-[#191923] font-poppins px-6 py-16">
        <div className="">
          <h2 className="text-3xl font-semibold text-center mb-12 text-white font-playfairDisplay">
            Meet Our Chefs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 font-poppins text-justify">
            <div className="chef-card bg-white rounded-lg shadow-lg overflow-hidden object-cover">
              <img
                src="https://i.ibb.co/MRBhY2Y/22710087-male-chef-kissing-fingers-against-grey-background.jpg"
                alt="Chef 1"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Chef John Doe</h3>
                <p className="text-gray-600">
                  Chef John Doe is known for his innovative dishes and passion
                  for cooking. He has worked in several renowned restaurants
                  around the world, bringing unique flavors to every dish.
                </p>
              </div>
            </div>
            <div className="chef-card bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="https://i.ibb.co/DD3zgrY/Professional-Chef-202009-001.jpg"
                alt="Chef 2"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Chef Jane</h3>
                <p className="text-gray-600">
                  Chef Jane is a master at creating mouthwatering dishes with a
                  modern twist. With her culinary expertise and attention to
                  detail, she ensures every dish is a delightful experience.
                </p>
              </div>
            </div>
            <div className="chef-card bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="https://i.ibb.co/pv0VK8w/young-beautiful-asian-woman-chef-600nw-2317761803.jpg"
                alt="Chef 3"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Chef Doly</h3>
                <p className="text-gray-600">
                  Chef Doly brings a wealth of experience and creativity to our
                  kitchen. His passion for culinary arts shines through in every
                  dish he prepares, delivering an unforgettable dining
                  experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurChefs;
