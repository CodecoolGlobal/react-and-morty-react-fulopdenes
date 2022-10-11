import { Link } from "react-router-dom";
import CharacterCards from "./CharacterCards";
import { useCharacters } from "../api/useData";
import { useState, useEffect } from "react";
import "./pagination.css";

import Box from "@mui/material/Box";
import { Pagination } from "@mui/material";

export default function Characters() {
  const [page, setPage] = useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };

  const [charDataLoaded, setCharDataLoaded] = useState(false);
  const characters = useCharacters(page);

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
            <div className="pagination">
              <Pagination
                count={characters.info.pages}
                page={page}
                variant="outlined"
                shape="rounded"
                color="primary"
                onChange={handleChange}
              />
            </div>
            <CharacterCards character={characters} />
            <Box
              sx={{
                margin: "auto",
                width: "fit-content",
                alignItems: "center",
              }}
            >
              <div className="pagination">
                <Pagination
                  count={characters.info.pages}
                  page={page}
                  variant="outlined"
                  shape="rounded"
                  color="primary"
                  onChange={handleChange}
                />
              </div>
            </Box>
          </>
        ) : (
          <>
            <div>loading...</div>
          </>
        )}
      </div>
    </>
  );
}
