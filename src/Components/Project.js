import { Link } from "react-router-dom";
import {
  AiFillGithub,
  AiOutlineExport,
} from "react-icons/ai";


export default function Project({ project }) {
  
  
    return (
      <div className="min-h-96 max-w-9/12 min-w-fit mt-20 p-16 gap-4 bg-dark flex flex-col items-start z-10 rounded-3xl hover:shadow-lg hover:shadow-blue">
        <div>
          <div className="flex gap-4">
            <a href={project.github_link} target="_blank" rel="noreferrer" className="text-blue hover:text-primary">
              <AiFillGithub size={20} />
            </a>
            <a href={project.demo_link} target="_blank" className="text-blue hover:text-primary" rel="noreferrer">
              <AiOutlineExport size={20} />
            </a>
          </div>
        </div>
        <Link to={`/projects/${project.id}`} className="text-3xl text-blue font-semibold hover:text-primary">
          {project.title}
        </Link>
        <p className="text-blue text-lg leading-loose">{project.description}</p>
        <ul className="flex gap-10">
          {project.tech.map((str, index) => {
            return <li key={index} className="text-primary">{str}</li>;
          })}
        </ul>
      </div>
    );
}