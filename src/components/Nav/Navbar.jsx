import React, { useState } from "react";
import { Link } from "react-scroll";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar">
      <div className="logo">
        <Link
          to="home"
          smooth={true}
          duration={800}
          offset={-70}
          className="logo-link"
          onClick={closeMenu}
        >
          ek saath
        </Link>
      </div>

      {/* Hamburger Icon */}
      <div
        className={`hamburger ${isOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Nav Links */}
      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li>
          <Link to="home" smooth={true} duration={800} offset={-70} onClick={closeMenu}>
            Home
          </Link>
        </li>
        <li>
          <Link to="location" smooth={true} duration={800} offset={-70} onClick={closeMenu}>
            Location
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={800} offset={-70} onClick={closeMenu}>
            About
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={1000} offset={-70} onClick={closeMenu}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
