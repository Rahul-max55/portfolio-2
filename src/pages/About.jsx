import React from "react";
import profile from "../Assets/dark-about.jpg";
import { Link } from "react-router-dom";
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
        <span className="px-4">
          I DESIGN AND CODE BEAUTIFUL THINGS, AND I LOVE WHAT I DO.
        </span>
        <hr style={bgValue} className="bg-yellow-400 w-20 h-1" />
      </div>

      <div className="w-[100vw] sm:w-[85vw] md:w-[75vw] text-white  m-auto h-[90vh] md:h-[120vh] lg:h-[150vh] xl:h-[75vh]  flex justify-between items-center xl:flex-row flex-col">
        <div className="md:w-fit h-fit  relative">
          <div
            style={borderValue}
            className="w-full hidden sm:block h-[270px] sm:h-[500px] md:h-[500px] top-5 left-5 md:top-10 md:left-10 absolute border-[8px] border-yellow-500"
          ></div>
          <img src={profile} alt="photo" className="relative z-10" />
        </div>
        <div className="w-full md:w-4/5 xl:w-1/2  md:m-auto flex justify-center items-center h-full ">
          <ul className="w-11/12 text-base md:w-full h-5/6   flex items-start justify-evenly">
            <div className=" h-full flex flex-col justify-evenly items-start">
              <span>
                First Name: <span className="pl-4 md:pl-2 lg:pl-4 ">Rahul</span>
              </span>
              <span>
                Last Name: <span className="pl-4 md:pl-2 lg:pl-4"> Birla</span>
              </span>
              <span>
                Birthdate:
                <span className="pl-4 md:pl-2 lg:pl-4"> 10 oct 1998 </span>
              </span>
              <span>
                Nanationlity:
                <span className="pl-4 md:pl-2 lg:pl-4"> India</span>
              </span>
              <span>
                Experience:
                <span className="pl-4 md:pl-2 lg:pl-4"> 1.7 Years</span>
              </span>

              <span className="flex md:hidden">
                Langages:
                <span className="pl-4 md:pl-2 lg:pl-4"> English, Hindi</span>
              </span>

              <a className="flex md:hidden" href="tel:+919907761728">
                Phone no:
                <span className="pl-4 md:pl-2 lg:pl-4"> 9907761728</span>
              </a>
              <a
                className="flex md:hidden"
                href="mailto:birlarahul340@gmail.com"
              >
                Email:
                <span className="pl-4 md:pl-2 lg:pl-4">
                  birlarahul340@gamil.com
                </span>
              </a>
              <a
                className="flex md:hidden"
                target="blank"
                href="www.linkedin.com/in/rahul-birla-15986323b;"
              >
                LinkedIn:
                <span className="pl-4 md:pl-2 lg:pl-4">
                  rahul-birla-15986323b
                </span>
              </a>
              <span className="flex md:hidden">
                address: <span className="pl-4 md:pl-2 lg:pl-4"> Indore</span>
              </span>
              <a target="_blanck"
                href="https://drive.google.com/file/d/1uQf9K-wqWc3_JlEYlGIL9lS21-JYVi8n/view?usp=sharing"
                style={bgValue}
                className="flex px-1 py-2 md:px-5 md:py-2 items-center justify-center bg-yellow-500 transition-colors text-sm md:text-base xl:text-base font-medium text-white space-x-2 rounded-full shadow-lg border-2  hover:bg-transparent"
              >
                <ImDownload3 /> <span>Downlaod My CV</span>
              </a>
            </div>
            <div className="hidden md:flex h-full flex-col justify-evenly items-start">
              <span>
                Langages:{" "}
                <span className="pl-1 md:pl-2 lg:pl-4"> English, Hindi</span>
              </span>

              <a href="tel:+919907761728">
                Phone no:{" "}
                <span className="pl-1 md:pl-2 lg:pl-4"> 9907761728</span>
              </a>
              <a href="mailto:birlarahul340@gmail.com">
                Email:
                <span className="pl-1 md:pl-2 lg:pl-4">
                  {" "}
                  birlarahul340@gamil.com{" "}
                </span>
              </a>
              <a
                target="blank"
                href="www.linkedin.com/in/rahul-birla-15986323b;"
              >
                LinkedIn:{" "}
                <span className="pl-1 md:pl-2 lg:pl-4">
                  {" "}
                  rahul-birla-15986323b{" "}
                </span>
              </a>
              <span>
                address: <span className="pl-1 md:pl-2 lg:pl-4"> Indore</span>
              </span>
              <a
                href="https://drive.google.com/file/d/1uQf9K-wqWc3_JlEYlGIL9lS21-JYVi8n/view?usp=sharing"
                style={bgValue}
                className="flex px-1 invisible py-2 md:px-5 md:py-2 items-center justify-center bg-yellow-500 transition-colors text-sm md:text-base xl:text-base font-medium text-white space-x-2 rounded-full shadow-lg border-2  hover:bg-transparent"
              >
                <ImDownload3 /> <span>Downlaod My CV</span>
              </a>
            </div>
          </ul>
        </div>
      </div>
      {/* Upper section  */}

      {/* Experience Section */}

      <div
        className="w-10/12 m-auto flex-col lg:flex-row lg:pt-20
       flex justify-around items-start  bg-[#222]"
      >
        <div className="w-full md:w-11/12 lg:w-1/2 py-4 flex justify-between flex-col items-start">
          <h2 className="text-2xl  text-white font-semibold py-4">
            EXPERIENCE
          </h2>
          <ul
            style={borderValue}
            className=" w-10/12 pb-2 border-l-4 space-x-3 border-yellow-400 min-h-44 "
          >
            <span></span>
            <li className="flex items-center ">
              <ImCalendar className="mr-2" /> Apr 2023 – present (Indore)
            </li>
            <li className="text-xl my-2">
            Full Stack Developer - <span className="font-medium">Tophat Software Pvt. Ltd</span>
            </li>
            <li className="mb-4">
            I am currently working in Tophat Software Pvt. Ltd as a MERN stack developer. Using my skills I have developed many websites.
            </li>
          </ul>

          <ul
            style={borderValue}
            className="w-10/12 pb-2 border-l-4 space-x-3 border-yellow-400 min-h-44 "
          >
            <span></span>
            <li className="flex items-center ">
              <ImCalendar className="mr-2" /> Feb 2022 - Mar 2023 (Indore)
            </li>
            <li className="text-xl my-2">
            Full Stack Developer - <span className="font-medium">sonnen Techs</span>
            </li>
            <li className="mb-4">
            I am working in Sonnen techs as a MERN stack developer. I am learning new technology to grow my organisation.
            </li>
          </ul>


           </div>

        <div className="w-full md:w-11/12 lg:w-1/2 py-4  flex justify-between flex-col items-start">
          <h2 className="text-2xl  text-white font-semibold py-4">EDUCATION</h2>
          <ul
            style={borderValue}
            className=" w-10/12 pb-2 border-l-4 space-x-3 border-yellow-400 min-h-44 "
          >
            
  
            <span></span>
            <li className="flex items-center ">
              <ImCalendar className="mr-2" /> 2022-2024
            </li>
            <li className="text-xl my-2">
              Master of Computer Application(MCA) - 
              <span className="font-medium">Indore</span>
            </li>
            <li className="mb-4">Sanjeev Agrawal Global Educational(SAGE)</li>
          </ul>
          <ul
            style={borderValue}
            className=" w-10/12 pb-2 border-l-4 space-x-3 border-yellow-400 min-h-44 "
          >
            <span></span>
            <li className="flex items-center ">
              <ImCalendar className="mr-2" /> 2016-2019
            </li>
            <li className="text-xl my-2">
              Bachelor of Computer Science(BSc) - 
              <span className="font-medium">indore</span>
            </li>
            <li className="mb-4">
              Chameli Devi Institute of Professional Studies
            </li>
          </ul>
          <ul
            style={borderValue}
            className=" w-10/12 pb-2 border-l-4 space-x-3 border-yellow-400 min-h-44 "
          >
            <span></span>
            <li className="flex items-center ">
              <ImCalendar className="mr-2" /> 2016
            </li>
            <li className="text-xl my-2">
            Higher Secondary Certificate (Class 12th) - <span className="font-medium">Mhow</span>
            </li>
            <li className="mb-4">
            Government Higher Secondary School
            </li>
          </ul>
          <ul
            style={borderValue}
            className=" w-10/12 pb-2 border-l-4 space-x-3 border-yellow-400 min-h-44 "
          >
            <span></span>
            <li className="flex items-center ">
              <ImCalendar className="mr-2" /> 2014
            </li>
            <li className="text-xl my-2">
            Secondary School Certificate (Class 10th) - <span className="font-medium">Pithampur</span>
            </li>
            <li className="mb-4">
            New Genius Higher Secondary School
            </li>
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
