import { Provider } from "react-redux";
import store from "../src/store/store";
import { useEffect } from "react";
import { loadUser } from "./store/action/auth";
import ContainerRoute from "./components/routes/ContainerRoute";
import { Routes, Route } from "react-router-dom";

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <div className="App">
        <Routes>
          <Route path="*" element={<ContainerRoute />} />
        </Routes>
      </div>
    </Provider>
  );
};

export default App;
