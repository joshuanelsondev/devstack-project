import { Link } from 'react-router-dom'
import { AiFillGithub, AiOutlineExport } from 'react-icons/ai'

export default function Project({ project }) {
  return (
    <div className="min-h-96 w-full mt-10 p-8 gap-4 bg-secondary dark:bg-dark flex flex-col items-start z-10 rounded-3xl hover:shadow-lg hover:shadow-primary hover:dark:shadow-blue">
      <div>
        <div className="flex gap-4">
          <a
            href={project.github_link}
            target="_blank"
            rel="noreferrer"
            className="text-primary dark:text-blue hover:text-dark hover:dark:text-primary"
          >
            <AiFillGithub size={20} />
          </a>
          <a
            href={project.demo_link}
            target="_blank"
            className="text-primary dark:text-blue hover:text-dark hover:dark:text-primary"
            rel="noreferrer"
          >
            <AiOutlineExport size={20} />
          </a>
        </div>
      </div>
      <Link
        to={`/projects/${project.id}`}
        className="text-3xl text-primary dark:text-blue font-semibold"
      >
        <p className="hover:text-dark hover:dark:text-primary">
          {project.title}
        </p>
      </Link>
      <div className="flex flex-col lg:flex-row gap-4">
        <p className="text-dark dark:text-blue text-lg">
          {project.description}
        </p>
        <a
          href={project.image}
          target="_blank"
          rel="noreferrer"
          className="min-w-[300px] w-[300px] max-h-[200px] h-[200px]"
        >
          <img
            src={project.image}
            alt={project.title}
            className="rounded hover:shadow-md shadow-sm hover:shadow-primary min-w-[300px] w-[300px] max-h-[200px] h-[200px]"
          />
        </a>
      </div>
      <ul className="flex flex-wrap justify-start gap-x-4">
        {project.tech.map((str, index) => {
          return (
            <li key={index} className="text-primary">
              {str}
            </li>
          )
        })}
      </ul>
    </div>
  )
}
