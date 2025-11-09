import React, { useState } from "react";
import { toast, Toaster } from "react-hot-toast";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    if (!name || !email || !message) {
      toast.error("Please fill out all fields!");
      return;
    }
    toast.success("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="my-5 bg-gradient-to-b from-orange-50 to-white py-8 px-4">
      <Toaster position="top-center" reverseOrder={false} />
      <h1 className="font-poppins text-4xl font-semibold text-center text-black mb-8">
        Contact Us
      </h1>
      <form
        onSubmit={handleSubmit}
        className="w-full sm:w-3/4 md:w-1/2 mx-auto space-y-4"
      >
        <label className="input input-bordered flex w-full items-center gap-2">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="grow bg-transparent text-white focus:outline-none placeholder-black"
            placeholder="Name"
          />
        </label>

        <label className="input input-bordered flex w-full items-center gap-2">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="grow bg-transparent text-white focus:outline-none placeholder-black"
            placeholder="Email"
          />
        </label>

        <div>
          <label
            htmlFor="message"
            className="block text-xl font-medium text-black mb-1"
          >
            Message
          </label>
          <textarea
            name="message"
            id="message"
            rows="6"
            value={formData.message}
            onChange={handleChange}
            className="mt-1 bg-[#f8f8f8] block w-full border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-[#EA6A12] focus:outline-none sm:text-sm p-2"
          />
        </div>

        <button
          type="submit"
          className="btn border-none w-full bg-[#EA6A12] mt-3 text-white hover:bg-[#d15e0f]"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
