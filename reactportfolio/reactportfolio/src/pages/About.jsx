function About() {
  return (
    <section className="about-page">

      <div className="page-container">

        <h1>About Me</h1>

        <div className="about-profile">

          <div className="profile-image-container">
            <img
              src={`${import.meta.env.BASE_URL}profile.png`}
              alt="Sakthiya D"
              className="profile-image"
            />
          </div>

          <div className="about-intro">

            <h2>Hello, I'm Sakthiya D</h2>

            <p>
              I am a B.Tech Artificial Intelligence and Data Science student
              with an interest in web development, UI/UX design and
              emerging technologies.
            </p>

            <p>
              I enjoy building practical projects and learning new
              technologies through hands-on development.
            </p>

          </div>

        </div>

        <div className="about-grid">

          <div className="about-card">
            <h2>Education</h2>

            <div className="education-item">
              <h3>B.Tech Artificial Intelligence & Data Science</h3>
              <p>
                Prince Dr. K. Vasudevan College of Engineering & Technology
              </p>
            </div>
          </div>

          <div className="about-card">
            <h2>Technical Skills</h2>

            <div className="skills-list">
              <span className="skill-item">Java</span>
              <span className="skill-item">Python</span>
              <span className="skill-item">HTML</span>
              <span className="skill-item">CSS</span>
              <span className="skill-item">JavaScript</span>
              <span className="skill-item">React</span>
              <span className="skill-item">MySQL</span>
              <span className="skill-item">UI/UX Design</span>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}

export default About;