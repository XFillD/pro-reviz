import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Cards from "./components/Cards";
import Portfolio from "./components/Portfolio";
import UnderConstruction from "./components/UnderConstruction";

function App() {
  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-700">
      <Navbar />
      <Hero />
      <Cards />
      <hr className="border-black border-solid" />
      <Portfolio />
      <Footer />
    </div>
  );
}

export default App;
