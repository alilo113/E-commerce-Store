import React from "react";
import { useLocation } from "react-router-dom";

export function OrderConfirmation() {
  const location = useLocation();
  const { order } = location.state || {};

  if (!order) {
    return <p>Error: Order details are not available.</p>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Order Confirmation</h1>
      <p>Thank you for your purchase!</p>
      <div className="mt-4">
        <h2 className="text-lg font-semibold">Order Details</h2>
        <p>Order ID: {order._id}</p>
        <p>Total Price: ${order.totalPrice.toFixed(2)}</p>
        <ul>
          {order.products.map((item) => (
            <li key={item.product._id} className="border p-2 flex justify-between items-center">
              <img src={item.product.imageUrl} alt={`Image ${item.product._id}`} className="w-16 h-16" />
              <div>
                <h2 className="font-semibold">${item.product.price}</h2>
                <p>Quantity: {item.quantity}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}