import { Link } from "react-router-dom";
import React from "react";
import "./LocationHeader.css";
import headerImage from "../images/Header.png";
import rickAndMortyLogo from "../images/Rick-and-Morty.png";
import headRed from "../images/cromulon red.png";
import headBlue from "../images/cromulon blue.png";
import headYellow from "../images/cromulon yellow.png";
import headGreen from "../images/cromulon green.png";
import headFront from "../images/cromulon front.png";
export default function Header({ scrollStatus }) {
  return (
    <div
      className="header"
      style={{ height: scrollStatus < 280 ? 400 - scrollStatus : 120 }}
    >
      <Link to="/">
        <button className="go-back-button">⬅ BACK TO LANDING PAGE</button>
      </Link>
      <img
        alt="rick and morty logo"
        src={rickAndMortyLogo}
        className={scrollStatus < 50 ? "logo-image" : "logo-image logo-image-invisible"}
      ></img>
      <p className="title">LOCATIONS</p>
      <a href="#">
        <img
          className="headRed"
          src={headRed}
          alt={"red head"}
          border={0}
          style={{opacity: scrollStatus < 50 ? 0.7 : 0}}
        ></img>
        <img
          className="headYellow"
          src={headYellow}
          alt={"yellow head"}
          border={0}
          style={{opacity: scrollStatus < 50 ? 0.4 : 0}}
        ></img>
        <img
          className="headGreen"
          src={headGreen}
          alt={"green head"}
          border={0}
          style={{opacity: scrollStatus < 50 ? 0.6 : 0}}
        ></img>
        <img
          className="headBlue"
          src={headBlue}
          alt={"blue head"}
          border={0}
          style={{opacity: scrollStatus < 50 ? 0.6 : 0}}
        ></img>
        <img
          className="headFront"
          src={headFront}
          alt={"frontal head"}
          border={0}
          style={{opacity: scrollStatus < 50 ? 0.3 : 0}}
        ></img>
      </a>
    </div>
  );
}
