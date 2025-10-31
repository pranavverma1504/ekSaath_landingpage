import React from "react";
import "./Hero.css";
import videoBg from "../../assets/video/coffee.mp4";
import { ReactTyped } from "react-typed";

const Hero = () => {
  return (
    <section className="hero" id="home">
      <video className="background-video" src={videoBg} autoPlay loop muted />
      <div className="hero-content">
        <h1>Welcome to Cafe ek saath</h1>
        <p>Where coffee meets comfort since 2024</p>

        <p className="typed-text">
          <ReactTyped
            strings={[
              "Multi roaster cafe",
              "Artisanal pizza",
              "एक साथ dessert",
            ]}
            typeSpeed={60}
            backSpeed={40}
            loop
          />
        </p>
      </div>
    </section>
  );
};

export default Hero;
