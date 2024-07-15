import React from "react";
import { Link, useNavigate } from "react-router-dom";

export function Cart({ cart, setCart }) {
    const nav = useNavigate();

    function clearCart() {
        setCart([]);
    }

    const handleCheckout = () => {
        const order = {
          _id: crypto.randomUUID(),
          totalPrice: totalPrice,
          products: cart.map(item => ({
            product: {
              _id: item.id,
              imageUrl: item.pic,
              price: item.price
            },
            quantity: item.quantity
          }))
        };
      
        // Navigate to OrderConfirmation with the order data
        nav("/order-confirmation", { state: { order } });
      };
      
    const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <div className="container mx-auto p-4">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
                <div>
                    <Link to="/" className="hover:underline">Back to home page</Link>
                    <button 
                        onClick={clearCart} 
                        className="mx-5 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700 transition"
                    >
                        Clear cart
                    </button>
                </div>
            </div>
            {cart.length === 0 ? (
                <div className="text-center text-gray-500">
                    <p>Your cart is empty.</p>
                </div>
            ) : (
                <div>
                    <ul className="space-y-4">
                        {cart.map((item, index) => (
                            <li key={item.id} className="border p-4 flex justify-between items-center">
                                <img src={item.pic} alt={`Image ${item.id}`} className="w-16 h-16" />
                                <div>
                                    <h2 className="font-semibold">${item.price}</h2>
                                    <p>Quantity: {item.quantity}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <div className="mt-4 font-bold text-lg">
                        Total: ${totalPrice.toFixed(2)}
                    </div>
                </div>
            )}
            <button
                onClick={handleCheckout}
                className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700 transition"
            >
                Place Order
            </button>
        </div>
    );
}