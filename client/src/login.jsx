import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export function Login({ setUsername }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); // Initialize useNavigate

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (res.ok) {
        const data = await res.json();
        setUsername(data.username); // Set username on successful login
        navigate("/"); // Redirect to home using useNavigate
      } else {
        const errorData = await res.json();
        setError(errorData.message || "Incorrect email or password"); // Display specific error
      }
    } catch (error) {
      console.error(error);
      setError("An error occurred. Please try again."); // General error message
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Log In</h2>
        <form onSubmit={handleSubmit}>
          <div className="text-center text-red-500">{error}</div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              className="w-full p-2 border border-gray-300 rounded mt-1"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required // Ensure this field is required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              className="w-full p-2 border border-gray-300 rounded mt-1"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required // Ensure this field is required
            />
          </div>
          <button className="w-full bg-sky-500 text-white py-2 rounded-md hover:bg-sky-700 transition">
            Log In
          </button>
        </form>
        <p className="mt-4 text-center text-gray-600">
          Don't have an account?{" "}
          <Link to="/sign-up" className="text-sky-500 hover:underline">Sign up</Link>
        </p>
      </div>
    </div>
  );
}