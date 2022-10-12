import { Outlet, Link } from "react-router-dom";
import "./Landing-page.css";
import "./Pagination.css";

export default function LandingPage() {
  return (
    <>
      <div className="landing-page">
        <Link to="/characters">
          <img
            src="https://media.tenor.com/BgR83Df82t0AAAAi/portal-rick-and-morty.gif"
            id="char-portal"
            alt={"Character Portal"}
          ></img>
          <div id="char-text">CHARACTERS</div>
        </Link>
        <Link to="/locations">
          <img
            src="https://media.tenor.com/BgR83Df82t0AAAAi/portal-rick-and-morty.gif"
            id="loc-portal"
            alt={"Location Portal"}
          ></img>
          <div id="loc-text">LOCATIONS</div>
        </Link>
        <header className="landing-page-welcome-text-container">
          <h4 className="drop-shadow">WELCOME TO THE</h4>
          <h1 className="drop-shadow">RICK AND MORTY</h1>
          <h2 className="drop-shadow">WEBCATALOG</h2>
          <h5>PLEASE ENTER A PORTAL TO FIND MORE INFO ABOUT THE...</h5>
        </header>
      </div>
      <Outlet />
    </>
  );
}
