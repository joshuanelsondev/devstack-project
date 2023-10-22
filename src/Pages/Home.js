import { useEffect } from "react";
import { Link } from "react-router-dom";
import imageHome from "../assets/pursuit_headshot.png";
import {
  AiFillLinkedin,
  AiOutlineGithub,
  AiFillInstagram,
  AiFillFacebook,
} from "react-icons/ai";

export default function Home({ setErrorPage }) {
  useEffect(() => {
    setErrorPage(false);
  }, [setErrorPage]);

  return (
    <div className="h-screen w-full flex flex-col">
      <div className="h-full w-full flex justify-evenly items-center relative">
        <div className="w-fit h-auto text-left z-20">
          <h1 className="text-6xl xl:text-7xl text-primary dark:text-blue font-semibold text-shadow mb-4">
            Joshua Nelson
          </h1>
          <h2 className="text-3xl mt-2 font-semibold text-dark dark:text-dark">
            <span className="text-primary dark:text-blue">Full Stack</span>{" "}
            Developer
          </h2>
          <div className="flex mt-4 gap-8 justify-start">
            <a
              className="peer"
              href="https://www.linkedin.com/in/joshuanelsondev"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillLinkedin
                className=" text-primary dark:text-blue cursor-pointer  rounded-full"
                size={24}
              />
            </a>
            <a
              className="peer"
              href="https://github.com/joshuanelsondev"
              target="_blank"
              rel="noreferrer"
            >
              <AiOutlineGithub
                className=" text-primary dark:text-blue cursor-pointer  rounded-full"
                size={24}
              />
            </a>
            <a
              className="peer"
              href="https://www.facebook.com/JoshuaNelsonSax"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillFacebook
                className=" text-primary dark:text-blue cursor-pointer  rounded-full"
                size={24}
              />
            </a>
            <a
              className="peer"
              href="https://www.instagram.com/joshuanelsonmusic/"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillInstagram
                className=" text-primary dark:text-blue cursor-pointer  rounded-full"
                size={24}
              />
            </a>
          </div>
          <div className="flex gap-4 mt-4">
            <Link
              to={"/about"}
              className="h-10 w-24  flex items-center justify-center rounded border text-primary dark:text-blue dark:hover:bg-blue dark:hover:text-primary font-semibold px-2 hover:bg-primary hover:text-secondary"
            >
              About
            </Link>
            <Link
              to={"/projects"}
              className="h-10 w-20  flex items-center justify-center rounded border text-primary dark:text-blue dark:hover:bg-blue dark:hover:text-primary font-semibold px-2 hover:bg-primary hover:text-secondary"
            >
              Portfolio
            </Link>
          </div>
        </div>
        <img
          className="rounded-full h-96 w-96 object-contain pt-4 shadow-md shadow-primary border border-primary dark:border-blue"
          src={imageHome}
          alt="Headshot"
        />
      </div>
    </div>
  );
}
