import React, { useState } from "react";
import Typed from "react-typed";
import revizLogo from "../assets/revizLogo.png";

const Hero = () => {
  const [colorIndex, setColorIndex] = useState(0);

  const colorClasses = ["text-blue-400", "text-red-500", "text-yellow-200"];

  const strings = ["VODA", "TOPENÍ", "PLYN"];

  const getTypedString = (string, index) => {
    const colorClass = colorClasses[index % colorClasses.length];
    return `<span class="${colorClass}">${string}</span>`;
  };
  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col items-center justify-center">
        <p className="text-[#00df9a] font-bold p-2">NEJLEPŠÍ REVIZE V PRAZE</p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
          Pro-reviz
        </h1>
        <div className="flex justify-center items-center">
          <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4">
            Revize pro
          </p>
          <Typed
            className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2"
            strings={strings.map((string, index) =>
              getTypedString(string, index)
            )}
            typeSpeed={100}
            backSpeed={120}
            loop
            onComplete={() => setColorIndex(colorIndex + 1)}
          />
        </div>
        <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black">
          KOJOT
        </button>
      </div>
    </div>
  );
};

export default Hero;
