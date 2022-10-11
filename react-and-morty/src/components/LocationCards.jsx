import { useState } from "react";
import "./LocationCards.css";

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
          <div className="loc-name">{loc.name}</div>
          <div className="loc-type">{loc.type}</div>
        </div>
        <div className="loc-more-info-div">
          <div>
            <div className="label">dimension:</div>
            <div>{loc.dimension}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function LocationCards(props) {
  const location = props.location.results;

  if (location !== undefined) {
    return (
      <>
        {location.map((loc) => (
          <Card loc={loc} />
        ))}
      </>
    );
  }
}
