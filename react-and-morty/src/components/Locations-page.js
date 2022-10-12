import { Link } from "react-router-dom";
import LocationCards from "./LocationCards";
import { useLocations } from "../api/useData";
import { useState, useEffect } from "react";
import { Pagination } from "@mui/material";
import Box from "@mui/material/Box";
import "./pagination.css";
import "./Location-page.css";
import LocationHeader from "./LocationHeader";

export default function Locations() {
  const [page, setPage] = useState(1);
  const handleChange = (event, value) => {
    setPage(value);
    window.scrollTo({ top: 350, behavior: "smooth" });
  };

  const [locDataLoaded, setLocDataLoaded] = useState(false);
  const locations = useLocations(page);

  useEffect(() => {
    locations === "Loading..."
      ? setLocDataLoaded(false)
      : setLocDataLoaded(true);
  }, [locations]);

  return (
    <>
      <LocationHeader />
      <div className="location-page">
        <Link to="/">
          <button className="go-back-button">⬅ BACK TO LANDING PAGE</button>
        </Link>
        <p id="location-title">LOCATIONS</p>
        {locDataLoaded ? (
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
                count={locations.info.pages}
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
            <LocationCards location={locations} />
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
                count={locations.info.pages}
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
          console.log("false")
        )}
      </div>
    </>
  );
}
