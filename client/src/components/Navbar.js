import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.className = darkMode ? "dark-mode" : "";
  }, [darkMode]);

  return (
    <div className={`navbar ${darkMode ? "dark" : ""}`}>
      <div>
        <Link to="/" style={{ marginRight: "20px", color: "white", textDecoration: "none" }}>
          🧠 AI Tools
        </Link>
        <Link to="/favorites" style={{ color: "white", textDecoration: "none" }}>
          My Favorites
        </Link>
      </div>
      <button onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>
    </div>
  );
};

export default Navbar;
