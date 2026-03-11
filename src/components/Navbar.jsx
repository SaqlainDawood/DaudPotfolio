import React, { useState } from "react";
import "../App.css";
import { Link } from "react-router-dom"; 

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <header className="header">
      <Link to="/" className="logo" onClick={handleLinkClick}>
        <span>Da</span>ud
      </Link>

      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      <nav className={`navbar ${menuOpen ? "show" : ""}`}>
        <Link to="/" onClick={handleLinkClick}>Home</Link>
        <Link to="/about" onClick={handleLinkClick}>About</Link>
        <Link to="/skills" onClick={handleLinkClick}>Skills</Link>
        <Link to="/projects" onClick={handleLinkClick}>Projects</Link>
        <Link to="/experience" onClick={handleLinkClick}>Experience</Link>
      </nav>

      <Link to="/contact" className="contact" onClick={handleLinkClick}>
        Contact Me
      </Link>
    </header>
  );
};

export default Navbar;