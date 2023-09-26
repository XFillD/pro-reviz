import React from "react";

const Cards = () => {
  return (
    <div className="w-full py-[10rem] px-4 bg-white">
      <h1 className="text-4xl font-bold text-center mb-8">Naše služby</h1>
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 border border-black">
          <h2 className="text-2xl font-bold text-center py-8">Revize</h2>
          <p className="text-center text-4xl font-bold">$69</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">Instalace</p>
            <p className="py-2 border-b mx-8">Doprava</p>
            <p className="py-2 border-b mx-8">Odvoz</p>
          </div>
          <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">
            Beru
          </button>
        </div>
        <div className="w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300 border border-black">
          <h2 className="text-2xl font-bold text-center py-8">Trupky</h2>
          <p className="text-center text-4xl font-bold">$69</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">Instalace</p>
            <p className="py-2 border-b mx-8">Doprava</p>
            <p className="py-2 border-b mx-8">Odvoz</p>
          </div>
          <button className="bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">
            Beru
          </button>
        </div>
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 border border-black">
          <h2 className="text-2xl font-bold text-center py-8">Hovna</h2>
          <p className="text-center text-4xl font-bold">$69</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">Instalace</p>
            <p className="py-2 border-b mx-8">Doprava</p>
            <p className="py-2 border-b mx-8">Odvoz</p>
          </div>
          <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">
            Beru
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
