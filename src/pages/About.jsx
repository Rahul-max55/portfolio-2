import React from "react";
import profile from "../Assets/dark-about.jpg";
import { Link } from "react-router-dom";
import { ImDownload3 } from "react-icons/im";

const About = () => {
  return (
    <div className="bg-[#222] text-white">
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
        <div className="md:w-fit md:h-full  relative">
          <div className="w-full h-full top-5 left-5 md:top-10 md:left-10 -z-10  absolute border-[8px] border-yellow-500"></div>
          <img src={profile} alt="photo" />
        </div>
        <div className="w-screen md:w-[70vw] lg:w-3/5 xl:w-1/2 md:m-auto flex justify-center items-center h-full ">
          <ul className="w-11/12 md:w-5/6 h-5/6  flex justify-center md:justify-between">
            <div className="w-1/2 xl:w-[15vw] h-full  flex flex-col justify-evenly items-start">
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
            <div className="w-1/2 xl:w-[15vw] h-full   flex flex-col justify-evenly items-start">
              <span>First Name: Rahul</span>
              <span>First Name: Rahul</span>
              <span>First Name: Rahul</span>
              <span>First Name: Rahul</span>
              <span>First Name: Rahul</span>
              <span>First Name: Rahul</span>
              <Link
                to="/about"
                className="flex px-1 invisible py-1 md:px-5 md:py-2 items-center justify-center bg-yellow-500 transition-colors text-base xl:text-base font-medium text-white space-x-2 rounded-full shadow-lg border-2 border-yellow-400 hover:bg-transparent"
              >
                <ImDownload3 /> <span>Downlaod My CV</span>
              </Link>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
