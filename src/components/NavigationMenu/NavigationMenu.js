import React from "react";
import { Link } from "react-router-dom";
import "./NavigationMenu.css";

const NavigationMenu = () => {
  return (
    <nav>
      <ul>
        <Link to="/">Hem</Link>
        <Link to="/favorites">Favoriter</Link>
      </ul>
    </nav>
  );
};

export default NavigationMenu;
