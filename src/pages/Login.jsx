import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router";

const Login = () => {
  return (
    <div>
      <Helmet>
        <title>Login | RestroBiz</title>
      </Helmet>

      <div className="min-h-screen flex items-center justify-center bg-white font-poppins px-4">
        <div className="w-full max-w-md bg-white shadow-lg rounded-xl border border-gray-100 p-8">
          <h2 className="text-3xl font-semibold text-center text-[#EA6A12] mb-2">
            Welcome Back
          </h2>
          <p className="text-center text-gray-500 mb-6 text-sm">
            Log in to continue your journey with RestroBiz
          </p>

          <form className="space-y-4">
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
                Password
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                className="w-full input input-bordered focus:outline-none focus:ring-2 focus:ring-orange-400"
                required
              />
            </div>

            <div className="flex justify-between items-center text-sm mt-1">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="checkbox checkbox-sm" />
                Remember me
              </label>
              <a href="#" className="text-[#EA6A12] hover:underline">
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full btn bg-[#EA6A12] hover:bg-orange-600 text-white border-none mt-2"
            >
              Login
            </button>
          </form>

          <p className="text-center text-sm mt-4">
            Don’t have an account?{" "}
            <Link
              to="/register"
              className="text-[#EA6A12] font-medium hover:underline"
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
