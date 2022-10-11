import { Outlet, Link } from "react-router-dom";
import "./Landing-page.css";

export default function LandingPage() {
  return (
    <>
      <div className="landing-page">
        <div id="title-text">Morty look! A well designed welcome page!</div>
        <img
          src="https://images2.alphacoders.com/642/642540.png"
          alt={"logo"}
          id="landing-image"
        ></img>
        <Link to="/characters">
          <button id="char-button">CHARACTERS</button>
        </Link>
        <Link to="/locations">
          <button id="loc-button">LOCATIONS</button>
        </Link>
        <header className="landing-page-welcome-text-container">
          <h4>WELCOME AT</h4>
          <h1>RICK AND MORTY</h1>
          <h2>WEBCATALOG</h2>
        </header>
      </div>

      <Outlet />
    </>
  );
}
