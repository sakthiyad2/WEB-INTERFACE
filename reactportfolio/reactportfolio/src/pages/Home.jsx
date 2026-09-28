import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="home-page">

      <div className="home-content">

        <p className="home-intro">
          Hello, I'm
        </p>

        <h1>
          Sakthiya D
        </h1>

        <h2>
          AI & Data Science Student
        </h2>

        <p className="home-description">
          I am a B.Tech Artificial Intelligence and Data Science student
          interested in web development, UI/UX design and emerging technologies.
        </p>

        <div className="home-buttons">
          <Link to="/projects" className="btn primary-btn">
            View Projects
          </Link>

          <a href={`${import.meta.env.BASE_URL}resume.pdf`} className="btn secondary-btn" download>
            Download Resume
          </a>
        </div>

      </div>

    </section>
  );
}

export default Home;