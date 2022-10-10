
import { Outlet, Link } from "react-router-dom";

export default function LandingPage () {

    return (
        <>
        <div>
            <img src="https://images2.alphacoders.com/642/642540.png" alt="logo" width={500}></img>
        <Link to="/characters">
          <button>CHARACTHERS</button>
        </Link>
        <Link to="/locations">
          <button>LOCATIONS</button>
        </Link>
      </div>
     <Outlet />
        </>
    )
}
