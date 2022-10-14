import React, { useState } from "react";
import "./App.css";
// import { useCharacters, useLocations } from "./api/useData";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./components/Landing-page";
import Characters from "./components/Characters-page";
import Locations from "./components/Locations-page";

function App() {
  const [scrollStatus, setScrollStatus] = useState(window.scrollY);

  window.addEventListener("scroll", () => setScrollStatus(window.scrollY));

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<LandingPage />} />
            <Route
              path="characters"
              element={<Characters scrollStatus={scrollStatus} />}
            />
            <Route
              path="locations"
              element={<Locations scrollStatus={scrollStatus} />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
