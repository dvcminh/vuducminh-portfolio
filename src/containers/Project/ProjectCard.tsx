import React from "react";
import { FaGithub } from "react-icons/fa";

interface ProjectCardType {
  img: string;
  title: string;
  description: string;
  github: string;
}

interface ProjectCardProps {
  prop: ProjectCardType[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({ prop }) => {
  return (
    <div className="flex flex-wrap justify-center">
      {prop.map((data: ProjectCardType) => {
        return (
          <div className="xl:w-1/4 md:w-1/2 p-4 font-light" key={data.title}>
            <div className="bg-[#151515] p-6 rounded-lg flex flex-col h-full">
              <img
                className="h-40 rounded w-full object-cover object-center mb-6"
                src={data.img}
                alt="content"
              />
              <h3 className="tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-[#7A87FB] to-[#FFD49C] text-lg font-semibold title-font text-center">
                {data.title}
              </h3>
              <p className="leading-relaxed text-base text-white my-3 flex-grow">
                {data.description}
              </p>
              <div className="flex justify-center mt-auto">
                <a href={data.github}>
                  <button className="inline-flex items-center bg-gradient-to-r from-[#7A87FB] to-[#FFD49C] border-0 py-2 px-3 focus:outline-none rounded-full text-base md:mt-0 text-black font-medium">
                    <FaGithub className="mr-2" />
                    Github
                  </button>
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProjectCard;
