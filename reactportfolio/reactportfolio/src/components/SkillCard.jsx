function SkillCard({ skill }) {
  return (
    <div className="skill-card">
      <div className="skill-icon" aria-hidden="true">
        {skill.icon}
      </div>
      <h3>{skill.name}</h3>
      <p>{skill.level}</p>
    </div>
  )
}

export default SkillCard
