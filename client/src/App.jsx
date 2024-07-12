import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./home";
import { Login } from "./login";
import { Signup } from "./signup";
import { Profile } from "./profile";

function App() {
  const [username, setUsername] = useState("");

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home username={username} />} />
        <Route path="/log-in" element={<Login setUsername={setUsername} />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/profile" element={<Profile username={username} />} />
      </Routes>
    </Router>
  );
}

export default App;