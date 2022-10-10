
export default function CharacterCard (props) {
    const character = props.character.results
  
    if (character !== undefined) {
         return (
        <>
        {character.map((char) => {
            return (
             <div className="character-Card" key={char.id}>
             <img src={char.image} className="char-image"></img>
             <div>{char.name}</div>
             <div>{char.status}</div>
            </div>
            )
        })}
        </>
    )
    }   
}
