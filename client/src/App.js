import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AllTools from "./pages/AllTools";
import Favorites from "./pages/Favorites";
import Navbar from "./components/Navbar";
import "./App.css";

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<AllTools />} />
      <Route path="/favorites" element={<Favorites />} />
    </Routes>
  </Router>
);

export default App;
