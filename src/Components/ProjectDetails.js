import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { MdModeEdit, MdDelete } from "react-icons/md";
import { AiFillGithub, AiOutlineExport } from "react-icons/ai";
import { RiLoader5Fill } from "react-icons/ri";
const { projectData } = require("../assets/projectData");



const API = process.env.REACT_APP_API_URL;

export default function ProjectDetails() {
    
    const [project, setProject] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        setIsLoading(false)
        let currentProject = projectData.find(project => project.id === id)
        setProject(currentProject)
    }, [id, navigate]);

    if (isLoading) {
      return (
        <div className="flex justify-center items-center mt-52 gap-2">
          <h1 className="text-blue text-3xl">Loading</h1>
          <RiLoader5Fill className="text-blue animate-spin-slow" size={30} />
        </div>
      );
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
      <div className="flex flex-col gap-10 p-10 bg-secondary  dark:bg-dark rounded-xl font-semibold shadow-xl shadow-primary">
        <h1 className="text-5xl text-primary dark:text-blue font-semibold">
          {project.title}
        </h1>
        <a href={project.image} target="_blank" rel="noreferrer">
          <img
            src={project.image}
            alt={project.title}
            className="rounded shadow-lg shadow-primary w-full h-auto"
          />
        </a>
        <p className="text-lg text-dark font-normal dark:text-blue leading-loose">
          {project.description}
        </p>
        <ul className="flex gap-x-4 flex-wrap">
          {project.tech.map((str, index) => {
            return (
              <li key={index} className="text-primary">
                {str}
              </li>
            );
          })}
        </ul>

        <div className="flex justify-between items-center">
          <div className="flex gap-4">
            <a
              href={project.github_link}
              target="_blank"
              rel="noreferrer"
              className="text-blue"
            >
              <AiFillGithub
                className="p-2 text-primary dark:text-blue hover:text-dark hover:dark:text-primary rounded-full"
                size={40}
              />
            </a>
            <a
              href={project.demo_link}
              target="_blank"
              rel="noreferrer"
              className="text-blue"
            >
              <AiOutlineExport
                className="p-2 text-primary dark:text-blue hover:text-dark hover:dark:text-primary  rounded-full"
                size={40}
              />
            </a>
          </div>
          <div className="flex items-center relative">
            <Link
              to={`/projects/${id}/edit`}
              className="text-blue flex flex-col gap-2 items-center"
            >
              <MdModeEdit
                className="peer text-primary dark:text-blue hover:text-dark hover:dark:text-primary  rounded-full p-2"
                size={40}
              />
            </Link>
            <button
              onClick={toggleModal}
              className="flex flex-col items-center text-blue gap-2"
            >
              <MdDelete
                className="peer text-primary dark:text-blue hover:text-dark hover:dark:text-primary  rounded-full p-2"
                size={40}
              />
            </button>
          </div>
        </div>

        {showModal && (
          <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm bg-transparent">
            <div className="bg-secondary shadow-lg shadow-dark dark:shadow-primary dark:bg-dark h-40 w-96 rounded-xl flex flex-col items-center justify-center gap-4">
              <p className="text-dark dark:text-blue text-lg font-bold text-center">
                Are you sure you want to delete this project?
              </p>
              <div className="flex gap-4">
                <button
                  onClick={toggleModal}
                  className="text-blue font-bold bg-primary p-1 rounded-lg hover:scale-90 hover:outline outline-dark dark:outline-blue"
                >
                  Cancel
                </button>
                <button
                  onClick={deleteProject}
                  className="text-blue font-bold bg-red p-1 rounded-lg hover:scale-90 hover:outline outline-dark dark:outline-blue"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
}
