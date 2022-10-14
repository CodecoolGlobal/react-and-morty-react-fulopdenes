import { Link } from "react-router-dom";
import "./Header.css";
import sunImage from "../images/sun gif.gif";
import rickAndMortyLogo from "../images/Rick-and-Morty.png";
import scream from "../sound/scream1.mp3";
export default function Header({ scrollStatus }) {
  const audio = new Audio(scream);
  audio.loop = false;

  return (
    <div
      className="header"
      style={{ height: scrollStatus < 280 ? 400 - scrollStatus : 120 }}
    >
      <Link to="/">
        <button className="go-back-button">⬅ BACK TO LANDING PAGE</button>
      </Link>
      <p className="title">CHARACTERS</p>
      <img
        alt="rick and morty logo"
        className={
          scrollStatus < 50 ? "logo-image" : "logo-image logo-image-invisible"
        }
        src={rickAndMortyLogo}
      ></img>
      <img
        onClick={() => {
          audio.loop = !audio.loop;
          audio.loop ? audio.play() : audio.pause();
        }}
        className="sun-image"
        src={sunImage}
        alt={"screaming sun"}
        border={0}
        // style={{display: scrollStatus < 50 ? "block" : "none"}}
        style={{
          height:
            scrollStatus > 150
              ? 25
              : scrollStatus > 0
              ? 150 - scrollStatus
              : 100,
        }}
      ></img>
    </div>
  );
}
