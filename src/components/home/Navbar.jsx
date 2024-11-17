import React from "react";
import "./Navbar.css";

const Navbar = () => {

function fun(){
  localStorage.removeItem('idToken')
  window.location.href = '/'
}
  return (
    <nav className="navbar">
      <button className="signup-btn" onClick={fun}>Log Out</button>
  </nav>
)
};

export default Navbar;
