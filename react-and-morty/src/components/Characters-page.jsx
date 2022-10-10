import { Link } from "react-router-dom"
import CharacterCard from "./CharacterCard";
import { useCharacters } from "../api/useData";

export default function Characters () {
    const characters = useCharacters(1);

    return (
        <>
        <div className="character-page">
            <Link to="/">
            <button>⬅BACK TO LANDING PAGE</button>
            </Link>
            <p id="character-title">CHARACTERS</p>
            <CharacterCard 
                character={characters}/>
        </div>
        </>
    )
}
