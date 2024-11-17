import React from "react";
import Header from "../components/home/Header";
import DestinationGallery from "../components/home/DestinationGallery";
import AboutUs from "../components/home/AboutUs";
import Features from "../components/home/Features";
import Testimonials from "../components/home/Testimonials";
import ContactUs from "../components/home/ContactUs";
import Footer from "../components/home/Footer";
import Navbar from "../components/home/Navbar"

function Home() {
  const idtoken = localStorage.getItem('idToken') || '';
  return (
    <div id="app_container">
      {idtoken && <Navbar />}
      <Header />
      <DestinationGallery /> {/* Add the gallery here */}
      <Features />
      <AboutUs />
      <Testimonials />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default Home;
