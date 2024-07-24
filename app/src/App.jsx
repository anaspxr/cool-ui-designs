import Home from "./pages/Home";
import SliderPage from "./pages/SliderPage";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <button>
          <Link to="/parallaxslider">Image Slider With Parallax Effect</Link>
        </button>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/parallaxslider" element={<SliderPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
