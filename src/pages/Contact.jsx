import React from "react";
import { Helmet } from "react-helmet";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  return (
    <div>
      <div className="font-poppins bg-white min-h-screen flex flex-col items-center justify-center px-6 py-12">
        <Helmet>
          <title>Contact Us | RestroBiz</title>
        </Helmet>

        <div className="text-center mb-10">
          <h1 className="text-4xl font-semibold text-[#EA6A12]">Contact Us</h1>
          <p className="text-gray-600 mt-2">
            Have a question or feedback? We’d love to hear from you
          </p>
        </div>

        <div className="w-full max-w-5xl grid md:grid-cols-2 gap-8">
          <div className="bg-white shadow-lg rounded-2xl border border-gray-100 p-8">
            <h2 className="text-2xl font-semibold text-[#EA6A12] mb-4">
              Get in Touch
            </h2>

            <div className="space-y-5 text-gray-700">
              <div className="flex items-start gap-3">
                <MapPin className="text-[#EA6A12] w-6 h-6" />
                <p>
                  <span className="font-medium">RestroBiz Restaurant</span>{" "}
                  <br />
                  House #10, Road #3, Block – C, Banani, Dhaka – 1213,
                  Bangladesh
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="text-[#EA6A12] w-5 h-5" />
                <p>+880 1712-345678</p>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="text-[#EA6A12] w-5 h-5" />
                <p>info@restrobiz.com</p>
              </div>
            </div>
          </div>

          <div className="bg-white shadow-lg rounded-2xl border border-gray-100 p-8">
            <h2 className="text-2xl font-semibold text-[#EA6A12] mb-4">
              Send Us a Message
            </h2>

            <form className="space-y-5">
              <div>
                <label className="block text-gray-700 text-sm mb-1">Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-[#EA6A12]"
                />
              </div>

              <div>
                <label className="block text-gray-700 text-sm mb-1">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-[#EA6A12]"
                />
              </div>

              <div>
                <label className="block text-gray-700 text-sm mb-1">
                  Message
                </label>
                <textarea
                  rows="4"
                  placeholder="Write your message here..."
                  className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-[#EA6A12]"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#EA6A12] text-white py-3 rounded-xl font-medium hover:bg-[#d45e10] transition flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" /> Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
