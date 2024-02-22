import React from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
const Navbar = () => {
  return (
    <header className="text-gray-600 body-font mx-10">
      <div className="container mx-auto flex flex-wrap p-4 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-2 md:mb-0">
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg> */}
          <svg
            width="33"
            height="33"
            viewBox="0 0 33 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.9375 37C9.41935 37 2.5 30.101 2.5 21.608V7C11.0181 7 17.9375 13.899 17.9375 22.392V37Z"
              fill="url(#paint0_linear_1_1527)"
            />
            <path
              d="M19.2744 24.561V16.7997C19.2744 11.3902 23.6776 7 29.103 7V14.7613C29.103 20.1707 24.6998 24.561 19.2744 24.561Z"
              fill="url(#paint1_linear_1_1527)"
            />
            <path
              d="M41.5002 36.9995H30.2301C24.1756 36.9995 19.2744 32.1128 19.2744 26.0762H30.5446C36.599 26.0762 41.5002 30.9629 41.5002 36.9995Z"
              fill="url(#paint2_linear_1_1527)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_1_1527"
                x1="2.5"
                y1="22"
                x2="17.9375"
                y2="22"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#7A87FB" />
                <stop offset="1" stop-color="#FFD49C" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_1_1527"
                x1="19.2744"
                y1="15.7805"
                x2="29.103"
                y2="15.7805"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#7A87FB" />
                <stop offset="1" stop-color="#FFD49C" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_1_1527"
                x1="19.2744"
                y1="31.5378"
                x2="41.5002"
                y2="31.5378"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#7A87FB" />
                <stop offset="1" stop-color="#FFD49C" />
              </linearGradient>
            </defs>
          </svg>

          <span className="ml-3 text-2xl mt-2 text-transparent bg-clip-text bg-gradient-to-r from-[#7A87FB] to-[#FFD49C]">Daniel Vu</span>
        </a>
        <div>
          
        </div>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center text-white rounded-full border-s-[#8994FF] border-t-[#A1A4F9] border-r-[#A49FDD] border-b-[#FFD49C] border-2 p-2 bg-[#1C1C1C]">
          <Link
            to={"/"}
            className="p-2 mr-5 bg-[#292929] rounded-full font-normal"
          >
            {" "}
            <FaHome className="items-center hover:text-gray-300 hover:border-b  border-b-[#A49FDD] box-border"/>
          </Link>
          <Link to={"/about"} className="mr-5 hover:text-gray-300 hover:border-b font-normal border-b-[#A49FDD]">About</Link>
          <Link to={"/project"} className="mr-5 hover:text-gray-300 hover:border-b font-normal border-b-[#A49FDD]">Project</Link>
          <Link to={"/resume"} className="mr-5 hover:text-gray-300 hover:border-b font-normal border-b-[#A49FDD]">Resume</Link>
          <Link to={"/contact"} className="hover:text-gray-300 hover:border-b font-normal border-b-[#A49FDD]">Contact</Link>
        </nav>
        <Link to={"/contact"} className="inline-flex items-center bg-gradient-to-r from-[#7A87FB] to-[#FFD49C] border-0 py-2 px-3 focus:outline-none hover:bg-gray-200 rounded-full text-base md:mt-0 text-black font-medium">
          Hire Me
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
