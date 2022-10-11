import { useState } from "react";
import "./CharacterCards.css";

const Card = (props) => {
  const [isClicked, setIsClicked] = useState(false);
  const char = props.char;
  return (
    <div
      onClick={() => setIsClicked(!isClicked)}
      className={isClicked ? "card-viewport clicked" : "card-viewport"}
      key={char.id}
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
            {char.status}
          </div>
          <div className="more-info-div">Dingdong</div>
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
          <Card char={char} />
        ))}
      </>
    );
  }
}
