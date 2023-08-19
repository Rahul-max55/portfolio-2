import React, {useState } from "react";
import { Link } from "react-router-dom";
import cover from "../Assets/fullscreendark.jpg";
import { CgProfile } from "react-icons/cg";
import { AiFillProfile } from "react-icons/ai";
import { SlSettings } from "react-icons/sl";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";

const Home = () => {

 

  return (
    <>
      <motion.div
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -300, opacity: 0 }}

        className="backImage flex justify-between items-center max-w-screen h-screen"
        style={{
          backgroundImage: `url(${cover})`,
          backgroundSize: "100% 100%",
        }}
      >

        {/* algnment div */}
        <div>
          {/* <div className="bg-purple-500 w-20 h-72">lorem</div> */}
        </div>


        <div className="w-11/12 md:w-7/12 lg:w-6/12 h-80 space-y-4 flex justify-between items-start sm:items-center">
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
            <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
              <Link to="/about" className="flex px-5 py-2 md:py-3 items-center justify-center bg-yellow-500 transition-colors text-base xl:text-xl font-medium text-white space-x-2 rounded-full shadow-lg border-2 border-yellow-400 hover:bg-transparent">
                <CgProfile /> <span>MORE ABOUT ME </span>
              </Link>
              <Link to="/portfolio" className="flex py-2 md:py-3 px-4 items-center justify-center border-2 border-yellow-400 text-base xl:text-xl font-medium text-white space-x-2 rounded-full shadow-lg hover:bg-yellow-500">
                <AiFillProfile />
                <span>PORTFOLIO</span>
              </Link>
            </div>
          </div>
          <div className="bg-gray-300 w-16 h-16  rounded-full flex justify-center text-4xl items-center ">
            <SlSettings className="animate-spin" />
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Home;
