function About(props) {
  return (
    <section className="about-section">
      <h2>About Me</h2>
      <p>{props.introduction}</p>
    </section>
  );
}

export default About;