import Navigation from "./components/navigation/Navigation";
import Home from "./pages/Home";
import SliderPage from "./pages/SliderPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/parallaxslider" element={<SliderPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
