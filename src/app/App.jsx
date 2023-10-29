import Navbar from "../components/Layout/Navbar";
import Hero from "../components/Sections/Hero";
import Footer from "../components/Layout/Footer";
import Cards from "../components/Sections/Cards";
import Portfolio from "../components/Sections/Portfolio";
// import UnderConstruction from "./components/UnderConstruction";s

function App() {
    return (
        <main>
            <Navbar />
            <Hero />
            <Cards />
            <Portfolio />
            <Footer />
            {/* <UnderConstruction /> */}
        </main>
    );
}

export default App;
