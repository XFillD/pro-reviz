import Navbar from "../components/Layout/Navbar";
import Hero from "../components/Sections/Hero";
import Footer from "../components/Layout/Footer";
import Cards from "../components/Sections/Cards";
import Portfolio from "../components/Sections/Portfolio";
// import UnderConstruction from "./components/UnderConstruction";s

function App() {
  return (
    <div >
    {/* className="bg-hero-img bg-cover bg-fixed" */}
      <Navbar />
      <Hero />
      <Cards />
      <hr className="border-black border-solid" />
      <Portfolio />
      <Footer />
      {/* <UnderConstruction /> */}
    </div>
  );
}

export default App;