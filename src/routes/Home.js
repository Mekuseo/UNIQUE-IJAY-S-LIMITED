import Navbar from "../components/Navbar";
import HomeHero from "../components/HomeHero";
import Destination from "../components/Destination";
import Footer from "../components/Footer";
import Trip from "src/components/Trip";

function Home() {
  return (
    <>
      <Navbar />
      <HomeHero
        cName="hero"
        heroImg="https://images.unsplash.com/photo-1516199423456-1f1e91b06f25?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1449&q=80"
        title="Powering Progress Through Innovation and Expertise."
        text="Your partner in energy production and exploration."
        btnClass="show"
        buttonText="Contact Us"
        url="/contact"
      />
      <Destination />
      <Trip />
      <Footer />
    </>
  );
}

export default Home;
