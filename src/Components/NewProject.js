import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import projectCartoon from "../assets/projectCartoon.png";


const API = process.env.REACT_APP_API_URL;

export default function NewProject() {
    const [newProject, setNewProject] = useState({
        title: "",
        description: "",
        tech: "",
        image: "",
        github_link: "",
        demo_link: "",
        is_favorite: false,
        created_on: ""
    });

    const [errorMessage, setErrorMessage] = useState("");

    const navigate = useNavigate();

    const handleFormChange = (event) => {
        const { id, type, checked, value } = event.target;
        if (type === 'checkbox') {
            setNewProject({ ...newProject, [id]: checked })
        } else {
            setNewProject({ ...newProject, [id]: value});
        }
    };

    const handleSubmit = (event) => {
      event.preventDefault();

      const techArray = newProject.tech.split(",").map((tech) => tech.trim());

      if (
        newProject.title === "" ||
        newProject.description === "" ||
        newProject.tech === ""
      ) {
        setErrorMessage("*Please enter all required information.");
      } else {
        const payload = {
          ...newProject,
          tech: techArray,
          is_favorite: newProject.is_favorite === "true",
          created_on: new Date().toISOString(),
        };

        axios
          .post(`${API}/projects`, payload)
          .then(() => {
            navigate("/projects");
          })
          .catch((error) => {
            console.log(error);
          });
      }
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
                  value={newProject.title}
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
                  value={newProject.description}
                  required
                />
              </div>
              <div className="flex flex-col w-9/12">
                <label
                  className="text-blue text-md font-semibold"
                  htmlFor="tech"
                >
                  Technologies Used*
                </label>
                <input
                  onChange={handleFormChange}
                  id="tech"
                  type="text"
                  className="bg-[transparent] border border-primary rounded-lg focus:outline-none focus:border-blue pl-4"
                  value={newProject.tech}
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
                  value={newProject.image}
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
                  value={newProject.github_link}
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
                  value={newProject.demo_link}
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
                  value={newProject.is_favorite}
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
              <button
                onClick={handleSubmit}
                className="text-primary font-semibold bg-secondary cursor-pointer p-2 rounded-xl w-20 z-30 h-auto hover:bg-dark hover:text-secondary"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    );
}