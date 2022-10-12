import React from "react";
import "./Header.css";
import headerImage from "../images/Header.png";
import sunImage from "../images/sun gif.gif";
import sunDown from "../images/down sun.gif";
export default function Header() {
  return (
    <div className="header">
      <img
        alt="rick and morty logo"
        className="logo-image"
        src="https://1000logos.net/wp-content/uploads/2022/03/Rick-and-Morty.png"
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
