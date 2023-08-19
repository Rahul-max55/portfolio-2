import React from "react";
import profile from "../Assets/dark-about.jpg";
import { Link } from "react-router-dom";
import { ImCalendar, ImDownload3 } from "react-icons/im";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div 
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -300, opacity: 0 }}
    
    className="bg-[#222] h-fit text-white">
      <div className=" p-10 text-4xl font-extrabold flex items-center justify-center">
        <h1>ABOUT </h1>
        <span className="text-yellow-400 mx-2">ME</span>
      </div>
      <div className="flex pb-10 justify-center items-center text-center ">
        <hr className="bg-yellow-400 w-20 h-1" />
        <span className="px-4">
          I DESIGN AND CODE BEAUTIFUL THINGS, AND I LOVE WHAT I DO.
        </span>
        <hr className="bg-yellow-400 w-20 h-1" />
      </div>

      <div className="w-[85vw] md:w-[75vw] text-white  m-auto h-[150vh] xl:h-[75vh]  flex justify-between items-center xl:flex-row flex-col">
        <div className="md:w-fit h-[52vh] lg:h-full  relative">
          <div className="w-full h-full md:h-full top-5 left-5 md:top-10 md:left-10 absolute border-[8px] border-yellow-500"></div>
          <img src={profile} alt="photo" className="relative z-10" />
        </div>
        <div className="w-full md:w-4/5 xl:w-1/2  md:m-auto flex justify-center items-center h-full ">
          <ul className="w-11/12 text-sm md:text-base md:w-5/6 h-5/6   flex items-center justify-evenly">
            <div className=" h-full flex flex-col justify-evenly items-start">
              <span>First Name: Rahul</span>
              <span>First Name: Rahul</span>
              <span>First Name: Rahul</span>
              <span>First Name: Rahul</span>
              <span>First Name: Rahul</span>
              <span>First Name: Rahul</span>
              <Link
                to="/about"
                className="flex px-1 py-2 md:px-5 md:py-2 items-center justify-center bg-yellow-500 transition-colors text-sm md:text-base xl:text-base font-medium text-white space-x-2 rounded-full shadow-lg border-2  hover:bg-transparent"
              >
                <ImDownload3 /> <span>Downlaod My CV</span>
              </Link>
            </div>
            <div className=" h-full  flex flex-col justify-evenly items-start">
              <span>First Name: Rahul</span>
              <span>First Name: Rahul</span>
              <span>First Name: Rahul</span>
              <span>First Name: Rahul</span>
              <span>First Name: Rahul</span>
              <span>First Name: Rahul</span>
              <Link
                to="/about"
                className="flex px-1 invisible py-2 md:px-5 md:py-2 items-center justify-center bg-yellow-500 transition-colors text-sm md:text-base xl:text-base font-medium text-white space-x-2 rounded-full shadow-lg border-2  hover:bg-transparent"
              >
                <ImDownload3 /> <span>Downlaod My CV</span>
              </Link>
            </div>
          </ul>
        </div>
      </div>
      {/* Upper section  */}

      {/* Experience Section */}

      <div className="w-10/12 m-auto flex-col lg:flex-row lg:pt-20
       flex justify-around items-center  bg-[#222]">
        <div className="w-full md:w-11/12 lg:w-1/2 py-4 flex justify-between flex-col items-start">
          <h2 className="text-2xl  text-white font-semibold py-4">
            EXPERIENCE
          </h2>
          <ul className=" w-10/12 pb-2 border-l-4 space-x-3 border-yellow-400 min-h-44 ">
            <span></span>
            <li className="flex items-center ">
              <ImCalendar className="mr-2" /> 2017-2019
            </li>
            <li className="text-xl my-2">
              WEB DESIGNER - <span className="font-medium">ENVATO</span>
            </li>
            <li className="mb-4">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt saddddddddddddddddddd laoreet diam
              nonummy.
            </li>
          </ul>
          <ul className=" w-10/12 pb-2 border-l-4 space-x-3 border-yellow-400 min-h-44 ">
            <span></span>
            <li className="flex items-center ">
              <ImCalendar className="mr-2" /> 2017-2019
            </li>
            <li className="text-xl my-2">
              WEB DESIGNER - <span className="font-medium">ENVATO</span>
            </li>
            <li className="mb-4">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt saddddddddddddddddddd laoreet diam
              nonummy.
            </li>
          </ul>
          <ul className=" w-10/12 pb-2 border-l-4 space-x-3 border-yellow-400 min-h-44 ">
            <span></span>
            <li className="flex items-center ">
              <ImCalendar className="mr-2" /> 2017-2019
            </li>
            <li className="text-xl my-2">
              WEB DESIGNER - <span className="font-medium">ENVATO</span>
            </li>
            <li>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt saddddddddddddddddddd laoreet diam
              nonummy.
            </li>
          </ul>
        </div>

        <div className="w-full md:w-11/12 lg:w-1/2 py-4  flex justify-between flex-col items-start">
          <h2 className="text-2xl  text-white font-semibold py-4">
            EXPERIENCE
          </h2>
          <ul className=" w-10/12 pb-2 border-l-4 space-x-3 border-yellow-400 min-h-44 ">
            <span></span>
            <li className="flex items-center ">
              <ImCalendar className="mr-2" /> 2017-2019
            </li>
            <li className="text-xl my-2">
              WEB DESIGNER - <span className="font-medium">ENVATO</span>
            </li>
            <li className="mb-4">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt saddddddddddddddddddd laoreet diam
              nonummy.
            </li>
          </ul>
          <ul className=" w-10/12 pb-2 border-l-4 space-x-3 border-yellow-400 min-h-44 ">
            <span></span>
            <li className="flex items-center ">
              <ImCalendar className="mr-2" /> 2017-2019
            </li>
            <li className="text-xl my-2">
              WEB DESIGNER - <span className="font-medium">ENVATO</span>
            </li>
            <li className="mb-4">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt sadddddddddddddd laoreet diam
              nonummy.
            </li>
          </ul>
          <ul className=" w-10/12 pb-2 border-l-4 space-x-3 border-yellow-400 min-h-44 ">
            <span></span>
            <li className="flex items-center ">
              <ImCalendar className="mr-2" /> 2017-2019
            </li>
            <li className="text-xl my-2">
              WEB DESIGNER - <span className="font-medium">ENVATO</span>
            </li>
            <li>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt sadddddddddddddut laoreet diam
              nonummy.
            </li>
          </ul>
        </div>
      </div>

      {/* Experience Section end */}

      {/* Skills */}

      <div className="w-10/12 m-auto flex-col pb-20 lg:py-20 flex justify-around items-start  bg-[#222]">
        <h1 className="text-2xl  text-white font-semibold py-4">SKILLS</h1>
        <div className=" grid sm:grid-cols-2 md:grid-cols-3 w-full gap-4 md:gap-8  ">
          <h3 className="border-b-2 border-yellow-500 min-w-40 py-3 text-xl">
            HTML
          </h3>
          <h3 className="border-b-2 border-yellow-500 min-w-40 py-3 text-xl">
           JavaScript
          </h3>
          <h3 className="border-b-2 border-yellow-500 min-w-40 py-3 text-xl">
            HTML
          </h3>
          <h3 className="border-b-2 border-yellow-500 min-w-40 py-3 text-xl">
            HTML
          </h3>
          <h3 className="border-b-2 border-yellow-500 min-w-40 py-3 text-xl">
            HTML
          </h3>
          <h3 className="border-b-2 border-yellow-500 min-w-40 py-3 text-xl">
            HTML
          </h3>
        </div>
      </div>

      {/*end Skills */}
    </motion.div>
  );
};

export default About;
