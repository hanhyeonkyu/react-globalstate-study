import { Provider as ReduxtProvider } from "react-redux";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { createStore as reduxCreateStore } from "redux";
import "./App.css";
import reduxReducer from "./global/redux";
import { Home } from "./pages/Home";
import { Mobx } from "./pages/Mobx";
import { Recoil } from "./pages/Recoil";
import { Redux } from "./pages/Redux";

export const App = () => {
  const reduxStore = reduxCreateStore(reduxReducer);
  return (
    <BrowserRouter>
      <ReduxtProvider store={reduxStore}>
        <div>
          <Link to="/">Home Page</Link>
          <Link to="/redux">Redux Page</Link>
          <Link to="/mobx">Mobx Page</Link>
          <Link to="/recoil">Recoil Page</Link>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/redux" element={<Redux />} />
            <Route path="/mobx" element={<Mobx />} />
            <Route path="/recoil" element={<Recoil />} />
          </Routes>
        </div>
      </ReduxtProvider>
    </BrowserRouter>
  );
};
