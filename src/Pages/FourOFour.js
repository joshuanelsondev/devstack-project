import FourOFourLogo from "../assets/FourOFourLogo.png"
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { HiHomeModern } from "react-icons/hi2";

export default function FourOFour({ errorPage, setErrorPage }) {
  useEffect(() => {
    toggleError()
  }, []);

  const toggleError = () => {
    setErrorPage(!errorPage);
  }

  return (
    <div className="flex  flex-col items-center h-full w-full">
      <img src={FourOFourLogo} alt="404 Logo" className="h-96 w-96"/>
      <h1 className="text-4xl text-dark">Sorry, Page Not Found</h1>
      <Link to={'/'} className="mt-10 hover:text-blue z-10"><HiHomeModern size={100}/></Link>
    </div>
  );
}