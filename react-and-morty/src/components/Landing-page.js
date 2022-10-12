import { Outlet, Link } from "react-router-dom";
import "./Landing-page.css";
import "./pagination.css";
import rickAndMortyLogo from "../images/Rick-and-Morty.png";
import portalGif from "../images/portal.gif";

export default function LandingPage() {
  return (
    <>
      <div className="landing-page">
        <header className="landing-page-welcome-text-container">
          <img
            alt="rick and morty logo"
            className="landing-logo-image"
            src={rickAndMortyLogo}
          ></img>
          <h2>Webcatalog</h2>
        </header>
        <Link to="/characters" style={{ textDecoration: "none" }}>
          <div className="portal">
            <div className="portal-text">CHARACTERS</div>
            <img
              src={portalGif}
              id="char-portal"
              alt={"Character Portal"}
            ></img>
          </div>
        </Link>
        <Link to="/locations" style={{ textDecoration: "none" }}>
          <div className="portal">
            <div className="portal-text">LOCATIONS</div>
            <img
              src={portalGif}
              id="loc-portal"
              alt={"Location Portal"}
            ></img>
          </div>
        </Link>
      </div>
      <Outlet />
    </>
  );
}
