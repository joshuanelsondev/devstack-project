import DevStackLogo from "../assets/DSLogoBackgroundDark.png";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="h-full w-full relative">
      <div className="flex  items-center justify-center w-full h-20 absolute top-8">
        {/* <Link to={'/'}>
          <img src={DevStackLogo} alt="DevStack Logo" />
        </Link> */}
      </div>
    </div>
  );
}