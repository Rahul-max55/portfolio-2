import React from "react";
import { AiFillProfile } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";


const Contact = ({color}) => {

  const bgValue = {backgroundColor:color} ;
  const textValue = {color:color} ;
  const borderValue = {borderColor:color} ;

  return (
    <>
      <motion.div  
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -300, opacity: 0 }} 
      
      className="bg-[#222] min-h-screen text-white">
        <div className=" p-10 text-4xl font-extrabold flex items-center justify-center">
          <h1>CONTACT </h1>
          <span style={textValue} className="text-yellow-400 mx-2">ME</span>
        </div>
        <div className="flex pb-10 justify-center items-center text-center ">
          <hr style={bgValue} className="bg-yellow-400 w-20 h-1" />
          <span className="px-4 text-center">
            I DESIGN AND CODE BEAUTIFUL THINGS, AND I LOVE WHAT I DO.
          </span>
          <hr style={bgValue} className="bg-yellow-400 w-20 h-1" />
        </div>

        {/* Context details */}

        <div className=" pb-14 w-10/12 m-auto min-h-fit flex-col lg:flex-row flex justify-between items-center lg:items-center">
          <div className="w-11/12 lg:w-3/12 flex flex-col justify-center items-start">
            <span className="flex  flex-col py-4 items-start justify-center">
              <h3 className="px-2 pl-0 text-white/80">Phone </h3>
              <span className="flex items-center justify-center">
                <BsWhatsapp className="mr-4" /> +6121832183
              </span>
            </span>

            <span className="flex  flex-col py-4 items-start justify-center">
              <h3 className="px-2 pl-0 text-white/80">Phone </h3>
              <span className="flex items-center justify-center">
                <BsWhatsapp className="mr-4" /> +6121832183
              </span>
            </span>
            <span className="flex  flex-col py-4 items-start justify-center">
              <h3 className="px-2 pl-0 text-white/80">Phone </h3>
              <span className="flex items-center justify-center">
                <BsWhatsapp className="mr-4" /> +6121832183
              </span>
            </span>
            <span className="flex  flex-col py-4 items-start justify-center">
              <h3 className="px-2 pl-0 text-white/80">Phone </h3>
              <span className="flex items-center justify-center">
                <BsWhatsapp className="mr-4" /> +6121832183
              </span>
            </span>
            <span className="flex  flex-col py-4 items-start justify-center">
              <h3 className="px-2 pl-0 text-white/80">Phone </h3>
              <span className="flex items-center justify-center">
                <BsWhatsapp className="mr-4" /> +6121832183
              </span>
            </span>
          </div>
          <div className=" w-11/12 sm:w-9/12  h-80 flex  flex-col items-center justify-between">
            <h3 className="text-lg text-center py-2" >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
              quo dolore porro.
            </h3>
            <form className="w-full flex items-center justify-between flex-col "> 
              <div className="flex w-full justify-around items-center ">
                <div class="flex items-center w-6/12 sm:w-5/12 bg-[#333] border-[#444] border rounded-full p-2 space-x-2">
                  <AiFillProfile />
                  <input
                    className="flex-1 bg-transparent focus:outline-none overflow-hidden"
                    type="text"
                    placeholder="Enter something..."
                  />
                </div>

                <div class="flex items-center  w-6/12 sm:w-5/12 bg-[#333] border-[#444] border rounded-full p-2 space-x-2">
                  <AiFillProfile />
                  <input
                    className="bg-transparent focus:outline-none overflow-hidden"
                    type="text"
                    placeholder="Enter something..."
                  />
                </div>
              </div>

              <textarea
                name="message"
                id="message"
                cols="10"
                rows="5"
                placeholder="Write Your Message"
                className="my-4 p-2 bg-[#333] w-full lg:w-11/12  border border-[#444] outline-none  resize-none rounded-lg"
              />
            </form>

              <Link style={{...borderValue , ...bgValue}} to="/about" className="flex px-3 py-1 items-center justify-center bg-yellow-500 transition-colors text-base xl:text-lg font-medium text-white space-x-2 rounded-full shadow-lg border-2 border-yellow-400 hover:bg-transparent">
                <CgProfile /> <span>Send Message</span>
              </Link>
          </div>
        </div>

        {/*end Context details */}
      </motion.div>
    </>
  );
};

export default Contact;
