function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <img src={project.image} alt={project.title} />
      <div className="project-content">
        <span className="project-tag">{project.category}</span>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <ul className="stack-list">
          {project.stack.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <div className="project-actions">
          <a href={project.liveLink} target="_blank" rel="noreferrer">
            Live Demo
          </a>
          <a href={project.codeLink} target="_blank" rel="noreferrer">
            Source Code
          </a>
        </div>
      </div>
    </article>
  )
}

export default ProjectCard
