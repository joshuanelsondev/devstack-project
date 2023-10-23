import { useState } from "react";
// import pursuit_headshot from "../assets/pursuit_headshot.png";
import {
  AiFillLinkedin,
  AiOutlineGithub,
  AiOutlineSolution,
  AiOutlineCloseSquare,
} from "react-icons/ai";

export default function AboutComponent() {

    return (
      <div className={`h-full w-full flex flex-col items-center relative`}>
        <div className="flex flex-col text-center justify-center items-center relative w-full h-full px-40">
          <div className="flex items-center justify-center">
            <div className="flex flex-col gap-4 bg-secondary dark:bg-dark pt-8 px-8 min-w-[300px] h-fit w-10/12 rounded-3xl z-60">
              <h2 className="text-primary dark:text-blue text-6xl">
                Joshua Nelson
              </h2>
              <p className="text-dark dark:text-blue text-lg whitespace-break-spaces">
                I am a full stack web developer fellow at Pursuit, an intensive
                12-month software engineering fellowship with a 9% acceptance
                rate. My journey in software engineering is driven by a deep
                passion for problem-solving, creativity, and engineering. <br />
                <br />I believe in the power of technology to transform the
                lives of individuals in underrepresented communities, and I am
                committed to leveraging my skills, creativity, and sense of
                fellowship to make a positive impact. <br />
                <br />
                With a genuine and open-minded approach, I have been able to
                connect with people from diverse cultures and backgrounds. I
                value the opportunity to learn from others and collaborate
                effectively within a team. <br />
                <br />
                Beyond coding, I have a love for music and play the saxophone in
                various venues across New York City. I also enjoy sharing my
                musical knowledge by teaching others. Additionally, I am
                dedicated to expanding my language skills and currently working
                towards fluency in Spanish. <br />
              </p>
              <div className="flex justify-center gap-10 text-blue items-center">
                <div className="flex flex-col items-center">
                  <a
                    className="peer"
                    href="https://www.linkedin.com/in/joshuanelsondev/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiFillLinkedin
                      className=" peer cursor-pointer text-primary rounded-full dark:text-blue hover:bg-secondary hover:dark:bg-dark"
                      size={24}
                    />
                  </a>
                  <p className="text-primary dark:text-blue font-semibold invisible peer-hover:visible z-40">
                    LinkedIn
                  </p>
                </div>
                <div className="flex flex-col items-center ">
                  <a
                    className="peer"
                    href="https://github.com/joshuanelsondev"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiOutlineGithub
                      className=" cursor-pointer text-primary rounded-full dark:text-blue hover:bg-secondary hover:dark:bg-dark"
                      size={24}
                    />
                  </a>
                  <p className="text-primary dark:text-blue font-semibold invisible peer-hover:visible z-40">
                    GitHub
                  </p>
                </div>
                <div className="flex flex-col items-center ">
                  <a
                    className="peer"
                    href="https://www.linkedin.com/in/joshuanelsondev/details/featured/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiOutlineSolution
                      className=" cursor-pointer text-primary rounded-full dark:text-blue hover:bg-secondary hover:dark:bg-dark"
                      size={24}
                    />
                  </a>
                  <p className="text-primary dark:text-blue font-semibold invisible peer-hover:visible z-40">
                    Resume
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}