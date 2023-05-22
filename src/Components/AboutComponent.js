import { useState } from "react";
import pursuit_headshot from "../assets/pursuit_headshot.png";
import {
  AiFillLinkedin,
  AiOutlineGithub,
  AiOutlineSolution,
} from "react-icons/ai";

export default function AboutComponent() {
    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
        setShowModal(!showModal);
    };

    return (
      <div className="h-full w-full flex flex-col items-center p-40">
        <div className="bg-dark p-20 bg-opacity-80 w-9/12 h-fit rounded-3xl">
          <p className="text-blue leading-loose">
            <span className="text-primary text-2xl italic">
              Welcome to my portfolio website!
            </span>{" "}
            This platform serves as a showcase for developers to present their
            projects in an organized and professional manner. Whether you're a
            seasoned developer or just starting out, this portfolio website
            provides you with the tools to add, delete, and edit your projects
            effortlessly. With a user-friendly interface, managing your
            portfolio has never been easier. You can easily create project
            entries, providing essential details such as project title,
            description, technologies used, and image representation.
            Additionally, you have the option to include links to the GitHub
            repository and a live demo of your projects, allowing visitors to
            explore and interact with your work. As a developer, it's crucial to
            showcase your skills and demonstrate your expertise through your
            projects. This portfolio website empowers you to curate a
            personalized portfolio that accurately reflects your abilities and
            accomplishments. Keep your portfolio up to date by editing existing
            projects or adding new ones as you progress in your coding journey.
            Start building your digital presence and let your projects speak for
            themselves. Get started today and unlock the potential of your
            portfolio with our user-friendly platform. Happy coding and
            showcasing!
          </p>
        </div>
        <div className="flex flex-col items-center relative w-9/12">
          <div>
            <h2
              onClick={toggleModal}
              className="text-blue text-3xl mt-10 cursor-pointer hover:text-dark"
            >
              About the Developer
            </h2>
            <div className="flex justify-end gap-2 text-blue mt-2">
              <a href="https://www.linkedin.com/in/joshuanelsondev/" target="_blank" rel="noreferrer">
                <AiFillLinkedin
                  className="cursor-pointer hover:text-dark"
                  size={24}
                />
              </a>

              <a href="https://github.com/joshuanelsondev" target="_blank" rel="noreferrer">
                <AiOutlineGithub
                  className="cursor-pointer hover:text-dark"
                  size={24}
                />
              </a>

              <a href="https://www.linkedin.com/in/joshuanelsondev/details/featured/" target="_blank" rel="noreferrer">
                <AiOutlineSolution
                  className="cursor-pointer hover:text-dark"
                  size={24}
                />
              </a>
            </div>
          </div>

          {showModal && (
            <p className="bg-dark text-blue p-10 w-full absolute bottom-0 opacity-90 z-20 rounded-xl ">
              I am a full stack web developer fellow at Pursuit, an intensive
              12-month software engineering fellowship with a 9% acceptance
              rate. My journey in software engineering is driven by a deep
              passion for problem-solving, creativity, and engineering. <br />
              <br />I believe in the power of technology to transform the lives
              of individuals in underrepresented communities, and I am committed
              to leveraging my skills, creativity, and sense of fellowship to
              make a positive impact. <br />
              <br />
              With a genuine and open-minded approach, I have been able to
              connect with people from diverse cultures and backgrounds. I value
              the opportunity to learn from others and collaborate effectively
              within a team. <br />
              <br />
              Beyond coding, I have a love for music and play the saxophone in
              various venues across New York City. I also enjoy sharing my
              musical knowledge by teaching others. Additionally, I am dedicated
              to expanding my language skills and currently working towards
              fluency in Spanish. <br />
              <br />
              As I near the completion of my program, my goal is to contribute
              as a valuable asset to a team that embraces progress, diversity
              and inclusion, and pursues excellence. I am excited to bring my
              technical expertise, passion for problem-solving, and commitment
              to making a difference to any project or organization that values
              these qualities.
            </p>
          )}

          <img src={pursuit_headshot} alt="headshot" className={`opacity-80`} />
        </div>
      </div>
    );
}