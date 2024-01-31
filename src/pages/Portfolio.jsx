import PortfolioCard from "../components/ProtfolioCard";
import { motion } from "framer-motion";
import flatandflatmates from "../Assets/flatsandflatmates.jpg";
import QuantumTravel from "../Assets/QuantumTravel.png";
import demoEcommerce from "../Assets/DemoEcommerce.png";

const Portfolio = ({ color }) => {
  let ProtfolioDetails = [
    {
      name: "Flats and Flatmates",
      url: "https://flatsandflatmates.co.in/",
      image: flatandflatmates,
    },
    {
      name: "Ecommerce Website",
      url: "https://ecommerceminor.netlify.app",
      image: demoEcommerce,
    },
    {
      name: "Quantum Travels",
      url: "https://quantum-travels-ai.vercel.app/",
      image: QuantumTravel,
    },
  ];

  const bgValue = { backgroundColor: color };
  const textValue = { color: color };
  const borderValue = { borderColor: color };

  return (
    <>
      <motion.div
        initial={{ x: 300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -300, opacity: 0 }}
        className="bg-[#222] min-h-screen max-w-screen text-white"
      >
        <div className=" p-10 text-4xl font-extrabold flex items-center justify-center">
          <h1>MY </h1>
          <span style={textValue} className="text-yellow-400 mx-2">
            PORTFOLIO
          </span>
        </div>
        <div className="flex pb-10 justify-center items-center text-center ">
          <hr tyle={bgValue} className="bg-yellow-400 w-20 h-1" />
          <span s className="px-4 opacity-80">
            I DESIGN AND CODE BEAUTIFUL THINGS, AND I LOVE WHAT I DO.
          </span>
          <hr tyle={bgValue} className="bg-yellow-400 w-20 h-1" />
        </div>

        <div className="w-10/12 m-auto flex-col pb-20 lg:py-10 relative flex justify-around items-start bg-[#222]">
          <div className=" grid sm:grid-cols-2 md:grid-cols-3 w-full gap-4 md:gap-8  ">
            {ProtfolioDetails.map((values, i) => (
              <PortfolioCard key={i} bgValue={bgValue} values={values} />
            ))}
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Portfolio;
