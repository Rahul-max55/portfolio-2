import React , {useState} from "react";
import cover from "./Assets/fullscreendark.jpg";
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

const App = () => {
  const [hideNav, sethideNav] = useState(false);

  const handleClose = (e) =>{
        e.preventDefault();
        sethideNav(!hideNav)
  }

  console.log(hideNav);

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
          <div className={`bg-gray-600 w-20 rounded-full flex justify-evenly items-center overflow-hidden flex-col ${hideNav ? "h-20" : "h-96"}`}>
            <div className={`bg-gray-600 w-20 h-24 rounded-full flex justify-evenly text-3xl text-gray-300 items-center flex-col `} onClick={handleClose} ><GiHamburgerMenu /></div>
            <div className={`bg-gray-600 w-20  overflow-hidden rounded-full flex justify-between text-2xl items-center text-gray-300 flex-col ${hideNav ? "h-0" : "h-96 pb-8"}`}>
            <span className="relative" ><FaHome /> <span className="absolute top-0 left-16 text-xl" >HOME</span> </span>
             <span className="relative" ><BsFillPersonFill /> <span className="absolute top-0 left-16 text-xl" >ABOUT</span> </span>
             <span className="relative" ><BiSolidBriefcase /> <span className="absolute top-0 left-16 text-xl" >PORTFOLIO</span> </span>
             <span className="relative" ><HiMail /> <span className="absolute top-0 left-16 text-xl" >CONTACT</span> </span>
             <span className="relative" ><ImBlogger /> <span className="absolute top-0 left-16 text-xl" >BLOG</span> </span>
            </div>
          </div>
          {/* <div className="bg-purple-500 w-20 h-72">lorem</div> */}
        </div>
        <div className=" w-6/12 h-80 flex justify-between items-center">
          <div className=" w-10/12 h-full flex justify-between items-start flex-col">
            <p className="text-white text-2xl">Hi THERE!</p>
            <h1 className="text-white text-5xl flex font-extrabold">
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
              <button className="flex px-5 py-3 items-center justify-center bg-yellow-400 text-xl font-medium text-white space-x-2 rounded-full shadow-lg border-2 border-yellow-400">
                <CgProfile /> <span>MORE ABOUT ME </span>
              </button>
              <button className="flex px-5 py-3 items-center justify-center border-2 border-yellow-400 text-xl font-medium text-white space-x-2 rounded-full shadow-lg">
                <AiFillProfile />
                <span>PORTFOLIO</span>
              </button>
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

export default App;
