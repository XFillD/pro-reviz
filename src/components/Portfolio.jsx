import React from "react";
import { useInView } from "react-intersection-observer";
import { Transition } from "@headlessui/react";

const AnimatedComponent = ({ children }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-50px 0px",
    threshold: 0.1,
  });

  return (
    <div ref={ref}>
      <Transition
        show={inView}
        as="div"
        enter="transform transition-all duration-1000 ease-in-out"
        enterFrom="opacity-0 translate-y-full"
        enterTo="opacity-100 translate-y-0"
      >
        {children}
      </Transition>
    </div>
  );
};

const Portfolio = () => {
  return (
    <div className="w-full py-[10rem] px-4 bg-white" id="portf">
      <AnimatedComponent>
        <h1 className="text-4xl font-bold text-center mb-8">Portfolio</h1>
        <div className="container px-6 py-10 mx-auto">
          <p className="mt-4 text-center text-gray-500 dark:text-gray-300">
            Co jsme vytvořili
          </p>

          <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
            <div className="overflow-hidden bg-cover rounded-lg cursor-pointer h-96 group">
              <div className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-blue-800/60 group-hover:opacity-100">
                <h2 className="mt-4 text-xl font-semibold text-white capitalize"></h2>
                <p className="mt-2 text-lg tracking-wider text-blue-400 uppercase "></p>
              </div>
            </div>

            <div className="overflow-hidden bg-cover rounded-lg cursor-pointer h-96 group">
              <div className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-blue-800/60 group-hover:opacity-100">
                <h2 className="mt-4 text-xl font-semibold text-white capitalize"></h2>
                <p className="mt-2 text-lg tracking-wider text-blue-400 uppercase "></p>
              </div>
            </div>

            <div className="overflow-hidden bg-cover rounded-lg cursor-pointer h-96 group">
              <div className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-blue-800/60 group-hover:opacity-100">
                <h2 className="mt-4 text-xl font-semibold text-white capitalize"></h2>
                <p className="mt-2 text-lg tracking-wider text-blue-400 uppercase "></p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
            <div className="overflow-hidden bg-cover rounded-lg cursor-pointer h-96 group">
              <div className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-blue-800/60 group-hover:opacity-100">
                <h2 className="mt-4 text-xl font-semibold text-white capitalize"></h2>
                <p className="mt-2 text-lg tracking-wider text-blue-400 uppercase "></p>
              </div>
            </div>

            <div className="overflow-hidden bg-cover rounded-lg cursor-pointer h-96 group">
              <div className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-blue-800/60 group-hover:opacity-100">
                <h2 className="mt-4 text-xl font-semibold text-white capitalize"></h2>
                <p className="mt-2 text-lg tracking-wider text-blue-400 uppercase "></p>
              </div>
            </div>

            <div className="overflow-hidden bg-cover rounded-lg cursor-pointer h-96 group">
              <div className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-blue-800/60 group-hover:opacity-100">
                <h2 className="mt-4 text-xl font-semibold text-white capitalize"></h2>
                <p className="mt-2 text-lg tracking-wider text-blue-400 uppercase "></p>
              </div>
            </div>
          </div>
        </div>
      </AnimatedComponent>
    </div>
  );
};

export default Portfolio;
