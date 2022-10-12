import CharacterCards from "./CharacterCards";
import { useCharacters } from "../api/useData";
import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import { Pagination } from "@mui/material";
import Header from "./Header";
import "./pagination.css";
import "./Characters-page.css";

export default function Characters() {
  const [page, setPage] = useState(1);
  const handleChange = (event, value) => {
    setPage(value);
    window.scrollTo({ top: 350, behavior: "smooth" });
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
      <Header />
      <div className="character-page">
        {charDataLoaded ? (
          <>
            <div className="pagination">
            <Box
              sx={{
                margin: "auto",
                width: "fit-content",
                alignItems: "center",
                bgcolor: "rgba(0, 0, 0, 0.256)",
                borderRadius: "2rem",
                transition: "500ms",
                '&:hover': {
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  transition: "500ms"
                },
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
                showFirstButton={true}
                showLastButton={true}
              />
              </div>
            </Box>
            </div>
            <CharacterCards character={characters} />
            <Box
              sx={{
                margin: "auto",
                width: "fit-content",
                alignItems: "center",
                bgcolor: "rgba(0, 0, 0, 0.256)",
                borderRadius: "2rem",
                transition: "500ms",
                '&:hover': {
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  transition: "500ms"
                },
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
                showFirstButton={true}
                showLastButton={true}
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
