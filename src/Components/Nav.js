import { useState, useEffect } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import DevStackLogoLight from "../assets/DevStackLogoLight.png";
import {
  MdAccountCircle,
  MdHome,
  MdEmail,
  MdOutlineDarkMode,
  MdOutlineLightMode,
} from "react-icons/md";
import {
  AiOutlineAppstore,
  AiOutlineAppstoreAdd,
  AiOutlineMenu,
} from "react-icons/ai";

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
    const location = useLocation();

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

    const isDarkText = (path) => {
      return location.pathname === path
    };

    return (
      <div className="h-20 w-full absolute z-50">
        <div className="fixed flex w-full h-auto justify-center bg-gradient-to-r from-primary to-dark lg:absolute lg:right-0 lg:h-auto lg:w-60 lg:bg-none">
          <img
            src={DevStackLogoLight}
            alt="DevStack Logo"
            className="mt-4 w-52 cursor-pointer"
            onClick={() => navigate("/")}
          />
        </div>
        <div className="hidden lg:flex flex-col fixed top-[20%] gap-12 ml-1 sm:ml-4">
          <div className="flex items-center lg:gap-4 md:gap-1">
            <MdHome
              onClick={() => navigate("/")}
              className={`peer text-secondary hover:bg-dark rounded-full p-2 cursor-pointer ${
                isDarkText("/") ? "bg-dark" : "text-secondary"
              }`}
              size={40}
            />
            <p className="invisible text-secondary font-semibold peer-hover:visible">
              Home
            </p>
          </div>
          <div className="flex items-center lg:gap-4 md:gap-1">
            <MdAccountCircle
              onClick={() => navigate("/about")}
              className={`peer text-secondary hover:bg-dark rounded-full p-2 cursor-pointer ${
                isDarkText("/about") ? "bg-dark" : "text-secondary"
              }`}
              size={40}
            />
            <p className="invisible text-secondary font-semibold peer-hover:visible">
              About
            </p>
          </div>
          <div className="flex items-center lg:gap-4 md:gap-1">
            <AiOutlineAppstore
              onClick={() => navigate("/projects")}
              className={`peer text-secondary hover:bg-dark p-[8px] rounded-full cursor-pointer ${
                isDarkText("/projects") ? "bg-dark" : "text-secondary"
              }`}
              size={40}
            />
            <p className="invisible text-secondary font-semibold peer-hover:visible">
              Portfolio
            </p>
          </div>
          <div className="flex items-center lg:gap-4 md:gap-1">
            <AiOutlineAppstoreAdd
              onClick={() => navigate("projects/new")}
              className={`peer text-secondary hover:bg-dark rounded-full p-2 cursor-pointer ${
                isDarkText("/projects/new") ? "bg-dark" : "text-secondary"
              }`}
              size={40}
            />
            <p className="invisible text-secondary font-semibold peer-hover:visible">
              Add Project
            </p>
          </div>
          <div className="flex items-center lg:gap-4 md:gap-1">
            <MdEmail
              onClick={() => navigate("/contact")}
              className={`peer text-secondary hover:bg-dark rounded-full p-2 cursor-pointer ${
                isDarkText("/contact") ? "bg-dark" : "text-secondary"
              }`}
              size={40}
            />
            <p className="invisible text-secondary font-semibold peer-hover:visible">
              Contact
            </p>
          </div>

          <div>
            {darkTheme ? (
              <div className="flex items-center lg:gap-4 md:gap-1">
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
              <div className="flex items-center lg:gap-4 md:gap-1">
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

        <div className="h-10 w-10 flex justify-center fixed top-6 left-4">
          <div className="z-10 lg:hidden">
            <AiOutlineMenu
              onClick={toggleNav}
              className="text-blue transition-colors duration-300 ease-in-out transform hover:scale-110 cursor-pointer"
              size={20}
            />
          </div>
          {showNav && (
            <div className="fixed top-9 ml-20 w-fit pr-1 z-40 bg-primary transition-transform duration-1000 ease-in-out transform translate-y-4 md:hidden">
              <div
                className={`flex items-center gap-1 group ${
                  isDarkText("/") ? "text-dark" : "text-secondary"
                }`}
              >
                <MdHome
                  className="group-hover:text-dark rounded-full p-2"
                  size={30}
                />
                <p
                  onClick={() => navigate("/")}
                  className="text-sm font-semibold group-hover:text-dark cursor-pointer hover:scale-110"
                >
                  Home
                </p>
              </div>
              <div
                className={`flex items-center gap-1 group ${
                  isDarkText("/about") ? "text-dark" : "text-secondary"
                }`}
              >
                <MdAccountCircle
                  className="group-hover:text-dark rounded-full p-2"
                  size={30}
                />
                <p
                  onClick={() => navigate("/about")}
                  className="text-sm font-semibold group-hover:text-dark cursor-pointer hover:scale-110"
                >
                  About
                </p>
              </div>
              <div
                className={`flex items-center gap-1 group ${
                  isDarkText("/projects") ? "text-dark" : "text-secondary"
                }`}
              >
                <AiOutlineAppstore
                  className="group-hover:text-dark p-[8px] rounded-full"
                  size={30}
                />
                <p
                  onClick={() => navigate("/projects")}
                  className="text-sm font-semibold group-hover:text-dark cursor-pointer hover:scale-110"
                >
                  Portfolio
                </p>
              </div>
              <div
                className={`flex items-center gap-1 group w-max ${
                  isDarkText("/projects/new") ? "text-dark" : "text-secondary"
                }`}
              >
                <AiOutlineAppstoreAdd
                  className="group-hover:text-dark rounded-full p-2"
                  size={30}
                />
                <p
                  onClick={() => navigate("projects/new")}
                  className="text-sm font-semibold group-hover:text-dark cursor-pointer hover:scale-110"
                >
                  Add Project
                </p>
              </div>
              <div
                className={`flex items-center gap-1 group ${
                  isDarkText("/contact") ? "text-dark" : "text-secondary"
                }`}
              >
                <MdEmail
                  className="group-hover:text-dark rounded-full p-2"
                  size={30}
                />
                <p
                  onClick={() => navigate("/contact")}
                  className="text-sm font-semibold group-hover:text-dark cursor-pointer hover:scale-110"
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
