import { Outlet, Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <>
      <div className="landing-page">
            <div id="title-text">Morty look! A well designed welcome page!</div>
            <div id="char-text">CHARACTERS</div>
          <Link to="/characters">
            <img src="https://media.tenor.com/BgR83Df82t0AAAAi/portal-rick-and-morty.gif" id="char-portal"></img>
          </Link>
          <Link to="/locations">
          <img src="https://media.tenor.com/BgR83Df82t0AAAAi/portal-rick-and-morty.gif" id="loc-portal"></img>
          </Link>
          <div> Lorem ipsum dolor sit amet </div>
      </div>

      <Outlet />
    </>
  );
}
