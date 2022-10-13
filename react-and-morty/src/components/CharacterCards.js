import { useState } from "react";
import "./CharacterCards.css";

const Card = (props) => {
  const [isClicked, setIsClicked] = useState(false);
  const char = props.char;

  return (
    <div
      role={"button"}
      onClick={() => setIsClicked(!isClicked)}
      className={
        isClicked ? "char-card-viewport clicked" : "char-card-viewport"
      }
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
          <div className="char-species">{char.species}</div>
        </div>
        <div className="more-info-div">
          <div>
            <div className="label">state:</div>
            <div>{char.status}</div>
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
      <div className="char-cards">
        {character.map((char) => (
          <Card key={char.id} char={char} />
        ))}
      </div>
    );
  }
}
