import React, {useState} from "react";
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
      

     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-gray-900 to-blue-800 relative overflow-hidden px-4">
      <div className="absolute w-96 h-96 bg-blue-500/20 blur-3xl rounded-full top-10 left-10"></div>
<div className="absolute w-96 h-96 bg-purple-500/20 blur-3xl rounded-full bottom-10 right-10"></div>

        <div className="relative z-10 bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-3xl shadow-2xl w-full max-w-md">
        <div className="flex justify-center mb-4">
  <div className="bg-blue-600 p-3 rounded-xl text-white text-xl">
    🎤
  </div>
</div>

         <h2 className="text-3xl font-bold text-center text-white">
  Welcome Back 👋
</h2>
<p className="text-center text-gray-300 mt-2 mb-6">
  Login to OpenCare Voice
</p>

          <form onSubmit={handleLogin} className="space-y-4">
{/* Email */}
<div>
              <label className="text-sm text-gray-300">Email</label>
            <input
              type="email"
              placeholder="Email"  value={email}
  onChange={(e) => setEmail(e.target.value)}
              className="w-full mt-1 px-4 py-3 rounded-xl bg-gray-900 bg-opacity-60 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder:text-gray-400 "
            />
</div>
  {/* Password */}
  <div>
      <label className= "text-sm text-gray-300">Password</label>
            <input
              type="password"
              placeholder="Enter your password" 
               value={password}
  onChange={(e) => setPassword(e.target.value)}
              className="w-full mt-1 px-4 py-3 rounded-xl bg-gray-900 bg-opacity-60 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-400"
              />
</div>
  {/* Remember + Forgot */}
            <div className="flex justify-between items-center text-sm text-gray-400">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="accent-blue-500" />
                Remember me
              </label>
 <a href="#" className="hover:text-blue-400 transition">
                Forgot Password?
              </a>
            </div>
               {/* Button */}
            <button
            type="submit"
            className="w-full py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-blue-500 to-indigo-600 hover:scale-105 transition duration-300 shadow-lg"
            >
              Login
            </button>

          </form>
 {/* Divider */}
          <div className="flex items-center my-6">
            <div className="flex-1 h-px bg-gray-600"></div>
            <span className="px-3 text-gray-400 text-sm">OR</span>
            <div className="flex-1 h-px bg-gray-600"></div>
          </div>
 {/* Signup */}
          <p className="text-center text-gray-300 text-sm">
            Don't have an account?{" "}
            <Link to="/signup" className="text-green-400 hover:underline">
              Sign Up
            </Link>
          </p>

        </div>

      </div>
    </>
  );
}

export default Login;