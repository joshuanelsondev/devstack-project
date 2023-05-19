import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  MdAccountCircle,
  MdHome,
  MdOutlineDashboardCustomize,
  MdEmail,
  MdOutlineDarkMode,
  MdOutlineLightMode,
} from "react-icons/md";
import { RxDashboard } from "react-icons/rx";

export default function Nav() {
    const [darkTheme, setDarkTheme] = useState(true);
    const navigate = useNavigate();

    const toggleTheme = () => {
        setDarkTheme(!darkTheme);
    };

    return (
      <div className="flex flex-col absolute top-[20%] gap-12 ml-10 z-10">
        <div className="flex items-center gap-4">
          <MdHome
            onClick={() => navigate('/')}
            className="peer text-secondary hover:bg-primary rounded-[16px] p-2 cursor-pointer"
            size={40}
          />
          <p className="invisible text-secondary font-semibold peer-hover:visible">
            Home
          </p>
        </div>
        <div className="flex items-center gap-4">
          <MdAccountCircle
            onClick={() => navigate('/about')}
            className="peer text-secondary hover:bg-primary rounded-[16px] p-2 cursor-pointer"
            size={40}
          />
          <p className="invisible text-secondary font-semibold peer-hover:visible">
            About
          </p>
        </div>
        <div className="flex items-center gap-4">
          <RxDashboard
            onClick={() => navigate('/projects')}
            className="peer text-secondary hover:bg-primary p-[8px] rounded-[16px] cursor-pointer"
            size={40}
          />
          <p className="invisible text-secondary font-semibold peer-hover:visible">
            Portfolio
          </p>
        </div>
        <div className="flex items-center gap-4">
          <MdOutlineDashboardCustomize
            onClick={() => navigate('projects/new')}
            className="peer text-secondary hover:bg-primary rounded-[16px] p-2 cursor-pointer"
            size={40}
          />
          <p className="invisible text-secondary font-semibold peer-hover:visible">
            Add Project
          </p>
        </div>
        <div className="flex items-center gap-4">
          <MdEmail
            onClick={() => navigate('/contact')}
            className="peer text-secondary hover:bg-primary rounded-[16px] p-2 cursor-pointer"
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
                className="peer text-secondary hover:bg-primary rounded-[16px] p-2 cursor-pointer"
                size={40}
              />
              <p className="invisible text-secondary font-semibold peer-hover:visible">Dark</p>
            </div>
          ) : (
            <div className="flex items-center gap-4">
              <MdOutlineLightMode
                onClick={toggleTheme}
                className="peer text-secondary hover:bg-primary rounded-[16px] p-2 cursor-pointer"
                size={40}
              />
              <p className="invisible text-secondary font-semibold peer-hover:visible">Light</p>
            </div>
          )}
        </div>
      </div>
    );
}
