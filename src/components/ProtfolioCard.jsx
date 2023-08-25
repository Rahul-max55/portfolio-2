import React, { useState } from "react";


const ProtfolioCard = ({bgValue  , values}) => {

  console.log(values);

  const {name , url , image} = values;

  console.log(name);
    const [overlay, setOverlay] = useState(true);

    const handleHover = () => {
      setOverlay(!overlay);
    };

  return (
    <>
      <a href={url} target="_blank" className="relative overflow-hidden">
        <span className="w-full h-full" onMouseOver={handleHover}>
          <img
            src={image}
            alt="porject1"
            className="rounded-lg relative z-20"
          />
        </span>
        <p
          onMouseLeave={handleHover}
          style={bgValue}
          className={`absolute z-20 w-full h-full top-0 p-2 transition-[right] duration-700 text-center flex justify-center bg-yellow-400 rounded-lg items-center text-2xl font-bold ${
            overlay
              ? "right-[520px] md:right-[390px] xl:right-[600px] "
              : "left-[0px]"
          }`}
        >
          {name}
        </p>
      </a>
    </>
  );
};

export default ProtfolioCard;
