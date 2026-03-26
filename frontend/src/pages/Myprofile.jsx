import React from "react";
import Navbar from "../components/Navbar";

function Profile() {
  const user = JSON.parse(localStorage.getItem("user"));
  {user && <span>Hello, {user.name}</span>}

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gray-100 pt-24 flex justify-center">
        
        <div className="bg-white shadow-xl rounded-2xl w-[420px] p-6 text-center">

          {/* Profile Avatar */}
          <div className="flex justify-center mb-4">
            <div className="w-20 h-20 rounded-full bg-blue-500 flex items-center justify-center text-white text-2xl font-bold">
              {user?.name?.charAt(0) || "U"}
            </div>
          </div>

          <h2 className="text-xl font-semibold">{user?.name}</h2>
          <p className="text-gray-500 mb-4">{user?.email}</p>

          <hr className="my-4" />

          {/* Extra Info */}
          <div className="text-left space-y-2">
            <p><strong>Role:</strong> User</p>
            <p><strong>Status:</strong> Active</p>
          </div>

          {/* Buttons */}
          <div className="mt-6 space-y-3">
            <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
              Edit Profile
            </button>

            <button
              className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600"
              onClick={() => {
                localStorage.removeItem("user");
                window.location.href = "/login";
              }}
            >
              Logout
            </button>
          </div>

        </div>
      </div>
    </>
  );
}

export default Profile;
