import React, { useState } from "react";
import project1 from "../Assets/project-1.jpg";


const ProtfolioCard = () => {

    const [overlay, setOverlay] = useState(true);

    const handleHover = () => {
      setOverlay(!overlay);
    };

  return (
    <>
      <span className="relative overflow-hidden">
        <span className="w-full h-full" onMouseOver={handleHover}>
          <img
            src={project1}
            alt="porject1"
            className="rounded-lg relative z-20"
          />
        </span>
        <p
          onMouseLeave={handleHover}
          className={`absolute z-20 w-full h-full   top-0 p-2 text-black transition-[right] duration-700 text-center flex justify-center bg-yellow-400 rounded-lg items-center text-2xl font-bold ${
            overlay
              ? "right-[520px] md:right-[390px] xl:right-[600px] "
              : "left-[0px]"
          }`}
        >
          Lorem ipsum dolor sit ametwsd.
        </p>
      </span>
    </>
  );
};

export default ProtfolioCard;
