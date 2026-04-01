import React from "react";
import "../CSS Style/Navbar.css";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="logo">JM Movies</div>

        <ul className="nav-links">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>

        <div className="search-box">
          <input type="text" placeholder="Search..." />
          <button>Search</button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
