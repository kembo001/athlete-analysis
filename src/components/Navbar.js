import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <div className="hamburger" onClick={toggleMenu}>
        {/* Hamburger Icon */}
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={isOpen ? "nav-links open" : "nav-links"}>
        <li>
          <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
        </li>
        <li>
          <Link to="/traits" onClick={() => setIsOpen(false)}>Traits</Link>
        </li>
        <li>
          <Link to="/made-or-born" onClick={() => setIsOpen(false)}>Made or Born?</Link>
        </li>
        <li>
          <Link to="/flow-state" onClick={() => setIsOpen(false)}>Flow State</Link>
        </li>
        <li>
          <Link to="/sleep" onClick={() => setIsOpen(false)}>Sleep</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
