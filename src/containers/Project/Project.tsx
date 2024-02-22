import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

interface ProjectCardType {
  img: string;
  title: string;
  description: string;
  github: string;
}
interface ProjectCardProps {
  prop: ProjectCardType[];
}
const Project = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.75 } },
  };

  const textVariants = {
    hidden: { opacity: 0, x: 300 },
    visible: { opacity: 1, x: 0, transition: { duration: 1, delay: 0.5 } },
  };

  const projectVariants = {
    hidden: { opacity: 0, x: -300 },
    visible: { opacity: 1, x: 0, transition: { duration: 1, delay: 0.5 } },
  };

  const project = [
    {
      img: "https://dummyimage.com/720x400",
      title: "SUBTITLE",
      description:
        "Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.",
      github: "https://github.com",
    },
    {
      img: "https://dummyimage.com/720x400",
      title: "SUBTITLE",
      description:
        "Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.",
      github: "https://github.com",
    },{
      img: "https://dummyimage.com/720x400",
      title: "SUBTITLE",
      description:
        "Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.",
      github: "https://github.com",
    }
  ];

  return (
    <motion.section
      className="overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h2
        className="text-white text-4xl font-bold container px-5 text-center py-4"
        variants={textVariants}
      >
        <div>
          <span className="sm:text-3xl text-2xl font-medium title-font mb-2 text-transparent bg-clip-text bg-gradient-to-r from-[#7A87FB] to-[#FFD49C]">
            Projects
          </span>{" "}
        </div>
      </motion.h2>
      <motion.p variants={projectVariants}>
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-12 mx-auto">
            <div className="flex flex-wrap -m-4 justify-center">
              <ProjectCard prop={project} />
            </div>
          </div>
        </section>
      </motion.p>
    </motion.section>
  );
};

export default Project;
