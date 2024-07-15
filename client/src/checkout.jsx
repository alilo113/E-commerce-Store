// Checkout.js
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function Checkout({ cart = [], setCart, totalPrice }){
  const nav = useNavigate();
  const [error, setError] = useState(null);

  const handleCheckout = async () => {
    try {
      const response = await axios.post("/api/orders", {
        products: cart.map(item => ({ product: item.id, quantity: item.quantity })),
        totalPrice,
      });
      setCart([]);
      nav("/order-confirmation", { state: { order: response.data } });
    } catch (error) {
      setError("Checkout failed. Please try again.");
      console.error("Error during checkout:", error);
    }
  };
  
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>
      {error && <p className="text-red-500">{error}</p>}
      <div className="mb-4">
        <h2 className="text-lg font-semibold">Order Summary</h2>
        <ul>
          {cart.map((item) => (
            <li key={item.id} className="border p-2 flex justify-between items-center">
              <img src={item.pic} alt={`Image ${item.id}`} className="w-16 h-16" />
              <div>
                <h2 className="font-semibold">${item.price}</h2>
                <p>Quantity: {item.quantity}</p>
              </div>
            </li>
          ))}
        </ul>
        <div className="mt-4 font-bold text-lg">Total: ${totalPrice.toFixed(2)}</div>
      </div>
      <button
        onClick={handleCheckout}
        className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700 transition"
      >
        Place Order
      </button>
    </div>
  ); 
}