import React from "react";
import "./Hero.css";
import videoBg from "../../assets/video/coffee.mp4";

const Hero = () => {
  return (
    <section className="hero" id="home">
      <video className="background-video" src={videoBg} autoPlay loop muted />
      <div className="hero-content">
        <h1>Welcome to Cafe ek saath ☕</h1>
        <p>Where coffee meets comfort since 2009</p>
        <button>Explore Menu</button>
      </div>
    </section>
  );
};

export default Hero;
