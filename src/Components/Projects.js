import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Project from "./Project";

const API = process.env.REACT_APP_API_URL;

export default function Projects() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        axios.get(`${API}/projects`)
            .then((res) => {
                console.log(res.data);
                setProjects(res.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <div className="flex flex-col">
            <h1 className="text-5xl text-blue font-semibold">Portfolio</h1>
            {projects ? (projects.map(project => {
                return (
                  <div key={project.id} className="flex justify-start">
                    <Project project={project} />
                  </div>
                );
            })) : (
                <div></div>
            )} 
        </div>
    )
}