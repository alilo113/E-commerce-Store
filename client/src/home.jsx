import React from "react";
import { Link } from "react-router-dom";
import pic1 from "./assets/c-d-x-PDX_a_82obo-unsplash.jpg";
import pic2 from "./assets/domino-studio-164_6wVEHfI-unsplash.jpg";
import pic3 from "./assets/eniko-kis-KsLPTsYaqIQ-unsplash.jpg";

export function Home() {
  const pictures = [pic1, pic2, pic3];

  return (
    <>
      <header className="flex justify-between bg-slate-800 text-white p-4 mb-4 items-center">
        <h1 className="text-3xl font-bold">E-Commerce Store</h1>
        <nav className="flex gap-4">
          <Link
            to="/log-in"
            className="bg-sky-500 text-white px-5 py-2 rounded-md hover:bg-sky-700 transition"
          >
            Log in
          </Link>
          <Link
            to="/sign-up"
            className="bg-sky-500 text-white px-5 py-2 rounded-md hover:bg-sky-700 transition"
          >
            Sign up
          </Link>
        </nav>
      </header>
      <main className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {pictures.map((pic, index) => (
            <div
              key={index}
              className="border border-gray-200 p-2 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition"
            >
              <img
                src={pic}
                alt={`Image ${index + 1}`}
                className="w-full h-auto object-cover transform hover:scale-105 transition"
              />
              <button className="bg-sky-500 text-white px-4 py-2 rounded-md mt-2 w-full hover:bg-sky-700 transition">
                Add to cart
              </button>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}