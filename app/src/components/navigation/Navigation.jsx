import { Link } from "react-router-dom";
import "./navigation.css";

export default function Navigation() {
  return (
    <div className="nav-container">
      <Link to="/parallaxslider" className="nav-button">
        Image Slider With Parallax Effect
      </Link>
      <Link to="/parallaxslider" className="nav-button">
        Image Slider With Parallax Effect
      </Link>
      <Link to="/parallaxslider" className="nav-button">
        Image Slider With Parallax Effect
      </Link>
      <Link to="/parallaxslider" className="nav-button">
        Image Slider With Parallax Effect
      </Link>
    </div>
  );
}
