export default function CharacterCard(props) {
  const character = props.character;

  if (character !== undefined) {
    return (
      <>
        <div className="character-Card">
          <div>{character.id}</div>
          <div>{character.name}</div>
          <div>{character.species}</div>
        </div>
      </>
    );
  }
}
