import React from "react";
import "./nav.css";
  
const Navbar = () => {
  return (
    <>
  <div class="navbar-custom">
    <div id="navbar">
      <ul class="nav">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/login">Login</a></li>
        <li><a href="/signup">Signup</a></li>
      </ul>
    </div>
  </div>
    </>
  );
};
  
export default Navbar;