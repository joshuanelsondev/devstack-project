import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

export default function ProjectDetails() {
    
    const [project, setProject] = useState([]);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`${API}/projects/${id}`)
            .then((res) => {
                console.log(res.data)
                setProject(res.data)
            })
            .catch((error) => {
                console.log(error);
            })
    }, [id]);


    const deleteProject = () => {
        axios
        .delete(`${API}/project/${project.id}`)
        .then(() => {
            navigate("/projects");
        })
        .catch((error) => {
            console.log(error);
        });
    };

    return (
      <div className="z-30">
        <h1 className="text-5xl text-blue pl-10 font-semibold">
          {project.title}
        </h1>
        <img src={project.image} alt={project.title} />
        <p className="text-lg text-blue">{project.description}</p>
        <a
          href={project.github_link}
          target="_blank"
          rel="noreferrer"
          className="text-blue"
        >
          github link
        </a>
        <a
          href={project.demo_link}
          target="_blank"
          rel="noreferrer"
          className="text-blue"
        >
          demo link
        </a>
        <Link to={`/projects/${id}/edit`} className="text-blue">EDIT</Link>
      </div>
    );
}