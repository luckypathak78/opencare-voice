import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <>
      <Navbar />

      <div className="min-h-screen flex justify-center items-center bg-gray-100">

        <div className="bg-white p-8 rounded-lg shadow w-[400px]">

          <h2 className="text-2xl font-bold mb-6 text-center">
            Create Account
          </h2>

          <form className="space-y-4">

            <input
              type="text"
              placeholder="Full Name"
              className="w-full border p-2 rounded"
            />

            <input
              type="email"
              placeholder="Email"
              className="w-full border p-2 rounded"
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full border p-2 rounded"
            />

            <button className="w-full bg-blue-600 text-white py-2 rounded">
              Sign Up
            </button>

          </form>

          <p className="text-sm text-center mt-4">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-600">
              Login
            </Link>
          </p>

        </div>

      </div>
    </>
  );
}

export default Signup;