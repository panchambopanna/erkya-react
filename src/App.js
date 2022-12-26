import { Routes, Route } from "react-router-dom";
import { Header, NavBar, Footer } from "./components";
import { Provider } from "react-redux";
import store from "../src/store/store";
import { useEffect } from "react";
import { loadUser } from "./store/action/auth";

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
  Profile,
} from "./pages";

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
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
            <Route exact path="/profile" element={<Profile />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </Provider>
  );
};

export default App;
