import Navigation from "./components/navigation/Navigation";
import Home from "./pages/Home";
import SliderPage from "./pages/SliderPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ButtonsPage from "./pages/ButtonsPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/parallaxslider" element={<SliderPage />} />
          <Route path="/buttons" element={<ButtonsPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
