import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
// import axios from "axios";
import Project from './Project'
import { MdLibraryAdd } from 'react-icons/md'
import { RiLoader5Fill } from 'react-icons/ri'
import { projectData } from '../assets/projectData'
// const API = process.env.REACT_APP_API_URL;

export default function Projects({ setErrorPage }) {
  const [projects, setProjects] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setProjects(projectData)
    setIsLoading()
  }, [setErrorPage])

  return (
    <div className="flex flex-col items-center md:items-start">
      <h1 className="text-5xl text-primary dark:text-blue font-semibold mt-20">
        Portfolio
      </h1>
      {isLoading ? (
        <div className="w-full flex justify-center items-center mt-52 gap-2">
          <h1 className="text-primary dark:text-blue text-3xl">Loading</h1>
          <RiLoader5Fill
            className="text-primary dark:text-blue animate-spin-slow"
            size={30}
          />
        </div>
      ) : (
        <>
          {projects.map((project) => (
            <div key={project.id} className="flex justify-start">
              <Project project={project} />
            </div>
          ))}
          {projects.length === 0 && (
            <div className="mt-10 flex items-center gap-4 z-10">
              <h2 className="text-4xl text-primary dark:text-blue">
                Add Project
              </h2>
              <Link
                to={'/projects/new'}
                className="hover:bg-dark rounded-full p-2"
              >
                <MdLibraryAdd
                  className="text-primary dark:text-blue"
                  size={24}
                />
              </Link>
            </div>
          )}
        </>
      )}
    </div>
  )
}
