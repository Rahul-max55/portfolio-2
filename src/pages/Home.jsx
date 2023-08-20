import React, {useEffect, useState } from "react";
import { Link } from "react-router-dom";
import cover from "../Assets/fullscreendark.jpg";
import { CgProfile } from "react-icons/cg";
import { AiFillProfile } from "react-icons/ai";
import { SlSettings } from "react-icons/sl";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import { BsCheckAll } from "react-icons/bs";

const Home = ({color , setColor}) => {
  const [openModal , setOpenModal] = useState(false);

  const handleOpen = () =>{
    setOpenModal(!openModal);
  }
 
  console.log(color);

  const bgValue = {backgroundColor:color} ;
  const textValue = {color:color} ;
  const borderValue = {borderColor:color} ;

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
              <span style={textValue} className={`ml-3`}>
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
              <Link to="/about" style={{...borderValue , ...bgValue}} className={`flex px-5 py-2 md:py-3 items-center justify-center transition-colors text-base xl:text-xl font-medium text-white space-x-2 rounded-full shadow-lg border-2  hover:text-white hover:bg-white/20`}>
                <CgProfile /> <span>MORE ABOUT ME </span>
              </Link>
              <Link style={borderValue} to="/portfolio" className={`flex py-2 md:py-3 px-4 items-center justify-center border-2 border-data text-base xl:text-xl font-medium text-white space-x-2 hover:text-white rounded-full shadow-lg hover:bg- `}>
                <AiFillProfile />
                <span>PORTFOLIO</span>
              </Link>
            </div>
          </div>
          <div className="bg-gray-300 relative w-16 h-16  rounded-full flex justify-center text-4xl items-center ">
            <SlSettings className="animate-spin" onClick={handleOpen} />
            <span className={`absolute transition-all duration-200 overflow-hidden right-20  rounded-lg shadow-lg z-50 flex justify-around items-center flex-col bg-red-600 {${openModal ? "opacity-1 w-12 p-2 h-56 " : "h-0 w-0 p-0 opacity-0"}}`} >
                <button onClick={()=> setColor("#fd7e14")} className="w-10 h-10 rounded-full bg-[#fd7e14]">{color==="#fd7e14" ? <BsCheckAll className="text-white" /> : ""}</button>
                <button onClick={()=> setColor("#28a745")} className="w-10 h-10 rounded-full bg-[#28a745]">{color==="#28a745" ? <BsCheckAll className="text-white" /> : ""}</button>
                <button onClick={()=> setColor("#007bff")} className="w-10 h-10 rounded-full bg-[#007bff]">{color==="#007bff" ? <BsCheckAll className="text-white" /> : ""}</button>
                <button onClick={()=> setColor("#6610f2")} className="w-10 h-10 rounded-full bg-[#6610f2]">{color==="#6610f2" ? <BsCheckAll className="text-white" /> : ""}</button>
              
            </span>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Home;
