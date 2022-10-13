import { Link } from "react-router-dom";
import React, { useState } from "react";
import "./Header.css";
import headerImage from "../images/Header.png";
import sunImage from "../images/sun gif.gif";
import sunDown from "../images/down sun.gif";
import rickAndMortyLogo from "../images/Rick-and-Morty.png";

export default function Header() {
  const [isAtTop, setIsAtTop] = useState(undefined);

  const handleScroll = _ => {
    // console.log(window.scrollY);
  }

  window.addEventListener("scroll", handleScroll)

  return (
    <div className="header">
      <Link to="/">
          <button className="go-back-button">⬅ BACK TO LANDING PAGE</button>
      </Link>
      <p id="character-title">CHARACTERS</p>
      <img
        alt="rick and morty logo"
        className="logo-image"
        src={rickAndMortyLogo}
      ></img>
      <a href="#">
        <img
          className="sunDown-image"
          src={sunDown}
          alt={"screaming sun"}
          border={0}
        ></img>
        <img
          className="sun-image"
          src={sunImage}
          alt={"screaming sun"}
          border={0}
        ></img>
      </a>
      <img
        className="header-image"
        src={headerImage}
        alt={"rick and morty scenery"}
      ></img>
    </div>
  );
}
