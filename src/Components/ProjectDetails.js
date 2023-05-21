import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

export default function ProjectDetails() {
    
    const [project, setProject] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        setIsLoading(true);

        axios
        .get(`${API}/projects/${id}`)
        .then((res) => {
            setProject(res.data);
            setIsLoading(false);
        })
        .catch((error) => {
            console.log(error.response.status);
            if (error.response.status === 404) {
              navigate('*')
            }
            setIsLoading(false);
        })
    }, [id]);

    if (isLoading) {
      return <div className="text-blue text-2xl">Loading...</div>;
    }

    const deleteProject = () => {
        axios
        .delete(`${API}/projects/${project.id}`)
        .then(() => {
            navigate("/projects");
        })
        .catch((error) => {
            console.log(error);
        });
    };

    const toggleModal = () => {
        setShowModal(!showModal);
    }

    return (
      <div>
        <h1 className="text-5xl text-blue pl-10 font-semibold">
          {project.title}
        </h1>
        <img src={project.image} alt={project.title} />
        <p className="text-lg text-blue">{project.description}</p>
        <ul className="flex">
          {project.tech.map((str, index) => {
            return (
              <li key={index} className="text-blue">
                {str}
              </li>
            );
          })}
        </ul>
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
        <Link to={`/projects/${id}/edit`} className="text-blue">
          EDIT
        </Link>
        <button onClick={toggleModal} className="text-blue">
          DELETE
        </button>
        {showModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-dark bg-opacity-50">
            <div className="bg-dark h-40 w-2/5 rounded-xl flex flex-col items-center justify-center gap-4">
              <p className="text-blue text-lg font-bold">
                Are you sure you want to delete this project?
              </p>
              <div className="flex gap-4">
                <button onClick={toggleModal} className="text-blue font-bold bg-primary p-1 rounded-lg hover:outline outline-blue">cancel</button>
                <button onClick={deleteProject} className="text-blue font-bold bg-red p-1 rounded-lg hover:outline outline-blue">Delete</button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
}