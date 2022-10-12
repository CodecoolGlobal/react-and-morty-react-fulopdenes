import { useEffect, useState } from "react";
import "./CharacterCards.css";

const Card = (props) => {
  const [isClicked, setIsClicked] = useState(false);
  const char = props.char;

  return (
    <div
      onClick={() => setIsClicked(!isClicked)}
      className={isClicked ? "card-viewport clicked" : "card-viewport"}
    >
      <div className="character-card">
        <div className="main-info">
          <div className="char-name">{char.name}</div>
          <img
            src={char.image}
            className={
              char.status === "Dead"
                ? "char-image status-dead"
                : char.status === "unknown"
                ? "char-image status-unknown"
                : "char-image status-alive"
            }
            alt={char.name}
          ></img>
          <div
            className={
              char.status === "Dead"
                ? "status-dead"
                : char.status === "unknown"
                ? "status-unknown"
                : "status-alive"
            }
          >
            <i>
              <sup>
                <small>state:</small>
              </sup>
            </i>
            {char.status === "Dead" ? `${char.status} ☠` : char.status}
          </div>
        </div>
        <div className="more-info-div">
          <div>
            <div className="label">species:</div>
            <div>{char.species}</div>
          </div>
          <div>
            <div className="label">gender:</div>
            <div>{char.gender}</div>
          </div>
          <div>
            <div className="label">last seen:</div>
            <div>{char.location.name}</div>
          </div>
          <div>
            <div className="label">origin:</div>
            <div>{char.origin.name}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function CharacterCards(props) {
  const character = props.character.results;

  if (character !== undefined) {
    return (
      <>
        {character.map((char) => (
          <Card key={char.id} char={char} />
        ))}
      </>
    );
  }
}
