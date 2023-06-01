import { useEffect } from "react";

import headshotCopy from "../assets/headshot-copy.png"
import {
  AiFillLinkedin,
  AiOutlineGithub,
  AiFillInstagram,
  AiFillFacebook,
} from "react-icons/ai";

export default function Home({ setErrorPage }) {

  useEffect(() => {
    setErrorPage(false);
  }, []);

  return (
    <div className="h-full w-11/12 flex flex-col">
      <div className="flex justify-center mt-52 gap-20 relative">
        <div className="w-96 h-auto mt-20 text-center z-20 sm:bg-dark sm:bg-opacity-50 lg:bg-none">
          <h1
            className="text-6xl text-blue font-semibold"
            style={{ "textShadow": "3px 3px 3px black" }}
          >
            Joshua Nelson
          </h1>
          <h2 className="text-3xl mt-2 font-semibold text-dark">
            <span className="text-blue">Full Stack</span> Developer
          </h2>
          <div className="flex mt-4 gap-8 justify-center">
            <div className="flex flex-col items-center gap-2">
              <a
                className="peer"
                href="https://www.linkedin.com/in/joshuanelsondev"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillLinkedin
                  className="p-2 text-blue cursor-pointer hover:bg-dark rounded-full"
                  size={40}
                />
              </a>
              <p className="text-blue font-semibold invisible peer-hover:visible">
                LinkedIn
              </p>
            </div>

            <div className="flex flex-col items-center gap-2">
              <a
                className="peer"
                href="https://github.com/joshuanelsondev"
                target="_blank"
                rel="noreferrer"
              >
                <AiOutlineGithub
                  className="p-2 text-blue cursor-pointer hover:bg-dark rounded-full"
                  size={40}
                />
              </a>
              <p className="text-blue font-semibold invisible peer-hover:visible">
                GitHub
              </p>
            </div>

            <div className="flex flex-col items-center gap-2">
              <a
                className="peer"
                href="https://www.facebook.com/JoshuaNelsonSax"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillFacebook
                  className="p-2 text-blue cursor-pointer hover:bg-dark rounded-full"
                  size={40}
                />
              </a>
              <p className="text-blue font-semibold invisible peer-hover:visible">
                Facebook
              </p>
            </div>

            <div className="flex flex-col items-center gap-2">
              <a
                className="peer"
                href="https://www.instagram.com/joshuanelsonmusic/"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillInstagram
                  className="p-2 text-blue cursor-pointer hover:bg-dark rounded-full"
                  size={40}
                />
              </a>
              <p className="text-blue font-semibold invisible peer-hover:visible">
                Instagram
              </p>
            </div>
          </div>
        </div>
        <img
          src={headshotCopy}
          alt="headshot"
          className="h-screen fixed top-0 right-0 opacity-50"
        />
      </div>
    </div>
  );
}