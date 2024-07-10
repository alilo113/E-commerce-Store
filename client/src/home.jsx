import React from "react";
import pic1 from "./assets/c-d-x-PDX_a_82obo-unsplash.jpg";
import pic2 from "./assets/domino-studio-164_6wVEHfI-unsplash.jpg";
import pic3 from "./assets/eniko-kis-KsLPTsYaqIQ-unsplash.jpg";

export function Home() {
  const pictures = [pic1, pic2, pic3];

  return (
    <>
    <div className="flex justify-between bg-slate-800 text-white p-4 mb-4 items-center">
        <div>
            <h1>E-Commerce Store</h1>
        </div>
        <div className="flex gap-4">
            <button className="bg-sky-500 text-white px-5 py-2 rounded-md mt-2 hover:bg-sky-900">Log in</button>
            <button className="bg-sky-500 text-white px-5 py-2 rounded-md mt-2 hover:bg-sky-900">sign up</button>
        </div>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
      {pictures.map((pic, index) => (
        <div key={index} className="border border-black p-2 flex flex-col items-center">
          <img src={pic} alt={`Image ${index + 1}`} className="w-full h-auto max-w-full max-h-full" />
          <button className="bg-sky-500 text-white px-16 py-2 rounded-md mt-2 hover:bg-sky-900">Add to chart</button>
        </div>
      ))}
    </div>
    </>
  );
}