import React from "react";
import profile from "../Assets/aboutPhoto.jpg";
import { ImCalendar, ImDownload3 } from "react-icons/im";
import { motion } from "framer-motion";

const About = ({ color }) => {
  const bgValue = { backgroundColor: color };
  const textValue = { color: color };
  const borderValue = { borderColor: color };

  return (
    <motion.div
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -300, opacity: 0 }}
      className="bg-[#222] h-fit text-white"
    >
      <div className=" p-10 text-4xl font-extrabold flex items-center justify-center">
        <h1>ABOUT </h1>
        <span style={textValue} className="text-yellow-400 mx-2">
          ME
        </span>
      </div>
      <div className="flex pb-10 justify-center items-center text-center ">
        <hr style={bgValue} className="bg-yellow-400 w-20 h-1" />
        <span className="px-4 opacity-80">
          I DESIGN AND CODE BEAUTIFUL THINGS, AND I LOVE WHAT I DO.
        </span>
        <hr style={bgValue} className="bg-yellow-400 w-20 h-1" />
      </div>

      <div className="sm:w-[80vw] text-white  m-auto min-h-screen flex justify-between items-center xl:flex-row flex-col">
        {/* image and border */}
        <div className="w-screen sm:w-[570px] md:w-[600px] m-auto sm:m-0 h-fit sm:min-h-screen ">
          <span className="relative w-screen sm:w-0 h-full">
            <img
              src={profile}
              alt="photo"
              className="relative z-10 w-screen sm:w-fit"
            />
            <div
              style={borderValue}
              className="w-10/12 h-full hidden sm:block top-8 left-16 md:left-8 xl:left-12 absolute border-[8px] border-yellow-500"
            ></div>
          </span>
        </div>
        {/*End image and border */}

        {/* details */}
        <div className=" p-4 md:p-0 w-full md:w-10/12 xl:w-1/2 min-h-96 ">
          <ul className=" w-full text-base min-h-[350px] flex flex-col sm:flex-row items-center sm:items-start sm:justify-between md:justify-around xl:justify-between p-2 sm:p-0">
            <div className=" grid gap-8 min-w-[220px]">
              <span className="w-full h-[30px] border-b border-gray-300">
                First Name : <span className="float-right"> Rahul</span>
              </span>
              <span className="w-full h-[30px] border-b border-gray-300">
                Last Name : <span className="float-right"> Birla</span>
              </span>
              <span className="w-full h-[30px] border-b border-gray-300">
                Birthdate : <span className="float-right">10 oct 1998</span>
              </span>
              <span className="w-full h-[30px] border-b border-gray-300">
                Nanationlity : <span className="float-right"> India</span>
              </span>
              <span className="w-full mb-8 md:mb-0 h-[30px] border-b border-gray-300">
                Experience : <span className="float-right"> 1.7 Years</span>
              </span>
            </div>
            <div className=" grid gap-8 min-w-[220px]">
              <span className="w-full h-[30px]  border-b border-gray-300">
                Langages : <span className="float-right"> English, Hindi</span>
              </span>
              <span className="w-full h-[30px] border-b border-gray-300">
              Phone no : <span className="float-right"> 9907761728</span>
              </span>
              <span className="w-full h-[30px] border-b border-gray-300">
              Email : <span className="float-right">  birlarahul340@gamil.com</span>
              </span>
              <span className="w-full h-[30px] border-b border-gray-300">
              address : <span className="float-right">Indore</span>
              </span>
             
              <a
                target="_blanck"
                href="https://drive.google.com/file/d/1uQf9K-wqWc3_JlEYlGIL9lS21-JYVi8n/view?usp=sharing"
                style={bgValue}
                className="flex px-1 py-2 md:px-5 md:py-2 items-center justify-center bg-yellow-500 transition-colors text-sm md:text-base xl:text-base font-medium text-white space-x-2 rounded-full shadow-lg border-2  hover:bg-transparent"
              >
                <ImDownload3 /> <span>Downlaod My CV</span>
              </a>
            </div>
          </ul>
        </div>
        {/* details */}
      </div>
      {/* Upper section  */}

      {/* Experience Section */}

      <div
        className="w-10/12 m-auto h flex-col lg:flex-row lg:pt-5
       flex justify-around items-start  bg-[#222]"
      >
        <div className="w-full md:w-11/12 lg:w-1/2 py-4 flex justify-between flex-col items-start">
          <h2 className="text-2xl  text-white font-semibold py-4">
            EXPERIENCE
          </h2>
          <ul
            style={borderValue}
            className=" w-10/12 pb-2 border-l-4 border-b space-x-3 border-yellow-400 min-h-44 "
          >
            <span></span>
            <li className="flex items-center opacity-80">
              <ImCalendar className="mr-2" /> Apr 2023 – present (Indore)
            </li>
            <li className="text-xl my-2">
              Full Stack Developer -{" "}
              <span className="font-medium">Tophat Software Pvt. Ltd</span>
            </li>
            <li className="mb-4 opacity-80">
              I am currently working in Tophat Software Pvt. Ltd as a MERN stack
              developer. Using my skills I have developed many websites.
            </li>
          </ul>

          <ul
            style={borderValue}
            className="w-10/12 pb-2 border-l-4 border-b pt-5 space-x-3 border-yellow-400 min-h-44 "
          >
            <span></span>
            <li className="flex items-center opacity-80">
              <ImCalendar className="mr-2 " /> Feb 2022 - Mar 2023 (Indore)
            </li>
            <li className="text-xl my-2">
              Full Stack Developer -{" "}
              <span className="font-medium">sonnen Techs</span>
            </li>
            <li className="mb-4 opacity-80">
              I am working in Sonnen techs as a MERN stack developer. I am
              learning new technology to grow my organisation.
            </li>
          </ul>
        </div>

        <div className="w-full md:w-11/12 lg:w-1/2 py-4  flex justify-between flex-col items-start">
          <h2 className="text-2xl  text-white font-semibold py-4">EDUCATION</h2>
          <ul
            style={borderValue}
            className=" w-10/12 border-b pb-2 border-l-4 space-x-3 border-yellow-400 min-h-44 "
          >
            <span></span>
            <li className="flex items-center ">
              <ImCalendar className="mr-2 opacity-80" /> 2022-2024
            </li>
            <li className="text-xl my-2">
              Master of Computer Application(MCA) -
              <span className="font-medium">Indore</span>
            </li>
            <li className="mb-4">Sanjeev Agrawal Global Educational(SAGE)</li>
          </ul>
          <ul
            style={borderValue}
            className=" w-10/12 border-b pt-5 pb-2 border-l-4 space-x-3 border-yellow-400 min-h-44 "
          >
            <span></span>
            <li className="flex items-center opacity-80">
              <ImCalendar className="mr-2" /> 2016-2019
            </li>
            <li className="text-xl my-2">
              Bachelor of Computer Science(BSc) -
              <span className="font-medium">indore</span>
            </li>
            <li className="mb-4 opacity-80">
              Chameli Devi Institute of Professional Studies
            </li>
          </ul>
          <ul
            style={borderValue}
            className=" w-10/12 pb-2 border-l-4 border-b pt-5 space-x-3 border-yellow-400 min-h-44 "
          >
            <span></span>
            <li className="flex items-center opacity-80 ">
              <ImCalendar className="mr-2 " /> 2016
            </li>
            <li className="text-xl my-2">
              Higher Secondary Certificate (Class 12th) -
              <span className="font-medium">Mhow</span>
            </li>
            <li className="mb-4 opacity-80">Government Higher Secondary School</li>
          </ul>
          <ul
            style={borderValue}
            className=" w-10/12 pb-2 border-l-4 border-b pt-5 space-x-3 border-yellow-400 min-h-44 "
          >
            <span></span>
            <li className="flex items-center opacity-80">
              <ImCalendar className="mr-2" /> 2014
            </li>
            <li className="text-xl my-2">
              Secondary School Certificate (Class 10th) -
              <span className="font-medium">Pithampur</span>
            </li>
            <li className="mb-4 opacity-80">New Genius Higher Secondary School</li>
          </ul>
        </div>
      </div>

      {/* Experience Section end */}

      {/* Skills */}

      <div className="w-10/12 m-auto flex-col pb-20 lg:py-20 flex justify-around items-start  bg-[#222]">
        <h1 className="text-2xl  text-white font-semibold py-4">SKILLS</h1>
        <div className=" grid sm:grid-cols-2 md:grid-cols-3 w-full gap-4 md:gap-8  ">
          <h3
            style={borderValue}
            className="border-b-2 border-yellow-500 min-w-40 py-3 text-xl"
          >
            HTML
          </h3>
          <h3
            style={borderValue}
            className="border-b-2 border-yellow-500 min-w-40 py-3 text-xl"
          >
            CSS
          </h3>
          <h3
            style={borderValue}
            className="border-b-2 border-yellow-500 min-w-40 py-3 text-xl"
          >
            Tailwind
          </h3>
          <h3
            style={borderValue}
            className="border-b-2 border-yellow-500 min-w-40 py-3 text-xl"
          >
            JavaScript
          </h3>
          <h3
            style={borderValue}
            className="border-b-2 border-yellow-500 min-w-40 py-3 text-xl"
          >
            Reactjs
          </h3>
          <h3
            style={borderValue}
            className="border-b-2 border-yellow-500 min-w-40 py-3 text-xl"
          >
            MongoDB
          </h3>
          <h3
            style={borderValue}
            className="border-b-2 border-yellow-500 min-w-40 py-3 text-xl"
          >
            Nodejs
          </h3>
          <h3
            style={borderValue}
            className="border-b-2 border-yellow-500 min-w-40 py-3 text-xl"
          >
            Nextjs
          </h3>
          <h3
            style={borderValue}
            className="border-b-2 border-yellow-500 min-w-40 py-3 text-xl"
          >
            TypeScript
          </h3>

          <h3
            style={borderValue}
            className="border-b-2 border-yellow-500 min-w-40 py-3 text-xl"
          >
            Redux
          </h3>
          <h3
            style={borderValue}
            className="border-b-2 border-yellow-500 min-w-40 py-3 text-xl"
          >
            Rest Api
          </h3>
          <h3
            style={borderValue}
            className="border-b-2 border-yellow-500 min-w-40 py-3 text-xl"
          >
            Git
          </h3>
          <h3
            style={borderValue}
            className="border-b-2 border-yellow-500 min-w-40 py-3 text-xl"
          >
            GitHub
          </h3>
          <h3
            style={borderValue}
            className="border-b-2 border-yellow-500 min-w-40 py-3 text-xl"
          >
            Express
          </h3>
          <h3
            style={borderValue}
            className="border-b-2 border-yellow-500 min-w-40 py-3 text-xl"
          >
            Black Box Testing
          </h3>
        </div>
      </div>

      {/*end Skills */}
    </motion.div>
  );
};

export default About;
