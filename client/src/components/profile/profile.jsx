import React from "react";

export function Profile({ username, email }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Profile</h2>
        <div className="mb-4">
          <label className="block text-gray-700">Username:</label>
          <p className="border-b border-gray-300">{username}</p>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Email:</label>
          <p className="border-b border-gray-300">{email}</p>
        </div>
        {/* Additional user information can go here */}
      </div>
    </div>
  );
}