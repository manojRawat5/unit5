import React from "react";
import "./Header.css"; // Import your custom CSS file

const Header = () => {
  const idtoken = localStorage.getItem('idToken')
  function mainpage(){
    if (idtoken){
      window.location.href = '/datepage'
    }else{
      window.location.href = '/signup'
    }
  }
  return (
    <header className="header-container">
    <h1>Weekend Trip Planner</h1>
    <p>Your perfect weekend getaway starts here</p>
    <section className="hero-container">
    <h2>Plan Your Perfect Weekend Getaway</h2>
    <p>Explore exciting destinations, book your trip, and make memories!</p>
    <button onClick={mainpage}>Start Planning</button>
  </section>
  </header>
  )

};

export default Header;
