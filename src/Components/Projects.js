import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Project from "./Project";
import { MdLibraryAdd } from "react-icons/md";

const API = process.env.REACT_APP_API_URL;

export default function Projects() {
    const [projects, setProjects] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios.get(`${API}/projects`)
            .then((res) => {
                console.log(res.data);
                setProjects(res.data);
                setIsLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setIsLoading(false);
            });
    }, []);
    console.log("projects:", projects === true);
    return (
      <div className="flex flex-col">
        <h1 className="text-5xl text-blue font-semibold">Portfolio</h1>
        {isLoading ? (
          <h1>Loading ...</h1>
        ) : (
          <>
            {projects.map((project) => (
              <div key={project.id} className="flex justify-start">
                <Project project={project} />
              </div>
            ))}
            {projects.length === 0 && (
              <div className="mt-10 flex items-center gap-4 z-10">
                <h2 className="text-4xl text-blue">Add Project</h2>
                <Link
                  to={"/projects/new"}
                  className="hover:bg-dark rounded-full p-2"
                >
                  <MdLibraryAdd className="text-blue" size={24} />
                </Link>
              </div>
            )}
          </>
        )}
      </div>
    );
}