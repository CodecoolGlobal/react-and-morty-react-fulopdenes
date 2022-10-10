import { Outlet, Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <>
      <div>
        <img
          src="https://images2.alphacoders.com/642/642540.png"
          alt={"logo"}
          id="landing-image"
        ></img>
        <Link to="/characters">
          <button>CHARACTHERS</button>
        </Link>
        <Link to="/locations">
          <button>LOCATIONS</button>
        </Link>
        <div> Lorem ipsum dolor sit amet </div>
      </div>

      <Outlet />
    </>
  );
}
