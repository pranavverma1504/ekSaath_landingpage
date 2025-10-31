import React from "react";
import { Link } from "react-scroll";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo" > 
          <Link
          to="home"
          smooth={true}
          duration={800}
          offset={-70}
          className="logo-link"
        >
          ek saath
        </Link>
</div>
      <ul className="nav-links">
        <li>
          <Link to="home" smooth={true} duration={800} offset={-70}>
            Home
          </Link>
        </li>
        <li>
          <Link to="location" smooth={true} duration={800} offset={-70}>
            Location
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={800} offset={-70}>
            About
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={1000} offset={-70}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
