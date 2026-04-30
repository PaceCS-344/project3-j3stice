import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";

function Navbar({ searchTerm, setSearchTerm }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "skills", "projects", "contact"];

      sections.forEach((section) => {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop - 180;
          const bottom = top + el.offsetHeight;

          if (window.scrollY >= top && window.scrollY < bottom) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSearch = (value) => {
    setSearchTerm(value);

    const lower = value.toLowerCase();

    if (lower.includes("about")) {
      document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
    } else if (lower.includes("skill")) {
      document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" });
    } else if (lower.includes("project") || lower.includes("api") || lower.includes("react")) {
      document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
    } else if (lower.includes("contact")) {
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="navbar">
      <h2 className="logo">JB.</h2>

      <div className={`nav-links ${menuOpen ? "open" : ""}`}>
        <a className={activeSection === "about" ? "active-nav" : ""} href="#about">About</a>
        <a className={activeSection === "skills" ? "active-nav" : ""} href="#skills">Skills</a>
        <a className={activeSection === "projects" ? "active-nav" : ""} href="#projects">Projects</a>
        <a className={activeSection === "contact" ? "active-nav" : ""} href="#contact">Contact</a>

        <input
          className="search-bar"
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => handleSearch(e.target.value)}
        />

        <ThemeToggle />
      </div>

      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>
    </nav>
  );
}

export default Navbar;