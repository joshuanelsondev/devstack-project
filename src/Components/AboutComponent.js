import { useState } from "react";
import pursuit_headshot from "../assets/pursuit_headshot.png";
import {
  AiFillLinkedin,
  AiOutlineGithub,
  AiOutlineSolution,
  AiOutlineCloseSquare,
} from "react-icons/ai";

export default function AboutComponent() {
    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
        setShowModal(!showModal);
    };

    return (
      <div
        className={`h-full w-full flex flex-col items-center relative bg-imageAbout bg-no-repeat bg-bottom ${
          showModal && "bg-none"
        }`}
      >
        <div className="flex flex-col items-center relative w-full h-full">
          <div className={`${showModal && "invisible"}`}>
            <h2
              onClick={toggleModal}
              className="text-primary dark:text-blue text-6xl mt-40 mb-5 cursor-pointer hover:text-dark hover:dark:text-dark"
            >
              About the Developer
            </h2>
            <div className="flex justify-center gap-10 text-blue mt-2">
              <div className="flex flex-col items-center gap-2">
                <a
                  className="peer"
                  href="https://www.linkedin.com/in/joshuanelsondev/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiFillLinkedin
                    className="p-2 peer cursor-pointer text-primary rounded-full dark:text-blue hover:bg-secondary hover:dark:bg-dark"
                    size={40}
                  />
                </a>
                <p className="text-primary dark:text-blue font-semibold invisible peer-hover:visible z-40">
                  LinkedIn
                </p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <a
                  className="peer"
                  href="https://github.com/joshuanelsondev"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiOutlineGithub
                    className="p-2 cursor-pointer text-primary rounded-full dark:text-blue hover:bg-secondary hover:dark:bg-dark"
                    size={40}
                  />
                </a>
                <p className="text-primary dark:text-blue font-semibold invisible peer-hover:visible z-40">
                  GitHub
                </p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <a
                  className="peer"
                  href="https://www.linkedin.com/in/joshuanelsondev/details/featured/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiOutlineSolution
                    className="p-2 cursor-pointer text-primary rounded-full dark:text-blue hover:bg-secondary hover:dark:bg-dark"
                    size={40}
                  />
                </a>
                <p className="text-primary dark:text-blue font-semibold invisible peer-hover:visible z-40">
                  Resume
                </p>
              </div>
            </div>
          </div>
        </div>
        {showModal && (
          <div className="flex flex-col gap-4 bg-secondary dark:bg-dark mt-4 p-8 min-w-[300px] w-11/12 md:w-8/12 h-fit rounded-3xl absolute top-40 z-60">
            <AiOutlineCloseSquare
              onClick={toggleModal}
              className="text-dark dark:text-blue cursor-pointer hover:text-primary hover:dark:text-primary"
              size={20}
            />
            <h2 className="text-3xl text-primary text-center">Joshua Nelson</h2>
            <p className="text-dark dark:text-blue text-lg whitespace-break-spaces">
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
            </p>
          </div>
        )}
      </div>
    );
}