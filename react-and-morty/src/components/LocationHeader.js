import React from "react";
import "./LocationHeader.css";
import headerImage from "../images/Header.png";
import rickAndMortyLogo from "../images/Rick-and-Morty.png";
import headRed from "../images/cromulon red.png";
import headBlue from "../images/cromulon blue.png";
import headYellow from "../images/cromulon yellow.png";
import headGreen from "../images/cromulon green.png";
import headFront from "../images/cromulon front.png";
export default function Header() {
  return (
    <div>
      <img
        alt="rick and morty logo"
        className="loc-logo-image"
        src={rickAndMortyLogo}
      ></img>

      <img className="headRed" src={headRed} alt={"red head"} border={0}></img>
      <img
        className="headYellow"
        src={headYellow}
        alt={"yellow head"}
        border={0}
      ></img>
      <img
        className="headGreen"
        src={headGreen}
        alt={"green head"}
        border={0}
      ></img>
      <img
        className="headBlue"
        src={headBlue}
        alt={"blue head"}
        border={0}
      ></img>
      <img
        className="headFront"
        src={headFront}
        alt={"frontal head"}
        border={0}
      ></img>

      <img
        className="loc-header-image"
        src={headerImage}
        alt={"rick and morty scenery"}
      ></img>
    </div>
  );
}
