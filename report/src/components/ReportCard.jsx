import { getResultStatus } from '../data/students'

function SemesterSection({ term, title }) {
  const subjects = term?.subjects || []
  const status = getResultStatus(term)
  const creditBased = subjects.some((item) => item.credits != null)
  const credits = subjects.reduce((sum, item) => sum + Number(item.credits || 0), 0)
  return <section className="panel report-section">
    <div className="report-section-title"><h2>{title}</h2><span className={`result-badge ${status === 'FAIL' ? 'fail' : ''}`}>{status}</span></div>
    {subjects.length ? <div className="table-wrap"><table>
      <thead><tr>{creditBased ? <><th>Semester</th><th>Course code</th><th>Course name</th><th>Credits</th><th>Grade</th><th>Result</th></> : <><th>Subject code</th><th>Subject name</th><th>Internal</th><th>External</th><th>Total</th><th>Grade</th></>}</tr></thead>
      <tbody>{subjects.map((item) => <tr key={item.code}>{creditBased ? <><td>{item.semester || '2SEM'}</td><td>{item.code}</td><td>{item.name}</td><td>{item.credits}</td><td>{item.grade || '—'}</td><td>{item.result || '—'}</td></> : <><td>{item.code}</td><td>{item.name}</td><td>{item.internal}</td><td>{item.external}</td><td><strong>{item.total}</strong></td><td>{item.grade || '—'}</td></>}</tr>)}</tbody>
    </table></div> : <div className="empty-state">Results have not been published for this semester.</div>}
    <div className="report-summary">
      <div><span className="stat-label">{creditBased ? 'Credits earned' : 'Total marks'}</span><strong className="stat-value">{creditBased ? credits : term?.total ?? '—'}</strong></div>
      <div><span className="stat-label">Percentage</span><strong className="stat-value">{term?.percentage == null ? '—' : `${term.percentage}%`}</strong></div>
      <div><span className="stat-label">CGPA</span><strong className="stat-value">{term?.cgpa ?? '—'}</strong></div>
      <div><span className="stat-label">Result status</span><strong className="stat-value">{status}</strong></div>
    </div>
  </section>
}

export default function ReportCard({ student, semesterKey }) {
  const single = semesterKey === 'semester1' || semesterKey === 'semester2'
  const heading = semesterKey === 'semester1' ? 'Semester 1' : 'Semester 2'
  return <article className="report-card">
    <header className="panel report-header"><p className="eyebrow">Official student record</p><div className="college-title">PRINCE DR. K. VASUDEVAN COLLEGE OF ENGINEERING AND TECHNOLOGY</div><p>{single ? `${heading} Academic Result` : 'Student Academic Report Card'}</p></header>
    <section className="panel student-info">
      <div className="info-item"><span>Student name</span><strong>{student.name}</strong></div>
      <div className="info-item"><span>Register number</span><strong>{student.registerNumber}</strong></div>
      <div className="info-item"><span>Department</span><strong>{student.department}</strong></div>
      <div className="info-item"><span>Year</span><strong>{student.year}</strong></div>
      <div className="info-item"><span>Date of birth</span><strong>{student.dob}</strong></div>
    </section>
    {(!single || semesterKey === 'semester1') && <SemesterSection term={student.semester1} title="Semester 1" />}
    {(!single || semesterKey === 'semester2') && <SemesterSection term={student.semester2} title="Semester 2" />}
  </article>
}
