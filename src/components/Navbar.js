import React from "react";
import "../App.css"; // Importing the main CSS

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <h1 className="logo">BrandName</h1>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#signup">Sign up</a></li>
          <li><a href="#signin">Sign in</a></li>

        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
