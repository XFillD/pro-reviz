import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Cards from "./components/Cards";
import Portfolio from "./components/Portfolio";
import { useInView } from "react-intersection-observer";
import { Transition } from "@headlessui/react";
import UnderConstruction from "./components/UnderConstruction";

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

function App() {
  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-700">
      {/* <Navbar />
      <Hero />
      <Cards />
      <hr className="border-black border-solid" />
      <Portfolio />
      <Footer />  */}
      <UnderConstruction />
    </div>
  );
}

export default App;
