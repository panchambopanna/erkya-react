import { Routes, Route } from "react-router-dom";
import { Header, NavBar, Footer } from "./components";

import {
  Home,
  Fashion,
  Jewels,
  Makeup,
  Models,
  Photo,
  Rent,
  Studio,
  Video,
} from "./pages";

const App = () => (
  <div className="App">
    <Header />
    <NavBar />
    <div className="container">
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

    <Footer />
  </div>
);

export default App;
