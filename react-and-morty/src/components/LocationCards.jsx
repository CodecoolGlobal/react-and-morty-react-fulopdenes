import { useState } from "react";
import "./LocationCards.css";

const residentsArrayToIconDivs = residentLink => {
  const residentID = residentLink.split("/")[residentLink.split("/").length - 1];
  const urlToImg = "https://rickandmortyapi.com/api/character/avatar/" + residentID + ".jpeg"
   
  return <img
  src={urlToImg}
  className="resident-image"
  alt={"resident no. " + residentID}
  ></img>
}

const Card = (props) => {
  const [isClicked, setIsClicked] = useState(false);
  const loc = props.loc;
  return (
    <div
      onClick={() => setIsClicked(!isClicked)}
      className={
        isClicked ? "location-card-viewport clicked" : "location-card-viewport"
      }
      key={loc.id}
    >
      <div className="location-card">
        <div className="loc-main-info">
          <div className="loc-name">
            {loc.name}
            {loc.dimension === "unknown" || loc.dimension === "" ? <></> : <div className="loc-dimension"> from the {loc.dimension}</div>}
          </div>
          <div>
            <div className="label">which is a</div>
            <div
              className="loc-type">
              {loc.type}
            </div>
          </div>
        </div>
        <div className="loc-more-info-div">
          {loc.residents.length > 0 ?
          <div>
            <div className="label">{loc.name}'s residents:</div>
            <div className="residents-box">
              {loc.residents.map(residentsArrayToIconDivs)}
            </div>
          </div>
          :
          <div>
            <div className="label">{loc.name} has no residents.</div>
          </div>
          }
        </div>
      </div>
    </div>
  );
};

export default function LocationCards(props) {
  const location = props.location.results;
  console.log(location);
  if (location !== undefined) {
    return (
      <div className="loc-cards">
        {location.map((loc) => (
          <Card loc={loc} />
        ))}
      </div>
    );
  }
}

