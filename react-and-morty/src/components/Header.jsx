import React from "react";
import "./Header.css";
import headerImage from "../images/Header.png";
import sunImage from "../images/Sun.png";
export default function Header() {
  return (
    <div className="header">
      <img
        alt="rick and morty logo"
        className="logo-image"
        src="https://1000logos.net/wp-content/uploads/2022/03/Rick-and-Morty.png"
      ></img>
      <img
        className="sun-image"
        id="sun-image"
        src={sunImage}
        alt={"screaming sun"}
      ></img>
      <img
        className="header-image"
        src={headerImage}
        alt={"rick and morty scenery"}
      ></img>
    </div>
  );
}
