import React, { useEffect, useState } from "react";
import { NavLink} from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";
import { BiSolidBriefcase } from "react-icons/bi";
import { HiMail } from "react-icons/hi";
import { ImBlogger} from "react-icons/im";
import { RxCross2} from "react-icons/rx";
import { FiMenu } from "react-icons/fi";

const Navbar = () => {
  const [hideNav, sethideNav] = useState(true);

  const handleClose = (e) => {
    e.preventDefault();
    sethideNav(!hideNav);
  };

  

  useEffect(()=>{
    sethideNav(true);
  },[])


  return (
    <>
      <div
        className={`bg-gray-600 w-14 md:w-20 rounded-full top-12 md:top-24 z-40 left-6 sm:left-10 fixed transition-all duration-500 ease-linear flex justify-evenly items-center  flex-col ${
          hideNav ? "h-14 md:h-20 overflow-hidden" : "h-96"
        }`}
      >
        <div
          className={`bg-gray-600 w-14 h-24 md:w-20 md:h-24 rounded-full hover:text-gray-100 cursor-pointer flex justify-evenly text-3xl text-gray-300 items-center flex-col `}
          onClick={handleClose}
        >
         {hideNav ? <FiMenu /> : <RxCross2 />} 
        </div>
        <div
          className={`bg-gray-600 w-14 md:w-20 rounded-full flex transition-all duration-500 ease-linear  justify-between text-2xl items-center text-gray-300 flex-col ${
            hideNav ? "h-0 overflow-hidden" : "h-96 pb-8"
          }`}
        >
          <NavLink
            to="/"
            className="relative hover:text-yellow-400  focus:text-yellow-400 cursor-pointer"
          >
            <FaHome />
            <span className="absolute top-0 left-16 text-xl bg-gray-500 px-2 rounded-lg">HOME</span>
          </NavLink>
          <NavLink
            to="/about"
            className="relative hover:text-yellow-400  focus:text-yellow-400 cursor-pointer"
          >
            <BsFillPersonFill />
            <span className="absolute top-0 left-16 text-xl bg-gray-500  px-2 rounded-lg" >ABOUT</span>
          </NavLink>
          <NavLink
            to="/portfolio"
            className="relative hover:text-yellow-400  focus:text-yellow-400 cursor-pointer"
          >
            <BiSolidBriefcase />
            <span className="absolute top-0 left-16 text-xl bg-gray-500  px-2 rounded-lg" >PORTFOLIO</span>
          </NavLink>
          <NavLink
            to="/contact"
            className="relative hover:text-yellow-400  focus:text-yellow-400 cursor-pointer"
          >
            <HiMail />
            <span className="absolute top-0 left-16 text-xl bg-gray-500  px-2 rounded-lg" >CONTACT</span>
          </NavLink>
          <NavLink
            to="/blog"
            className="relative hover:text-yellow-400  focus:text-yellow-400 cursor-pointer"
          >
            <ImBlogger />
            <span className="absolute top-0 left-16 text-xl bg-gray-500  px-2 rounded-lg" >BLOG</span>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Navbar;
