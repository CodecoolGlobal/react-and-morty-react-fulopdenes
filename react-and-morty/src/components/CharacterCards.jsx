import "./CharacterCards.css";

export default function CharacterCards(props) {
  const character = props.character.results;

  if (character !== undefined) {
    return (
      <>
        {character.map((char) => {
          return (
            <div className="character-Card" key={char.id}>
              <div className="char-name">{char.name}</div>
              <img
                src={char.image}
                className={
                    char.status === "Dead" ?
                    "char-image status-dead" :
                    char.status === "unknown" ? 
                    "char-image status-unknown" :
                    "char-image status-alive"
                  }
                alt={char.name}
              ></img>
              <div
                className={
                  char.status === "Dead" ?
                  "status-dead" :
                  char.status === "unknown" ? 
                  "status-unknown" :
                  "status-alive"
                }
              >
                {char.status}
              </div>
            </div>
          );
        })}
      </>
    );
  }
}
