import React from "react";
import { Helmet } from "react-helmet";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const AddressPage = () => {
  return (
    <div className="font-poppins bg-white min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 py-10">
      <Helmet>
        <title>Our Address | RestroBiz</title>
      </Helmet>
      <div className="text-center mb-10">
        <h1 className="text-3xl sm:text-4xl font-semibold text-[#EA6A12]">
          Visit Our Restaurant
        </h1>
        <p className="text-gray-600 mt-2 text-sm sm:text-base">
          We’re always ready to serve you delicious moments
        </p>
      </div>
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
        {/* Address Info */}
        <div className="bg-white shadow-xl rounded-2xl border border-gray-100 p-6 sm:p-8">
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#EA6A12] mb-5">
            Our Location
          </h2>

          <div className="space-y-5 text-gray-700 text-sm sm:text-base">
            <div className="flex items-start gap-3">
              <MapPin className="text-[#EA6A12] w-6 h-6 shrink-0" />
              <p>
                <span className="font-medium">RestroBiz Restaurant</span> <br />
                House #10, Road #3, Block – C, Banani, Dhaka – 1213, Bangladesh
              </p>
            </div>

            <div className="flex items-center gap-3">
              <Phone className="text-[#EA6A12] w-5 h-5 shrink-0" />
              <p>+880 1712-345678</p>
            </div>

            <div className="flex items-center gap-3">
              <Mail className="text-[#EA6A12] w-5 h-5 shrink-0" />
              <p>info@restrobiz.com</p>
            </div>

            <div className="flex items-start gap-3">
              <Clock className="text-[#EA6A12] w-5 h-5 shrink-0" />
              <p>
                <span className="font-medium">Open Hours:</span> <br />
                Sat – Thu: 10:00 AM – 10:00 PM <br />
                Friday: 3:00 PM – 11:00 PM
              </p>
            </div>
          </div>
        </div>

        {/* Google Map */}
        <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-100 h-[300px] sm:h-[380px] md:h-auto">
          <iframe
            title="RestroBiz Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.846190215485!2d90.40441247509894!3d23.75086657868889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755bf59b2d4c2ad%3A0x6e00e2b78d3dc47c!2sBanani%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1695041911163!5m2!1sen!2sbd"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
      <p className="mt-10 text-gray-500 text-center text-xs sm:text-sm">
        © {new Date().getFullYear()} RestroBiz | Crafted with in Bangladesh
      </p>
    </div>
  );
};

export default AddressPage;
