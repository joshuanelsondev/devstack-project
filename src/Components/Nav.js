import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import DevStackLogoLight from "../assets/DevStackLogoLight.png";
import { AiOutlineMenu } from "react-icons/ai";

import {
  MdAccountCircle,
  MdHome,
  MdEmail,
  MdOutlineDarkMode,
  MdOutlineLightMode,
} from "react-icons/md";
import { AiOutlineAppstore, AiOutlineAppstoreAdd } from "react-icons/ai";

const usePrefersDarkMode = () => {
  const [prefersDarkMode, setPrefersDarkMode] = useState(
    window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = (event) => {
      setPrefersDarkMode(event.matches);
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  return prefersDarkMode;
};

export default function Nav({ toggleMode }) {

    const prefersDarkMode = usePrefersDarkMode();
    const [darkTheme, setDarkTheme] = useState(prefersDarkMode);
    const [showNav, setShowNav] = useState(false)
    const navigate = useNavigate();

    useEffect(() => {
      document.documentElement.classList.toggle("dark", darkTheme);
    }, [darkTheme]);

    const toggleTheme = () => {
      setDarkTheme(!darkTheme);
      toggleMode();
    };

    const toggleNav = () => {
      setShowNav(!showNav);
    };

    return (
      <div className="h-full w-full absolute">
        <Link
          className="flex w-full justify-center sm:absolute sm:right-0 sm:h-auto sm:w-60 z-10"
          to={"/"}
        >
          <img
            src={DevStackLogoLight}
            alt="DevStack Logo"
            className="w-40 mt-4 sm:w-52"
          />
        </Link>
        <div className="hidden md:flex flex-col fixed top-[20%] gap-12 ml-1 sm:ml-4 z-10">
          <div className="flex items-center gap-4">
            <MdHome
              onClick={() => navigate("/")}
              className="peer text-secondary hover:bg-dark rounded-full p-2 cursor-pointer"
              size={40}
            />
            <p className="invisible text-secondary font-semibold peer-hover:visible">
              Home
            </p>
          </div>
          <div className="flex items-center gap-4">
            <MdAccountCircle
              onClick={() => navigate("/about")}
              className="peer text-secondary hover:bg-dark rounded-full p-2 cursor-pointer"
              size={40}
            />
            <p className="invisible text-secondary font-semibold peer-hover:visible">
              About
            </p>
          </div>
          <div className="flex items-center gap-4">
            <AiOutlineAppstore
              onClick={() => navigate("/projects")}
              className="peer text-secondary hover:bg-dark p-[8px] rounded-full cursor-pointer"
              size={40}
            />
            <p className="invisible text-secondary font-semibold peer-hover:visible">
              Portfolio
            </p>
          </div>
          <div className="flex items-center gap-4">
            <AiOutlineAppstoreAdd
              onClick={() => navigate("projects/new")}
              className="peer text-secondary hover:bg-dark rounded-full p-2 cursor-pointer"
              size={40}
            />
            <p className="invisible text-secondary font-semibold peer-hover:visible">
              Add Project
            </p>
          </div>
          <div className="flex items-center gap-4">
            <MdEmail
              onClick={() => navigate("/contact")}
              className="peer text-secondary hover:bg-dark rounded-full p-2 cursor-pointer"
              size={40}
            />
            <p className="invisible text-secondary font-semibold peer-hover:visible">
              Contact
            </p>
          </div>

          <div>
            {darkTheme ? (
              <div className="flex items-center gap-4">
                <MdOutlineDarkMode
                  onClick={toggleTheme}
                  className="peer text-secondary hover:bg-dark rounded-full p-2 cursor-pointer"
                  size={40}
                />
                <p className="invisible text-secondary font-semibold peer-hover:visible">
                  Dark
                </p>
              </div>
            ) : (
              <div className="flex items-center gap-4">
                <MdOutlineLightMode
                  onClick={toggleTheme}
                  className="peer text-secondary hover:bg-dark rounded-full p-2 cursor-pointer"
                  size={40}
                />
                <p className="invisible text-secondary font-semibold peer-hover:visible">
                  Light
                </p>
              </div>
            )}
          </div>
        </div>

        <div className="h-full w-10 flex justify-center absolute top-6 left-4">
          <div className="z-30 md:hidden">
            <AiOutlineMenu
              onClick={toggleNav}
              className="text-blue transition-colors duration-300 ease-in-out transform hover:scale-110"
              size={20}
            />
          </div>
          {showNav && (
            <div className="absolute top-6 ml-10 w-fit pr-1 bg-primary bg-opacity-50 rounded transition-transform duration-1000 ease-in-out transform translate-y-4 z-30">
              <div className="flex items-center gap-1 group">
                <MdHome
                  className="text-secondary group-hover:text-dark rounded-full p-2 cursor-pointer"
                  size={30}
                />
                <p
                  onClick={() => navigate("/")}
                  className="text-secondary text-sm font-semibold group-hover:text-dark"
                >
                  Home
                </p>
              </div>
              <div className="flex items-center gap-1 group">
                <MdAccountCircle
                  className="text-secondary group-hover:text-dark rounded-full p-2 cursor-pointer"
                  size={30}
                />
                <p
                  onClick={() => navigate("/about")}
                  className="text-secondary text-sm font-semibold group-hover:text-dark"
                >
                  About
                </p>
              </div>
              <div className="flex items-center gap-1 group">
                <AiOutlineAppstore
                  className="text-secondary group-hover:text-dark p-[8px] rounded-full cursor-pointer"
                  size={30}
                />
                <p
                  onClick={() => navigate("/projects")}
                  className="text-secondary text-sm font-semibold group-hover:text-dark"
                >
                  Portfolio
                </p>
              </div>
              <div className="flex items-center gap-1 group w-max">
                <AiOutlineAppstoreAdd
                  className="text-secondary group-hover:text-dark rounded-full p-2 cursor-pointer"
                  size={30}
                />
                <p
                  onClick={() => navigate("projects/new")}
                  className="text-secondary text-sm font-semibold group-hover:text-dark"
                >
                  Add Project
                </p>
              </div>
              <div className="flex items-center gap-1 group">
                <MdEmail
                  className="text-secondary group-hover:text-dark rounded-full p-2 cursor-pointer"
                  size={30}
                />
                <p
                  onClick={() => navigate("/contact")}
                  className="text-secondary text-sm font-semibold group-hover:text-dark"
                >
                  Contact
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    );
}
