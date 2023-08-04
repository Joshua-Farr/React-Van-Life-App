import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
  return (
    <div className="navBar">
      <h1 className="Logo">#VanLife</h1>
      <div>
        <Link to="/about">About</Link>
        <Link to="/vans">Vans</Link>
      </div>
    </div>
  );
}
