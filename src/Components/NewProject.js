import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

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
      <div className="flex justify-center mx-4 pt-28 pb-10">
        <form className="flex flex-col items-center gap-6 sm:gap-8 z-10 text-blue bg-gradient-to-r from-dark to-transparent h-fit w-11/12 sm:w-[600px] p-8 sm:px-20 mb-10 rounded-xl shadow-xl shadow-primary">
          <h1 className="text-blue text-4xl font-bold self-center">Add a Project</h1>
          {errorMessage && <p className="text-red">{errorMessage}</p>}
          <div className="flex flex-col w-full">
            <label className="text-blue text-md font-semibold" htmlFor="title">
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
          <div className="flex flex-col w-full">
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
          <div className="flex flex-col w-full">
            <label className="text-blue text-md font-semibold" htmlFor="tech">
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
          <div className="flex flex-col w-full">
            <label className="text-blue text-md font-semibold" htmlFor="image">
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
          <div className="flex flex-col w-full">
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
          <div className="flex flex-col w-full">
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
          <div className="flex gap-2 w-full">
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
          <div className="flex w-full justify-end">
            <button
              onClick={handleSubmit}
              className="text-primary font-semibold bg-secondary cursor-pointer p-2 rounded-xl w-20 z-30 h-auto hover:bg-dark hover:text-secondary"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    );
}