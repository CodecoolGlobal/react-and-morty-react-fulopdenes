import React from "react";
import "./Header.css";
import headerImage from "../images/Header.png";
import sunImage from "../images/sun gif.gif";
import sunDown from "../images/down sun.gif";
import rickAndMortyLogo from "../images/Rick-and-Morty.png";
export default function Header() {
  return (
    <div className="header">
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
