import React from "react";
import Home from "./pages/homepage/Homepage.jsx";
import About from "./pages/aboutPage/about.jsx";
import Create from "./pages/create-todo/create.jsx";
import Mytodos from "./pages/mytdos/mytodos.jsx";
import Login from "./pages/regster/login.jsx";
import Register from "./pages/regster/register.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About />} />
        <Route path="/create" element={<Create />} />
        <Route path="/my-todos" element={<Mytodos />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
