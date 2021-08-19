import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <header className="navbar">
        <NavLink to="/" className="navbar__title navbar__item">
          Landkit.
        </NavLink>
        <div className="menu">
          <NavLink to="/landings" className="navbar__item">
            Landings
          </NavLink>
          <NavLink to="/pages" className="navbar__item">
            Pages
          </NavLink>
          <NavLink to="/account" className="navbar__item">
            Account
          </NavLink>
          <NavLink to="/documentation" className="navbar__item">
            Documentation
          </NavLink>
        </div>
        <button className="button">Buy Now</button>
      </header>
    </div>
  );
};

export default Navbar;
