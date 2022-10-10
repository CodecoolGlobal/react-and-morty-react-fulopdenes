import { Link } from "react-router-dom";
import CharacterCard from "./CharactersCard";
import { useCharacters } from "../api/useData";
import { useState, useEffect } from "react";
import Pagination from "./Pagination";
export default function Characters() {
  const [charDataLoaded, setCharDataLoaded] = useState(false);
  const characters = useCharacters(1);

  console.log(characters);
  useEffect(() => {
    characters === "Loading..."
      ? setCharDataLoaded(false)
      : setCharDataLoaded(true);
  }, [characters]);
  return (
    <>
      <div className="character-page">
        <Link to="/">
          <button>⬅BACK TO LANDING PAGE</button>
        </Link>
        <p id="character-title">CHARACTERS</p>
        {charDataLoaded ? (
          <>
            <CharacterCard character={characters} />
            <Pagination page={characters.info.pages} />
          </>
        ) : (
          console.log("false")
        )}
      </div>
      {/*  */}
    </>
  );
}
