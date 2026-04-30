import { useEffect, useState } from "react";
import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import CursorGlow from "./components/CursorGlow";
import FeaturedSection from "./components/FeaturedSection";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Stats from "./components/Stats";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", updateScroll);
    return () => window.removeEventListener("scroll", updateScroll);
  }, []);

  return (
    <div>
      <Loader />
      <div
        className="scroll-progress"
        style={{ width: `${scrollProgress}%` }}
      ></div>

      <CursorGlow />

      <div className="bg-glow glow-one"></div>
      <div className="bg-glow glow-two"></div>

      <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Hero />
      <Stats />
      <About />
      <FeaturedSection searchTerm={searchTerm} />
      <Contact />
      <Footer />

    </div>
  );
}

export default App;

