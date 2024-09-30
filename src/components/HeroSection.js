import React from "react";
import "../App.css";

const HeroSection = () => {
  return (
    <section className="hero" id="home">
      <div className="container">
        <h1>Welcome to Our Website</h1>
        <p>Building amazing experiences for our customers.</p>
        <button className="btn-primary">Get Started</button>
      </div>
    </section>
  );
};

export default HeroSection;
