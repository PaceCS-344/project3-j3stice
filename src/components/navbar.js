import ThemeToggle from "./ThemeToggle";

function Navbar({ searchTerm, setSearchTerm }) {
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

      <div className="nav-links">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>

      <input
        className="search-bar"
        type="text"
        placeholder="Search portfolio..."
        value={searchTerm}
        onChange={(e) => handleSearch(e.target.value)}
      />

      <ThemeToggle />
    </nav>
  );
}

export default Navbar;