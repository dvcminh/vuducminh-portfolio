import React from "react";
import { BsGithub, BsInstagram } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="body-font relative">
      <div className="container px-5 py-8 mx-auto">
        <div className="flex flex-col text-center w-full mb-4">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-transparent bg-clip-text bg-gradient-to-r from-[#7A87FB] to-[#FFD49C]">
            Contact
          </h1>
        </div>
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <div className="flex flex-wrap -m-2">
            <div className="p-2 w-1/2">
              <div className="relative">
                <label
                  htmlFor="name"
                  className="leading-7 text-sm text-white font-normal"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-1/2">
              <div className="relative">
                <label
                  htmlFor="email"
                  className="leading-7 text-sm text-white font-normal"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <label
                  htmlFor="message"
                  className="leading-7 text-sm text-white font-normal"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                ></textarea>
              </div>
            </div>
            <div className="p-2 w-full">
              <button className="font-medium flex mx-auto text-black bg-gradient-to-r from-[#7A87FB] to-[#FFD49C] border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Submit
              </button>
            </div>
            <div className="p-2 w-full pt-8 mt-10 border-t border-gray-200 text-center">
              <a className="text-transparent bg-clip-text bg-gradient-to-r from-[#7A87FB] to-[#FFD49C] font-normal">vuducminh21052003@email.com</a>
              <p className="leading-normal my-3 text-white text-lg font-normal">
                Tan Binh District, Ho Chi Minh City
              </p>
              <span className="inline-flex">
                <a
                  href="https://www.facebook.com/profile.php?id=100016570298518"
                  className="ml-4 text-white"
                >
                  <FaFacebook />
                </a>
                <a
                  href="https://github.com/dvcminh"
                  className="ml-4 text-white"
                >
                  <BsGithub />
                </a>
                <a
                  href="https://www.instagram.com/minhwandering/"
                  className="ml-4 text-white"
                >
                  <BsInstagram />
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
