import React from "react";

function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between">
      <h1 className="text-xl font-bold">OpenCare Voice</h1>

      <div className="space-x-4">
        <a href="/" className="hover:underline">Home</a>
        <a href="/Reportissue" className="hover:underline">Report Issue</a>
        <a href="/dashboard" className="hover:underline">Dashboard</a>
        <a href="/login" className="hover:underline">Login</a>
        <a href="/Signup" className="hover:underline">Signup</a>

      </div>
    </nav>
  );
}

export default Navbar;