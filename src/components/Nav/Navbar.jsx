import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">ek saath</div>
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#menu">Location</a></li>
        <li><a href="#location">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
