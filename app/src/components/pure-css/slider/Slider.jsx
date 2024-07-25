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
    const windowWidth = window.innerWidth;
    setPercentage(
      Math.min(
        Math.max(
          prevPercentage + parseFloat((mouseMovement / windowWidth) * -100),
          -105
        ),
        5
      )
    );
  };
  const handleTouchMove = (e) => {
    if (!mouseDownAt) return;
    const touchMovement = parseFloat(mouseDownAt) - e.touches[0].clientX;
    const windowWidth = window.innerWidth;
    setPercentage(
      Math.min(
        Math.max(
          prevPercentage +
            parseFloat((touchMovement / (windowWidth * 2)) * -100),
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
    const totaLength =
      window.innerWidth > 600
        ? images.length * (300 + 25) - window.innerWidth
        : images.length * (200 + 15) - window.innerWidth;
    //300 and 200 are image width in large screen and smaller screens respectively
    //25 and 15 are thw gap between images
    trackRef.current.animate(
      {
        transform: `translate(${
          (percentage * totaLength) / window.innerWidth
        }%)`,
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
  }, [images.length, percentage]);

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
