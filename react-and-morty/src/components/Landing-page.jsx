import { Outlet, Link } from "react-router-dom";
import "./Landing-page.css";

export default function LandingPage() {
  return (
    <>
      <div className="landing-page">
        <div id="title-text">Morty look! A well designed welcome page!</div>

        <Link to="/characters">
          <img
            src="https://media.tenor.com/BgR83Df82t0AAAAi/portal-rick-and-morty.gif"
            id="char-portal"
          ></img>
          <div id="char-text">CHARACTERS</div>
        </Link>
        <Link to="/locations">
          <img
            src="https://media.tenor.com/BgR83Df82t0AAAAi/portal-rick-and-morty.gif"
            id="loc-portal"
          ></img>
          <div id="loc-text">LOCATIONS</div>
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
