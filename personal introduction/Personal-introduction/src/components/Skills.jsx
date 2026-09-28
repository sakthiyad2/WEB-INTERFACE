function Skills(props) {
  return (
    <section className="skills-section">
      <h2>Technical Skills</h2>

      <ul className="skills-list">
        {props.skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;