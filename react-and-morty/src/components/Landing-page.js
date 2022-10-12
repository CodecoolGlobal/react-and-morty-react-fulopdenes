import { Outlet, Link } from "react-router-dom";
import "./Landing-page.css";
import "./pagination.css";
import rickAndMortyLogo from "../images/Rick-and-Morty.png";
import portalGif from "../images/portal.gif";
import mrPB1 from "../images/mrPoopyButthole1.png"
import mrPB2 from "../images/mrPoopyButthole2.png"
import { useState } from "react";

export default function LandingPage() {

  const [infoImage, setInfoImage] = useState(mrPB1)
  const handleInfo = () => {
    infoImage === mrPB1 ?
    setInfoImage(mrPB2) :
    setInfoImage(mrPB1)
  }

  return (
    <>
      <div className="landing-page">
        <header className="landing-page-welcome-text-container">
          {/* <h4 className="drop-shadow">Welcome to the</h4> */}
          <img
            alt="rick and morty logo"
            className="landing-logo-image"
            src={rickAndMortyLogo}
          ></img>
          <h2 className="drop-shadow">Webcatalog</h2>
        </header>
        <Link to="/characters" style={{ textDecoration: "none" }}>
          <div className="portal">
            <div id="char-text">CHARACTERS</div>
            <img
              src={portalGif}
              id="char-portal"
              alt={"Character Portal"}
            ></img>
          </div>
        </Link>
        <Link to="/locations" style={{ textDecoration: "none" }}>
          <div className="portal">
            <div id="loc-text">LOCATIONS</div>
            <img
              src={portalGif}
              id="loc-portal"
              alt={"Location Portal"}
            ></img>
          </div>
        </Link>
        <div className="page-info">
          <div className="mrPB-1-clicked">
            {infoImage === mrPB1 ?
            "click on me to know more, ooh wee" :
            "Here you can find information about the different characters and locations so far in the show."
            }</div>
          <img
          src={infoImage}
          className={infoImage === mrPB1 ?
                      "mrPB-1" : "mrPB-2"}
          onClick={handleInfo}></img>
        </div>
      </div>
      <Outlet />
    </>
  );
}
