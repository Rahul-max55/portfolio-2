import PortfolioCard from "../components/ProtfolioCard";
import { motion } from "framer-motion";


const Portfolio = () => {

  return (
    <>
      <motion.div 
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -300, opacity: 0 }}

      className="bg-[#222] h-fit max-w-screen text-white">
        <div className=" p-10 text-4xl font-extrabold flex items-center justify-center">
          <h1>MY </h1>
          <span className="text-yellow-400 mx-2">PORTFOLIO</span>
        </div>
        <div className="flex pb-10 justify-center items-center text-center ">
          <hr className="bg-yellow-400 w-20 h-1" />
          <span className="px-4">
            I DESIGN AND CODE BEAUTIFUL THINGS, AND I LOVE WHAT I DO.
          </span>
          <hr className="bg-yellow-400 w-20 h-1" />
        </div>

        <div className="w-10/12 m-auto flex-col pb-20 lg:py-10 relative flex justify-around items-start bg-[#222]">
          <div className=" grid sm:grid-cols-2 md:grid-cols-3 w-full gap-4 md:gap-8  ">
          {[4 ,2,3,3,4,4].map((val , i) =>  <PortfolioCard key={i} /> )}
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Portfolio;
