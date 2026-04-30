import Projects from "./Projects";
import Skills from "./Skills";

function FeaturedSection({ searchTerm }) {
  return (
    <section className="featured-grid">
      <div className="featured-left">
        <Skills />
      </div>

      <div className="featured-right">
        <Projects searchTerm={searchTerm} />
      </div>
    </section>
  );
}

export default FeaturedSection;