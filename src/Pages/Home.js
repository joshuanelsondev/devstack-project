import { useEffect } from "react";


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
    <div className="h-screen w-full flex flex-col bg-imageHome bg-no-repeat bg-right-bottom">
      <div className="flex justify-center mt-52 gap-20 relative">
        <div className="w-96 xl:w-9/12 h-auto mt-20 text-center z-20">
          <h1
            className="text-6xl xl:text-8xl text-primary dark:text-blue font-semibold text-shadow"
          >
            Joshua Nelson
          </h1>
          <h2 className="text-3xl mt-2 font-semibold text-dark dark:text-dark">
            <span className="text-primary dark:text-blue">Full Stack</span> Developer
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
                  className="p-2 text-primary dark:text-blue cursor-pointer hover:bg-secondary hover:dark:bg-dark  rounded-full"
                  size={40}
                />
              </a>
              <p className="text-primary dark:text-blue font-semibold invisible peer-hover:visible">
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
                  className="p-2 text-primary hover:bg-secondary hover:dark:bg-dark dark:text-blue cursor-pointer  rounded-full"
                  size={40}
                />
              </a>
              <p className="text-primary dark:text-blue font-semibold invisible peer-hover:visible">
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
                  className="p-2 text-primary dark:text-blue cursor-pointer hover:bg-secondary hover:dark:bg-dark  rounded-full"
                  size={40}
                />
              </a>
              <p className="text-primary dark:text-blue font-semibold invisible peer-hover:visible">
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
                  className="p-2 text-primary dark:text-blue cursor-pointer hover:bg-secondary hover:dark:bg-dark  rounded-full"
                  size={40}
                />
              </a>
              <p className="text-primary dark:text-blue font-semibold invisible peer-hover:visible">
                Instagram
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
