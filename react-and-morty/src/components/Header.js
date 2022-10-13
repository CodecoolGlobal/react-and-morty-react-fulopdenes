import { Link } from "react-router-dom";
import "./Header.css";
import headerImage from "../images/Header.png";
import sunImage from "../images/sun gif.gif";
import sunDown from "../images/down sun.gif";
import rickAndMortyLogo from "../images/Rick-and-Morty.png";
import scream from "../sound/scream1.mp3";
export default function Header({ scrollStatus }) {
  const audio = new Audio(scream);
  audio.loop = false;
  // return (
  //   <div>
  //     <button
  //       onClick={() => {
  //         audio.loop = true;
  //         audio.play();
  //       }}
  //     >
  //       Play
  //     </button>
  //     <button onClick={() => (audio.loop = false)}>Pause</button>
  //   </div>
  // );

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
        className={
          scrollStatus < 50 ? "logo-image" : "logo-image logo-image-invisible"
        }
        src={rickAndMortyLogo}
      ></img>
      <a href="#">
        <img
          onClick={() => {
            audio.loop = !audio.loop;
            audio.loop ? audio.play() : audio.pause();
          }}
          className="sunDown-image"
          src={sunDown}
          alt={"screaming sun"}
          style={{ display: scrollStatus < 50 ? "block" : "none" }}
          border={0}
        ></img>
        <img
          className="sun-image"
          src={sunImage}
          alt={"screaming sun"}
          border={0}
          style={{ display: scrollStatus < 50 ? "block" : "none" }}
        ></img>
      </a>
    </div>
  );
}
