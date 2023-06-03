import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import projectCartoon from "../assets/projectCartoon.png";


const API = process.env.REACT_APP_API_URL;

export default function EditProject() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [editProject, setEditProject] = useState({
    title: "",
    description: "",
    tech: "",
    image: "",
    github_link: "",
    demo_link: "",
    is_favorite: false,
    updated_on: "",
  });
  const [showModal, setShowModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    axios
      .get(`${API}/projects/${id}`)
      .then((res) => {
        console.log(res.data);
        setEditProject(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const updateProject = (updatedProject) => {
    axios
      .put(`${API}/projects/${id}`, updatedProject)
      .then(() => {
        navigate(`/projects/${id}`);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleFormChange = (event) => {
    const { id, value } = event.target;
    setEditProject({ ...editProject, [id]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
        editProject.title === "" ||
        editProject.description === "" ||
        editProject.tech === ""
      ) {
        setErrorMessage("*Please enter all required information.");
      } else { 
        updateProject(editProject);
      }
   
  };

  const deleteProject = () => {
    axios
      .delete(`${API}/projects/${editProject.id}`)
      .then(() => {
        navigate("/projects");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="h-full w-full flex justify-center pb-20">
      <div className="bg-gradient-to-r from-dark to-primary rounded-xl w-8/12 h-fit mt-24 flex flex-col items-start p-10 pl-20 gap-4 shadow-xl shadow-dark">
        <h1 className="text-blue text-4xl font-bold">Add a Project</h1>
        {errorMessage && <p className="text-red">{errorMessage}</p>}
        <div className="flex">
          <form className="flex flex-col items-start w-full gap-10 z-10 text-blue">
            <div className="flex flex-col w-9/12">
              <label
                className="text-blue text-md font-semibold"
                htmlFor="title"
              >
                Title*
              </label>
              <input
                onChange={handleFormChange}
                id="title"
                type="text"
                className="bg-[transparent] border border-primary rounded-lg focus:outline-none focus:border-blue pl-4"
                value={editProject.title}
                required
              />
            </div>
            <div className="flex flex-col w-9/12">
              <label
                className="text-blue text-md font-semibold"
                htmlFor="description"
              >
                Description*
              </label>
              <textarea
                onChange={handleFormChange}
                id="description"
                rows={4}
                cols={50}
                placeholder="Project Description..."
                className="bg-[transparent] border border-primary rounded-lg focus:outline-none focus:border-blue pl-4"
                value={editProject.description}
                required
              />
            </div>
            <div className="flex flex-col w-9/12">
              <label className="text-blue text-md font-semibold" htmlFor="tech">
                Technologies Used*
              </label>
              <input
                onChange={handleFormChange}
                id="tech"
                type="text"
                className="bg-[transparent] border border-primary rounded-lg focus:outline-none focus:border-blue pl-4"
                value={editProject.tech}
                placeholder="JavaScript, HTML, CSS"
                required
              />
            </div>
            <div className="flex flex-col w-9/12">
              <label
                className="text-blue text-md font-semibold"
                htmlFor="image"
              >
                Image Url
              </label>
              <input
                onChange={handleFormChange}
                id="image"
                type="url"
                className="bg-[transparent] border border-primary rounded-lg focus:outline-none focus:border-blue pl-4"
                value={editProject.image}
              />
            </div>
            <div className="flex flex-col w-9/12">
              <label
                className="text-blue text-md font-semibold"
                htmlFor="github_link"
              >
                Link to Repo
              </label>
              <input
                onChange={handleFormChange}
                id="github_link"
                type="url"
                className="bg-[transparent] border border-primary rounded-lg focus:outline-none focus:border-blue pl-4"
                value={editProject.github_link}
              />
            </div>
            <div className="flex flex-col w-9/12">
              <label
                className="text-blue text-md font-semibold"
                htmlFor="demo_link"
              >
                Demo Link
              </label>
              <input
                onChange={handleFormChange}
                id="demo_link"
                type="url"
                className="bg-[transparent] border border-primary rounded-lg focus:outline-none focus:border-blue pl-4"
                value={editProject.demo_link}
              />
            </div>
            <div className="flex gap-2">
              <label
                className="text-blue text-md font-semibold"
                htmlFor="is_favorite"
              >
                Add to Favorites
              </label>
              <input
                onChange={handleFormChange}
                id="is_favorite"
                type="checkbox"
                value={editProject.is_favorite}
                className="cursor-pointer"
              />
            </div>
          </form>
          <div className="flex flex-col items-end justify-between">
            <img
              src={projectCartoon}
              alt="Cartoon of people constructing a project"
              className="w-full h-auto"
            />
            <div className="flex gap-4">
              <button
                onClick={toggleModal}
                className="text-primary font-semibold bg-secondary cursor-pointer z-30 p-2 rounded-xl w-20 h-auto hover:bg-dark hover:text-secondary"
              >
                Delete
              </button>
              <button
                onClick={handleSubmit}
                className="text-primary font-semibold bg-secondary cursor-pointer z-30 p-2 rounded-xl w-20 h-auto hover:bg-dark hover:text-secondary"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm bg-transparent z-20">
          <div className="bg-dark h-40 w-96 rounded-xl flex flex-col items-center justify-center gap-4">
            <p className="text-blue text-lg font-bold">
              Are you sure you want to delete this project?
            </p>
            <div className="flex gap-4">
              <button
                onClick={toggleModal}
                className="text-blue font-bold bg-primary p-1 rounded-lg hover:outline outline-blue"
              >
                cancel
              </button>
              <button
                onClick={deleteProject}
                className="text-blue font-bold bg-red p-1 rounded-lg hover:outline outline-blue"
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