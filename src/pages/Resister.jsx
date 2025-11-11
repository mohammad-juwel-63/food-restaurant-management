import React, { use } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router";
import { AuthContexts } from "../contexts/AuthContexts/AuthContexts";

const Register = () => {
  const { createUser } = use(AuthContexts);

  const handleresister = (e) => {
    e.preventDefault();
    const form = e.target;
    // const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    // const photo = form.photo.value;

    createUser(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        alert("user created");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorCode, errorMessage);
      });
  };
  return (
    <div>
      <Helmet>
        <title>Register | RestroBiz</title>
      </Helmet>

      <div className="min-h-screen flex items-center justify-center bg-white font-poppins px-4">
        <div className="w-full max-w-md bg-white shadow-lg rounded-xl border border-gray-100 p-8">
          <h2 className="text-3xl font-semibold text-center text-[#EA6A12] mb-2">
            Create Account
          </h2>
          <p className="text-center text-gray-500 mb-6 text-sm">
            Sign up to get started with RestroBiz
          </p>

          <form onSubmit={handleresister} className="space-y-4">
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="w-full input input-bordered focus:outline-none focus:ring-2 focus:ring-orange-400"
                required
              />
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="w-full input input-bordered focus:outline-none focus:ring-2 focus:ring-orange-400"
                required
              />
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">
                Photo URL
              </label>
              <input
                type="text"
                name="photo"
                placeholder="https://example.com/photo.jpg"
                className="w-full input input-bordered focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter password"
                className="w-full input input-bordered focus:outline-none focus:ring-2 focus:ring-orange-400"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full btn bg-[#EA6A12] hover:bg-orange-600 text-white border-none mt-2"
            >
              Register
            </button>
          </form>

          <p className="text-center text-sm mt-4">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-[#EA6A12] font-medium hover:underline"
            >
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
