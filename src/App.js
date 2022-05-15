import Header from "./components/header/Header";
import NavBar from "./components/navbar/NavBar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Fashion from "./pages/Fashion";
import Jewels from "./pages/Jewels";
import Makeup from "./pages/Makeup";
import Models from "./pages/Models";
import Photo from "./pages/Photo";
import Rent from "./pages/Rent";
import Studio from "./pages/Studio";
import Video from "./pages/Video";

const App = () => (
  <div className="App">
    <Header />
    <NavBar />
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/fashion" element={<Fashion />} />
      <Route exact path="/jewels" element={<Jewels />} />
      <Route exact path="/makeup" element={<Makeup />} />
      <Route exact path="/models" element={<Models />} />
      <Route exact path="/photo" element={<Photo />} />
      <Route exact path="/rent" element={<Rent />} />
      <Route exact path="/studio" element={<Studio />} />
      <Route exact path="/video" element={<Video />} />
    </Routes>
  </div>
);

export default App;
