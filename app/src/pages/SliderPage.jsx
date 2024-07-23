import { images } from "../assets/sliderImages";
import Slider from "../components/pure-css/slider/Slider";

export default function SliderPage() {
  return (
    <div style={{ overflow: "hidden" }}>
      <h2>COOL IMAGE SLIDER</h2>
      <Slider images={images} />
      <Slider images={images} />
    </div>
  );
}
