import React, {useState } from "react";
import { Link } from "react-router-dom";
import cover from "../Assets/fullscreendark.jpg";
import { CgProfile } from "react-icons/cg";
import { AiFillProfile } from "react-icons/ai";
import { SlSettings } from "react-icons/sl";
import { FaHome } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";
import { BiSolidBriefcase } from "react-icons/bi";
import { HiMail } from "react-icons/hi";
import { ImBlogger } from "react-icons/im";
import { GiHamburgerMenu } from "react-icons/gi";
import Typewriter from "typewriter-effect";

const Home = () => {
  const [hideNav, sethideNav] = useState(true);

  const handleClose = (e) => {
    e.preventDefault();
    sethideNav(!hideNav);
  };

  return (
    <>
      <div
        className="backImage flex justify-between items-center max-w-screen h-screen"
        style={{
          backgroundImage: `url(${cover})`,
          backgroundSize: "100% 100%",
        }}
      >
        <div className="ml-10">
          <div
            className={`bg-gray-600 w-20 rounded-full transition-all duration-500 ease-linear flex justify-evenly items-center  flex-col ${
              hideNav ? "h-20 overflow-hidden" : "h-96"
            }`}
          >
            <div
              className={`bg-gray-600 w-20 h-24 rounded-full hover:text-gray-100 cursor-pointer flex justify-evenly text-3xl text-gray-300 items-center flex-col `}
              onClick={handleClose}
            >
              <GiHamburgerMenu />
            </div>
            <div
              className={`bg-gray-600 w-20 rounded-full flex transition-all duration-500 ease-linear  justify-between text-2xl items-center text-gray-300 flex-col ${
                hideNav ? "h-0 overflow-hidden" : "h-96 pb-8"
              }`}
            >
              <Link to="/" className="relative hover:text-yellow-400  focus:text-yellow-400 cursor-pointer">
                <FaHome />
                <span className="absolute top-0 left-16 text-xl">HOME</span>
              </Link>
              <Link to="/about" className="relative hover:text-yellow-400  focus:text-yellow-400 cursor-pointer">
                <BsFillPersonFill />
                <span className="absolute top-0 left-16 text-xl">ABOUT</span>
              </Link>
              <Link to="/portfolio" className="relative hover:text-yellow-400  focus:text-yellow-400 cursor-pointer">
                <BiSolidBriefcase />
                <span className="absolute top-0 left-16 text-xl">
                  PORTFOLIO
                </span>
              </Link>
              <Link to="/contact" className="relative hover:text-yellow-400  focus:text-yellow-400 cursor-pointer">
                <HiMail />
                <span className="absolute top-0 left-16 text-xl">CONTACT</span>
              </Link>
              <Link to="/blog" className="relative hover:text-yellow-400  focus:text-yellow-400 cursor-pointer">
                <ImBlogger />
                <span className="absolute top-0 left-16 text-xl">BLOG</span>
              </Link>
            </div>
          </div>
          {/* <div className="bg-purple-500 w-20 h-72">lorem</div> */}
        </div>
        <div className=" w-7/12 lg:w-6/12 h-80 flex justify-between items-center">
          <div className=" w-10/12 h-full flex justify-between items-start flex-col">
            <p className="text-white text-2xl">Hi THERE!</p>
            <h1 className="text-white text-3xl lg:text-5xl flex font-extrabold">
              I'M
              <span className="text-yellow-400 ml-3">
                <Typewriter
                  options={{
                    strings: ["Hello Hr", "World"],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </span>
            </h1>
            <p className="text-white text-lg">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Quibusdam, corrupti. Rerum excepturi quo accusantium, nobis
              voluptatibus tenetur iusto facilis amet sed provident minus
              aspernatur debitis repudiandae nostrum aperiam eum quam.
            </p>
            <div className="flex space-x-4">
              <Link to="/about" className="flex px-5 py-3 items-center justify-center bg-yellow-500 transition-colors text-base xl:text-xl font-medium text-white space-x-2 rounded-full shadow-lg border-2 border-yellow-400 hover:bg-transparent">
                <CgProfile /> <span>MORE ABOUT ME </span>
              </Link>
              <Link to="/portfolio" className="flex px-5 py-3 items-center justify-center border-2 border-yellow-400 text-base xl:text-xl font-medium text-white space-x-2 rounded-full shadow-lg hover:bg-yellow-500">
                <AiFillProfile />
                <span>PORTFOLIO</span>
              </Link>
            </div>
          </div>
          <div className="bg-gray-300 w-16 h-16  rounded-full flex justify-center text-4xl items-center ">
            <SlSettings className="animate-spin" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
