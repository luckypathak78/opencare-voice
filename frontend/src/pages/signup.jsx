import React, {useState} from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async (e) => {
  e.preventDefault();

  try {
    const res = await fetch("http://127.0.0.1:3000/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });

    const data = await res.json();
    console.log("SIGNUP RESPONSE:", data);

    if (res.ok) {
      alert("Signup successful");
    } else {
      alert(data.message || "Signup failed");
    }
  } catch (error) {
    console.error(error);
    alert("Server error");
  }
};
  return (
    <>
      <Navbar />

      <div className="min-h-screen flex justify-center items-center bg-gray-100">

        <div className="bg-white p-8 rounded-lg shadow w-[400px]">

          <h2 className="text-2xl font-bold mb-6 text-center">
            Create Account
          </h2>

          <form onSubmit={handleSignup} className="space-y-4">

            <input
              type="text"
              placeholder="Full Name" value={name}
  onChange={(e) => setName(e.target.value)}
              className="w-full border p-2 rounded text-black bg-white"
            />

            <input
              type="email" value={email}
  onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="w-full border p-2 rounded text-black bg-white"
            />

            <input
              type="password" value={password}
  onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full border p-2 rounded text-black bg-white"
            />

            <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded">
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