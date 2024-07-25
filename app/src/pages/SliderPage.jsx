import { imagesBlack, imagesColored } from "../assets/sliderImages";
import Slider from "../components/pure-css/slider/Slider";

export default function SliderPage() {
  return (
    <div style={{ overflow: "hidden" }}>
      <h2>PARALLAX IMAGE SLIDER</h2>
      <div>
        <Slider images={imagesColored} />
      </div>
      <br />
      <div>
        <Slider images={imagesBlack} />
      </div>
    </div>
  );
}
