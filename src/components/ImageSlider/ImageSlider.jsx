import { useRive } from "@rive-app/react-canvas";
import { useState, useEffect, useRef } from "react";
import "./ImageSlider.css";

// image imports
import get1 from "../../assets/images/get1.jpg";
import get3 from "../../assets/images/get3.jpg";
import get4 from "../../assets/images/get4.jpg";
import get6 from "../../assets/images/get6.jpg";
import get7 from "../../assets/images/get7.jpg";
import get8 from "../../assets/images/get8.jpg";
import get9 from "../../assets/images/get9.jpg";

// image array
const images = [
  { src: get1, alt: "Cafe Image 1" },
  { src: get3, alt: "Cafe Image 3" },
  { src: get4, alt: "Cafe Image 4" },
  { src: get6, alt: "Cafe Image 6" },
  { src: get7, alt: "Cafe Image 7" },
  { src: get8, alt: "Cafe Image 8" },
  { src: get9, alt: "Cafe Image 9" },
];

const ImageSlider = () => {
  const { RiveComponent } = useRive({
    src: "/animations/grab-a-coffee.riv",
    artboard: "C Machine",
    stateMachines: "State",
    autoplay: true,
  });

  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);
  const delay = 2000; // time per image in milliseconds

  // ✅ Start interval only once (on mount)
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, delay);

    return () => clearInterval(intervalRef.current);
  }, []); // ← no dependency, runs only once

  // ✅ optional manual navigation
  const goToIndex = (idx) => {
    setCurrentIndex(idx % images.length);
  };

  return (
    <div className="imageSlider">
      <div className="left-slider">
        <RiveComponent className="coffee-animation" />
      </div>

      <div className="right-slider">
        <div
          className="slides-track"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {images.map((img, idx) => (
            <div className="slide" key={idx}>
              <img src={img.src} alt={img.alt} draggable="false" />
            </div>
          ))}
        </div>

        {/* navigation dots */}
        <div className="slider-dots">
          {images.map((_, idx) => (
            <button
              key={idx}
              className={`dot ${idx === currentIndex ? "active" : ""}`}
              onClick={() => goToIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
      
    </div>
  );
};

export default ImageSlider;
