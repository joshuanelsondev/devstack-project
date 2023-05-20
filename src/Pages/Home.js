import { Link } from "react-router-dom";
import headshot from "../assets/pursuit_headshot.png";
import {
  AiFillLinkedin,
  AiOutlineGithub,
  AiFillGoogleCircle,
  AiFillInstagram,
} from "react-icons/ai";
import { SiGmail } from "react-icons/si";

export default function Home() {
  return (
    <div className="h-full w-11/12 flex flex-col">
      <div className="flex justify-end mt-52 gap-20 relative">
        <div className="w-96 h-auto mt-20 text-center">
          <h1
            className="text-6xl text-blue font-semibold"
            style={{ "text-shadow": "3px 3px 3px black" }}
          >
            Joshua Nelson
          </h1>
          <h2 className="text-3xl mt-2 font-semibold text-dark">Developer</h2>
          <div className="flex mt-4 gap-8 justify-center">
            <div className="relative flex flex-col items-center">
              <AiFillLinkedin
                className="text-blue cursor-pointer hover:text-dark"
                size={28}
              />
              <p className="mt-4 right-0 text-gray bg-dark rounded p-1">
                LinkedIn
              </p>
            </div>
            <div className="relative flex flex-col items-center">
              <AiOutlineGithub
                className="text-blue cursor-pointer hover:text-dark"
                size={28}
              />
              <p className="mt-4 right-0 text-gray bg-dark rounded p-1">
                GitHub
              </p>
            </div>
            <div className="relative flex flex-col items-center">
              <SiGmail
                className="text-blue cursor-pointer hover:text-dark"
                size={28}
              />
              <p className=" mt-4  text-gray bg-dark rounded p-1">GMail</p>
            </div>
            <div className="relative flex flex-col items-center">
              <AiFillInstagram
                className="text-blue cursor-pointer hover:text-dark"
                size={28}
              />
              <p className="mt-4 text-gray bg-dark rounded p-1">
                Instagram
              </p>
            </div>
          </div>
        </div>
        <img
          src={headshot}
          alt="headshot"
          className="bg-gradient-to-r from-blue to-primary  rounded-3xl shadow-lg shadow-blue"
        />
      </div>
    </div>
  );
}