
import React from "react";
import "./LocationHeader.css";
import rickAndMortyLogo from "../images/Rick-and-Morty.png";
import headRed from "../images/cromulon red.png";
import headBlue from "../images/cromulon blue.png";
import headYellow from "../images/cromulon yellow.png";
import headGreen from "../images/cromulon green.png";
import headFront from "../images/cromulon front.png";
import showMe from "../sound/SHOW.mp3";
import iLike from "../sound/i like.mp3";
export default function Header({ scrollStatus }) {
  const likeAudio = new Audio(iLike);
  likeAudio.loop = false;
  const audio = new Audio(showMe);
  audio.loop = false;
  return (
    <div
      className="locHeader"
      style={{ height: scrollStatus < 280 ? 400 - scrollStatus : 120 }}
    >
      <p id="location-title">LOCATIONS</p>
      <img
        className={
          scrollStatus < 50
            ? "loc-logo-image"
            : "loc-logo-image loc-logo-image-invisible"
        }
        alt="rick and morty logo"
        src={rickAndMortyLogo}
      ></img>

      <img
        onClick={() => {
          audio.play();
        }}
        className="headRed"
        src={headRed}
        alt={"red head"}
        border={0}
        style={{ display: scrollStatus < 50 ? "block" : "none" }}
      ></img>
      <img
        onClick={() => {
          audio.play();
        }}
        className="headYellow"
        src={headYellow}
        alt={"yellow head"}
        border={0}
        style={{ display: scrollStatus < 50 ? "block" : "none" }}
      ></img>
      <img
        onClick={() => {
          audio.play();
        }}
        className="headGreen"
        src={headGreen}
        alt={"green head"}
        border={0}
        style={{ display: scrollStatus < 50 ? "block" : "none" }}
      ></img>
      <img
        onClick={() => {
          audio.play();
        }}
        className="headBlue"
        src={headBlue}
        alt={"blue head"}
        border={0}
        style={{ display: scrollStatus < 50 ? "block" : "none" }}
      ></img>
      <img
        className="headFront"
        src={headFront}
        alt={"frontal head"}
        border={0}
        style={{ display: scrollStatus < 50 ? "block" : "none" }}
      ></img>
    </div>
  );
}
