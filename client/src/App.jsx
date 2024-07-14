import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./home";
import { Login } from "./login";
import { Signup } from "./signup";
import { Profile } from "./profile";
import { Cart } from "./cart";

// ... other imports

function App() {
  const [username, setUsername] = useState("");
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    setQuantity(cart.reduce((total, item) => total + item.quantity, 0));
    localStorage.setItem("cart", JSON.stringify(cart));

    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, [cart]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home username={username} setUsername={setUsername} cart={cart} setCart={setCart} quantity={quantity} setQuantity={setQuantity} />} />
        <Route path="/log-in" element={<Login setUsername={setUsername} />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/profile" element={<Profile username={username} />} />
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
      </Routes>
    </Router>
  );
}

export default App;;