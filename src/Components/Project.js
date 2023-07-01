import { Link } from "react-router-dom";
import {
  AiFillGithub,
  AiOutlineExport,
} from "react-icons/ai";


export default function Project({ project }) {
  
  
    return (
      <div className="min-h-96 w-full mt-10 p-8 gap-4 bg-secondary dark:bg-dark flex flex-col items-start z-10 rounded-3xl hover:shadow-lg hover:shadow-blue">
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
          className="text-3xl text-primary dark:text-blue font-semibold hover:text-primary"
        >
          {project.title}
        </Link>
        <p className="dark:text-blue text-lg">{project.description}</p>
        <ul className="flex flex-wrap justify-start gap-x-4">
          {project.tech.map((str, index) => {
            return (
              <li key={index} className="text-primary">
                {str}
              </li>
            );
          })}
        </ul>
      </div>
    );
}