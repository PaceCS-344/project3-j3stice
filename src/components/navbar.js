import ThemeToggle from "./ThemeToggle";

function Navbar() {
    return (
      <nav className="navbar">
        <h2 className="logo">JB.</h2>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <ThemeToggle />
      </nav>
    );
  }
  
  export default Navbar;