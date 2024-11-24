import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <div className="container">
        <h1 className="logo">Akaboydeve Game Store</h1>
        <nav>
          <a href="#games">Games</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
