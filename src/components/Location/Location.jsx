import React from "react";
import "./Location.css";

const Location = () => {
  return (
    <section className="locations-container" id="location">
      {/* Left Container */}
      <div className="location-card left">
        <div className="card-overlay">
          <h3>MON–FRI • 11AM–11PM SAT–SUN • 11AM–12PM</h3>
          <h1>Nehru Nagar West</h1>
          <p>684C+X23, Vidya Vihar Colony</p>
          <p>Bhilai, Chhattisgarh</p>
          <p>490020</p>
          <a
            href="https://maps.app.goo.gl/Rfh2Bzz7xJVdMwFS6"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="direction-btn">DIRECTIONS</div>
          </a>
        </div>
      </div>

      {/* Right Container */}
      <div className="location-card right">
        <div className="card-overlay">
          <h3>MON–FRI • 11AM–11PM SAT–SUN • 11AM–12PM</h3>
          <h1>Nehru Nagar East</h1>
          <p>Bhilai, Chhattisgarh</p>
          <p>490020</p>
          <a
            href="https://maps.app.goo.gl/MhtBY2DCvGZvBRQg7"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="direction-btn">DIRECTIONS</div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Location;
