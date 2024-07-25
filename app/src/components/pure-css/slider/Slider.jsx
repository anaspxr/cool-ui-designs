import { useEffect, useRef, useState } from "react";
import "./slider.css";

export default function Slider({ images }) {
  const [mouseDownAt, setMouseDownAt] = useState(null);
  const [percentage, setPercentage] = useState(0);
  const [prevPercentage, setPrevPercentage] = useState(0);

  const trackRef = useRef(null);
  const imagesRef = useRef([]);

  const handleMouseMove = (e) => {
    if (!mouseDownAt) return;
    const mouseMovement = parseFloat(mouseDownAt) - e.clientX;
    const maxMovement = window.innerWidth;
    setPercentage(
      Math.min(
        Math.max(
          prevPercentage + parseFloat((mouseMovement / maxMovement) * -100),
          -105
        ),
        5
      )
    );
  };
  const handleTouchMove = (e) => {
    if (!mouseDownAt) return;
    const touchMovement = parseFloat(mouseDownAt) - e.touches[0].clientX;
    const maxMovement = window.innerWidth;
    setPercentage(
      Math.min(
        Math.max(
          prevPercentage + parseFloat((touchMovement / maxMovement) * -100),
          -105
        ),
        5
      )
    );
  };

  const handleMouseUp = () => {
    setMouseDownAt(null);
    setPrevPercentage(percentage);
    if (percentage < -100) {
      setPercentage(-100);
      return;
    }
    if (percentage > 0) {
      setPercentage(0);
      return;
    }
  };

  useEffect(() => {
    trackRef.current.animate(
      {
        transform: `translate(${percentage}%)`,
      },
      { duration: 1200, fill: "forwards" }
    );

    imagesRef.current.forEach((img) => {
      img.animate(
        {
          objectPosition: `${percentage + 100}% 50%`,
        },
        { duration: 1200, fill: "forwards" }
      );
    });
  }, [percentage]);

  return (
    <div
      id="slider-container"
      onMouseDown={(e) => {
        setMouseDownAt(e.clientX);
      }}
      onTouchStart={(e) => {
        setMouseDownAt(e.touches[0].clientX);
      }}
      onMouseUp={handleMouseUp}
      onTouchEnd={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchCancel={handleMouseUp}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
    >
      <div id="image-track" ref={trackRef}>
        {images.map((image, index) => (
          <img
            ref={(el) => (imagesRef.current[index] = el)}
            key={index}
            src={image}
            draggable={false}
          />
        ))}
      </div>
    </div>
  );
}
