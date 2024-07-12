import React from "react";

export function Profile() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Profile</h2>
        <div className="mb-4">
          <label className="block text-gray-700">Username</label>
          <p className="p-2 border border-gray-300 rounded mt-1">JohnDoe</p>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <p className="p-2 border border-gray-300 rounded mt-1">johndoe@example.com</p>
        </div>
        <button className="w-full bg-sky-500 text-white py-2 rounded-md hover:bg-sky-700 transition">
          Edit Profile
        </button>
      </div>
    </div>
  );
}