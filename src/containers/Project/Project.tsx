import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import cdm from "../../assets/images/cdm.png";
import stylash from "../../assets/images/stylash.png";
import portfolio from "../../assets/images/portfolio.png";
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
      img: cdm,
      title: "CDM",
      description:
        "CDM is a car dealership management system that provide a platform for car dealers and staffs to manage their inventory, sales, and customer data. It also provides a platform for customers to view the available cars and make a purchase.",
      github: "https://github.com/dvcminh/CDM",
    },
    {
      img: stylash,
      title: "Stylash",
      description:
        "Stylash is a e-commerce website that sells beauty products. It provides a platform for customers to view and purchase beauty products. Besides, it also include a platform for the admin to manage the inventory and sales data",
      github: "https://github.com/dvcminh/StyLash-Frontend",
    },{
      img: portfolio,
      title: "Portfolio",
      description:
        "This is my portfolio website. It provides a platform for me to showcase my projects and skills. It also provides a platform for the visitors to view my projects and contact me.",
      github: "https://github.com/dvcminh/minhdeptrai_portfolio",
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
