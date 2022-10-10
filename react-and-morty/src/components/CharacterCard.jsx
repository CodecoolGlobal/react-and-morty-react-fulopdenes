
export default function CharacterCard (props) {
    if (props.character.results !== undefined) {
         return (
        <>
        <div className="character-Card">
            <div>{props.character.results[0].id}</div>
            <div>{props.character.results[0].name}</div>
            <div>{props.character.results[0].status}</div>
        </div>
        </>
    )
    }
    
    
}
