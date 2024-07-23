import { imagesBlack, imagesColored } from "../assets/sliderImages";
import Slider from "../components/pure-css/slider/Slider";

export default function SliderPage() {
  return (
    <div style={{ overflow: "hidden" }}>
      <h2>COOL IMAGE SLIDER</h2>
      <div>
        <Slider images={imagesColored} />
      </div>
      <div>
        <h3 style={{ textAlign: "center" }}>
          Images with black background look more cool..!!
        </h3>
        <Slider images={imagesBlack} />
      </div>
    </div>
  );
}
