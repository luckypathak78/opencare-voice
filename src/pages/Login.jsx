import React, {useState} from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

const handleLogin = async (e) => {
  e.preventDefault();

  try {
    const res = await fetch("http://localhost:3000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    console.log(data); // 👈 see token in console

    if (data.token) {
      localStorage.setItem("token", data.token);
      alert("Login successful");
    } else {
      alert(data.message);
    }
  } catch (error) {
    console.error(error);
  }
};

  return (
    <>
      <Navbar />

      <div className="min-h-screen flex justify-center items-center bg-gray-100">

        <div className="bg-white p-8 rounded-lg shadow w-[400px]">

          <h2 className="text-2xl font-bold mb-6 text-center">
            Login
          </h2>

          <form onSubmit={handleLogin} className="space-y-4">

            <input
              type="email"
              placeholder="Email"  value={email}
  onChange={(e) => setEmail(e.target.value)}
              className="w-full border p-2 rounded"
            />

            <input
              type="password"
              placeholder="Password"  value={password}
  onChange={(e) => setPassword(e.target.value)}
              className="w-full border p-2 rounded"
            />

            <button className="w-full bg-blue-600 text-white py-2 rounded">
              Login
            </button>

          </form>

          <p className="text-sm text-center mt-4">
            Don't have an account?{" "}
            <Link to="/signup" className="text-blue-600">
              Sign Up
            </Link>
          </p>

        </div>

      </div>
    </>
  );
}

export default Login;