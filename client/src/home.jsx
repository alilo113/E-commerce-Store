import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import pic1 from "./assets/c-d-x-PDX_a_82obo-unsplash.jpg";
import pic2 from "./assets/domino-studio-164_6wVEHfI-unsplash.jpg";
import pic3 from "./assets/eniko-kis-KsLPTsYaqIQ-unsplash.jpg";

const handleLogout = (setUsername) => {
  setUsername(""); // Clear the username
};

export function Home({ username, setUsername, cart, setCart, quantity, setQuantity }) {
  const nav = useNavigate();

  const products = [
    { id: 1, pic: pic1, price: 50 },
    { id: 2, pic: pic2, price: 50 },
    { id: 3, pic: pic3, price: 50 },
  ];

  const addToCart = (product) => {
    if (username) {
      setCart((prevCart) => {
        const existingProduct = prevCart.find(item => item.id === product.id);
        const updatedCart = existingProduct
          ? prevCart.map(item =>
              item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
            )
          : [...prevCart, { ...product, quantity: 1 }];
  
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        return updatedCart;
      });
      setQuantity(quantity + 1);
    } else {
      nav("/sign-up");
    }
  };
  
  return (
    <>
      <div className="flex justify-between bg-slate-800 text-white p-4 mb-4 items-center">
        <div>
          <h1>E-Commerce Store</h1>
        </div>
        <div className="flex items-center gap-4">
          {username ? (
            <>
              <Link to="/profile" className="text-white hover:underline">Welcome, {username}</Link>
              <Link to="/cart" className="text-white hover:underline">There are {quantity} items in the cart</Link>
              <Link 
                to="/" 
                onClick={() => handleLogout(setUsername)} 
                className="bg-red-500 text-white px-5 py-2 rounded-md hover:bg-red-700"
              >
                Log out
              </Link>
            </>
          ) : (
            <>
              <Link 
                to="/log-in" 
                className="bg-sky-500 text-white px-5 py-2 rounded-md hover:bg-sky-900"
              >
                Log in
              </Link>
              <Link 
                to="/sign-up" 
                className="bg-sky-500 text-white px-5 py-2 rounded-md hover:bg-sky-900"
              >
                Sign up
              </Link>
            </>
          )}
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {products.map((product) => (
          <div key={product.id} className="border border-black p-2 flex flex-col items-center">
            <img src={product.pic} alt={`Image ${product.id}`} className="w-full h-auto max-w-full max-h-full" />
            <h1>${product.price}</h1>
            <button className="bg-sky-500 text-white px-16 py-2 rounded-md mt-2 hover:bg-sky-900" onClick={() => addToCart(product)}>Add to cart</button>
          </div>
        ))}
      </div>
    </>
  );
}