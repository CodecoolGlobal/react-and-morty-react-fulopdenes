import React from "react";
import "./App.css";
// import { useCharacters, useLocations } from "./api/useData";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./components/Landing-page";
import Characters from "./components/Characters-page";
import Locations from "./components/Locations-page";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<LandingPage />} />
            <Route path="characters" element={<Characters />} />
            <Route path="locations" element={<Locations />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
