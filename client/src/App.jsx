import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./components/Home/homepage";
import { Login } from "./components/registration/login";
import { Signup } from "./components/registration/signup";
import { Profile } from "./components/profile/profile";
import { Cart } from "./components/payment/cart";
import { Checkout } from "./components/payment/checkout";
import { OrderConfirmation } from "./components/payment/OrderConfirmation";

function App() {
  const [username, setUsername] = useState("");
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });
  const [quantity, setQuantity] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0); // Initialize totalPrice

  useEffect(() => {
    setQuantity(cart.reduce((total, item) => total + item.quantity, 0));
    setTotalPrice(cart.reduce((total, item) => total + item.price * item.quantity, 0)); // Calculate total price
    localStorage.setItem("cart", JSON.stringify(cart));

    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, [cart]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home username={username} setUsername={setUsername} cart={cart} setCart={setCart} quantity={quantity}   setQuantity={setQuantity} />} />
        <Route path="/log-in" element={<Login setUsername={setUsername} />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/profile" element={<Profile username={username} />} />
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
        <Route path="/checkout" element={<Checkout cart={cart} setCart={setCart} totalPrice={totalPrice} />} />
        <Route path="/order-confirmation" element={<OrderConfirmation />} />
      </Routes>
    </Router>
  );
}

export default App;