import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
import ducminh_dalat from "../../assets/images/ducminh_dalat.jpg";
import ducminh_phongvan from "../../assets/images/ducminh_phongvan.jpg";
import code from "../../assets/images/code.jpg";
import football from "../../assets/images/football.jpg";
const AboutSection: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.75 } },
  };

  const textVariants = {
    hidden: { opacity: 0, x: -300 },
    visible: { opacity: 1, x: 0, transition: { duration: 1, delay: 0.5 } },
  };

  const titleVariants = {
    hidden: { opacity: 0, x: 300 },
    visible: { opacity: 1, x: 0, transition: { duration: 1, delay: 0.5 } },
  };

  return (
    <motion.section
      className="overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h2
        className="text-white text-4xl font-bold container px-5 text-center py-4"
        variants={titleVariants}
      >
        <div>
          <span className="sm:text-3xl text-2xl font-medium title-font mb-2 text-transparent bg-clip-text bg-gradient-to-r from-[#7A87FB] to-[#FFD49C]">
            About Me
          </span>{" "}
        </div>
      </motion.h2>
      <motion.p variants={textVariants} className="overflow-hidden">
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-8 mx-auto">
            <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
              <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
                <img
                  src={ducminh_phongvan}
                  alt="ducminh_phongvan"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <div className="flex-grow sm:text-left  mt-6 sm:mt-0">
                <h2 className="text-lg title-font font-semibold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-[#7A87FB] to-[#FFD49C]">
                  Hello there! I'm Daniel Vu
                </h2>
                <p className="leading-relaxed text-base text-white font-normal">
                  a passionate junior at the University of Information
                  Technology, VNU, where I am honing my skills in the dynamic
                  field of backend development.
                  <br />
                  <br />
                  As an aspiring backend developer, I am eager to embark on a
                  journey that merges my academic foundation with real-world
                  applications.
                </p>
              </div>
            </div>
            {/* phan o giua */}
            <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row-reverse flex-col ">
              <div className="flex-grow sm:text-left text-left mt-6 sm:mt-0 text-white">
                <h2 className=" text-lg title-font font-semibold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-[#7A87FB] to-[#FFD49C]">
                  Can I help you?
                </h2>
                <p className="leading-relaxed text-base font-normal">
                  I'm experienced in using Spring Boot, ReactJS, Tailwind, MySQL and MongoDB. I'm also familiar with other technologies such as
                  TypeScript, GraphQL, and Docker. I'm always open to learning
                  new technologies and working with new people.
                  <br />
                  <br />
                  My style of coding is clean and organized. I always follow the
                  best practices and write clean code. I'm also familiar with
                  Git and GitHub. I always write detailed commit messages and
                  follow the best practices in version control.
                  <br />
                  <br />
                  I'm also familiar with Agile methodologies and have experience
                  working in an Agile environment. I'm comfortable working in a
                  team and can manage my time effectively.
                </p>
              </div>
              <div className="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
                <img
                  src={code}
                  alt="code"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
            </div>
            {/* phan o duoi */}
            <div className="flex items-center lg:w-3/5 mx-auto sm:flex-row flex-col">
              <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
                <img
                  src={football}
                  alt="football"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <div className="flex-grow sm:text-left text-left mt-6 sm:mt-0">
                <h2 className="text-lg title-font font-semibold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-[#7A87FB] to-[#FFD49C]">
                  A few words about me
                </h2>
                <p className="leading-relaxed text-base text-white font-normal">
                  I am currently pursuing my Software Engineering at the
                  University of Information Technology. My interests include
                  playing soccer, reading books, cooking, and learning new technologies.
                  <br />
                  <br />
                  My goal is to become a senior developer and work on
                  challenging projects. Welcome to my portfolio, where you can
                  find out more about me and my work.
                </p>
              </div>
            </div>
            <div className="flex justify-center mt-5">
              <Link
                to={"/contact"}
                className="inline-flex text-black bg-gradient-to-r from-[#7A87FB] to-[#FFD49C] border-0 py-2 px-6 focus:outline-none font-normal rounded text-lg"
              >
                Contact
              </Link>
              <Link
                to={"/project"}
                className="flex flex-row items-center text-white bg-transparent border-s-[#8994FF] border-t-[#A1A4F9] border-r-[#A49FDD] border-b-[#FFD49C] border-2 bg-[#1C1C1C] py-2 px-4 focus:outline-none font-normal rounded text-lg ml-5"
              >
                Projects
                <FaArrowRight className="ml-2" />
              </Link>
            </div>
          </div>
        </section>
      </motion.p>
    </motion.section>
  );
};

export default AboutSection;
