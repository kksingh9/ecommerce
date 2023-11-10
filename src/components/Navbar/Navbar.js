import React from "react";
import {  NavLink } from "react-router-dom/cjs/react-router-dom.min";
import "./Navbar.css";
//import CartButton from "../Cart/CartButton";

function Navbar(props) {
  return (
    <div className="header">
      {/* <NavLink to="/home">Home</NavLink> */}
      <NavLink to="/products">Products</NavLink>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/signup">SignUp</NavLink>
      <NavLink to="/cart">Cart</NavLink>
      
    </div>
  );
}

export default Navbar;
