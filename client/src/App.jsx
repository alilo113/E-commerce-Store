import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./home";
import { Login } from "./login";
import { Signup } from "./signup";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/log-in" element={<Login/>}/>
        <Route path="/sign-up" element={<Signup/>}/>
      </Routes>
    </Router>
  );
}

export default App;