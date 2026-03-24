import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gray-50">

        {/* Hero Section */}
        <div className="text-center py-20 px-6">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">
            OpenCare Voice
          </h1>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            A community-driven platform where citizens can report issues in
            government hospitals and help improve healthcare transparency
            through verified reporting and public accountability.
          </p>

          <div className="space-x-4">
            <Link
              to="/reportissue"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700"
            >
              Report an Issue
            </Link>

            <Link
              to="/dashboard"
              className="bg-gray-200 px-6 py-3 rounded-lg hover:bg-gray-300"
            >
              View Issues
            </Link>
          </div>
        </div>

        {/* Features Section */}
        <div className="grid md:grid-cols-3 gap-6 px-10 pb-20">

          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">
              Verified Reporting
            </h3>
            <p className="text-gray-600">
              Only verified users can submit issues to prevent fake complaints
              and increase credibility.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">
              Evidence Based
            </h3>
            <p className="text-gray-600">
              Users must upload image proof while reporting issues to ensure
              authenticity.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">
              Community Validation
            </h3>
            <p className="text-gray-600">
              Other verified users can validate issues so genuine problems
              gain priority.
            </p>
          </div>

        </div>

      </div>
    </>
  );
}

export default Home;
