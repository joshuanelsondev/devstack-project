import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import DevStackLogoLight from "../assets/DevStackLogoLight.png";
import miniLogoLight from "../assets/miniLogoLight.png";
import {
  MdAccountCircle,
  MdHome,
  MdEmail,
  MdOutlineDarkMode,
  MdOutlineLightMode,
} from "react-icons/md";
import { AiOutlineAppstore, AiOutlineAppstoreAdd } from "react-icons/ai";


export default function Nav({ toggleMode }) {
    const prefersDarkMode = usePrefersDarkMode();
    const [darkTheme, setDarkTheme] = useState(prefersDarkMode);
    const navigate = useNavigate();

    useEffect(() => {
      document.documentElement.classList.toggle("dark", darkTheme);
    }, [darkTheme]);

    const toggleTheme = () => {
        setDarkTheme(!darkTheme);
        toggleMode();
    };

    return (
      <div className="h-full w-full absolute">
        <Link className="absolute right-0 h-auto w-60 z-10" to={"/"}>
          <img src={DevStackLogoLight} alt="DevStack Logo" />
        </Link>
        <div className="flex flex-col fixed top-[20%] gap-12 ml-10 z-10">
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
      </div>
    );
}
