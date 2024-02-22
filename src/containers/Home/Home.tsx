import Type from "./Type";
import img from "../../assets/images/ducminh_lienchihoi.jpg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.4 } },
  };

  const textVariants = {
    hidden: { opacity: 0, x: -300 },
    visible: { opacity: 1, x: 0, transition: { duration: 1, delay: 0.4 } },
  };

  const imgVariants = {
    hidden: { opacity: 0, x: 500 },
    visible: { opacity: 1, x: 0, transition: { duration: 1, delay: 0.4 } },
  };
  return (
    <motion.section
      className="overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.p variants={textVariants}>
      <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-7xl font-bold text-3xl text-transparent bg-clip-text bg-gradient-to-r from-[#7A87FB] to-[#FFD49C]">
            Hi👋🏻
          </h1>
          <p className="leading-relaxed text-5xl text-white">
            I'm
          <strong className=" text-7xl text-transparent bg-clip-text bg-gradient-to-r from-[#7A87FB] to-[#FFD49C]"> Minh Vu Duc</strong>
          </p>
          <div className="mb-8 leading-relaxed text-5xl text-white">
            <Type/>
          </div>
          <div className="flex justify-center">
            <Link to={"/contact"} className="inline-flex text-black bg-gradient-to-r from-[#7A87FB] to-[#FFD49C] border-0 py-2 px-6 focus:outline-none font-normal rounded text-lg">
              Contact
            </Link>
            <Link to={"/about"} className="inline-flex text-white bg-transparent border-s-[#8994FF] border-t-[#A1A4F9] border-r-[#A49FDD] border-b-[#FFD49C] border-2 bg-[#1C1C1C] py-2 px-6 focus:outline-none font-normal rounded text-lg ml-5">
              About
            </Link>
          </div>
        </div>
        <motion.div
          className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6"
          variants={imgVariants}
          >
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src={img}
          />
        </div>
          </motion.div>
      </div>
    </section>
      </motion.p>

    </motion.section>

  );
};

export default Home;