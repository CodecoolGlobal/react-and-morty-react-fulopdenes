import { Link } from "react-router-dom"
import CharacterCard from "./CharacterCard";
import { useCharacters } from "../api/useData";

export default function Characters () {
    const characters = useCharacters(1);

    // console.log(characters);

    return (
        <>
        <div className="character-page">
            {/* <p>Characters</p> */}
            <CharacterCard 
                character={characters}/>
            <Link to="/">
            <button>BACK TO LANDING PAGE</button>
            </Link>
        </div>
        </>
    )
}
