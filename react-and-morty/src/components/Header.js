import { Link } from "react-router-dom";
import "./Header.css";
import headerImage from "../images/Header.png";
import sunImage from "../images/sun gif.gif";
import sunDown from "../images/down sun.gif";
import rickAndMortyLogo from "../images/Rick-and-Morty.png";

export default function Header({ scrollStatus }) {

  return (
    <div
      className="header"
      style={{ height: scrollStatus < 280 ? 400 - scrollStatus : 120 }}
    >
      <Link to="/">
        <button className="go-back-button">⬅ BACK TO LANDING PAGE</button>
      </Link>
      <p id="character-title">CHARACTERS</p>
      <img
        alt="rick and morty logo"
        className={scrollStatus < 50 ? "logo-image" : "logo-image logo-image-invisible"}
        src={rickAndMortyLogo}

      ></img>
      <a href="#">
        <img
          className={scrollStatus < 50 ? "sunDown-image" : "sunDown-image sun-little" }
          src={sunDown}
          alt={"screaming sun"}
          border={0}
        ></img>
        <img
          className={scrollStatus < 50 ? "sun-image" : "sun-image sun-little" }
          src={sunImage}
          alt={"screaming sun"}
          border={0}
        ></img>
      </a>
    </div>
  );
}
