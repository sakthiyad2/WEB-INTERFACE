import { ArrowRight, GraduationCap } from 'lucide-react'
import { Link, Navigate } from 'react-router-dom'
import { useAuth } from '../context/useAuth'
import { getResultStatus } from '../data/students'

export default function StudentDashboard() {
  const { user, students } = useAuth()
  const student = students.find((item) => item.registerNumber === user?.registerNumber)
  if (!student) return <Navigate to="/login" replace />
  return <>
    <section className="welcome-band"><div><p className="eyebrow">Student overview</p><h1>Welcome, {student.name}</h1><p className="subtitle">{student.registerNumber} · {student.department}</p></div><span className="welcome-monogram">{student.name.split(' ').map((part) => part[0]).slice(0, 2).join('')}</span></section>
    <div className="semester-grid"><SemesterSummary number="01" title="Semester 1" term={student.semester1} link="/student/semester/1" /><SemesterSummary number="02" title="Semester 2" term={student.semester2} link="/student/semester/2" /></div>
    <div className="page-heading"><div><p className="eyebrow">Academic record</p><h2>Your report card</h2><p className="subtitle">Review subject-wise marks and semester summaries.</p></div><Link className="button primary" to="/student/report">View full report <ArrowRight size={15} /></Link></div>
    <section className="panel metric"><div><div className="metric-label">Current academic year</div><div className="metric-value">{student.year}</div></div><span className="metric-icon"><GraduationCap size={20} /></span></section>
  </>
}

function SemesterSummary({ number, title, term, link }) {
  const status = getResultStatus(term)
  const creditBased = term?.subjects?.some((item) => item.credits != null)
  const credits = term?.subjects?.reduce((sum, item) => sum + Number(item.credits || 0), 0)
  return <section className="panel semester-card"><div className="semester-card-head"><div><span className="semester-number">Semester {number}</span><h2>{title}</h2></div><span className={`result-badge ${status === 'FAIL' ? 'fail' : ''}`}>{status}</span></div>
    <div className="semester-stats"><div><span className="stat-label">CGPA</span><strong className="stat-value">{term?.cgpa ?? '—'}</strong></div><div><span className="stat-label">Percentage</span><strong className="stat-value">{term?.percentage == null ? '—' : `${term.percentage}%`}</strong></div><div><span className="stat-label">{creditBased ? 'Credits' : 'Total marks'}</span><strong className="stat-value">{creditBased ? credits : term?.total ?? '—'}</strong></div></div>
    <Link className="button" to={link}>View semester results <ArrowRight size={14} /></Link>
  </section>
}
