import React from "react";
import "./Header.css";
import headerImage from "../images/Header.png";

export default function Header() {
  return (
    <div className="header">
      <img
        className="logo-image"
        src="https://1000logos.net/wp-content/uploads/2022/03/Rick-and-Morty.png"
        alt={"Logo"}
      ></img>
      <img className="header-image" src={headerImage} alt={"Header"}></img>
      <div className="sun-image" alt={"Sun"}></div>
    </div>
  );
}
