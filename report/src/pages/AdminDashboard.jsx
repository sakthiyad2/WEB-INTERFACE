import { BookOpenCheck, GraduationCap, Users } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/useAuth'
import StudentTable from '../components/StudentTable'
import { getResultStatus } from '../data/students'

export default function AdminDashboard() {
  const { students } = useAuth()
  const sem1Count = students.filter((student) => getResultStatus(student.semester1) === 'PASS').length
  const sem2Count = students.filter((student) => getResultStatus(student.semester2) === 'PASS').length
  return <>
    <div className="page-heading"><div><p className="eyebrow">Administration</p><h1>Admin dashboard</h1><p className="subtitle">Student records and semester result overview.</p></div><Link className="button primary" to="/admin/students">Manage students</Link></div>
    <div className="dashboard-grid"><Metric label="Total students" value={students.length} Icon={Users} /><Metric label="Semester 1 results" value={`${sem1Count} / ${students.length}`} Icon={BookOpenCheck} /><Metric label="Semester 2 results" value={`${sem2Count} / ${students.length}`} Icon={GraduationCap} /></div>
    <section className="panel"><div className="panel-heading"><h2>Student records</h2><Link className="button small" to="/admin/students">View all students</Link></div><StudentTable students={students.slice(0, 5)} showActions={false} /></section>
  </>
}

function Metric({ label, value, Icon }) {
  return <section className="panel metric"><div><div className="metric-label">{label}</div><div className="metric-value">{value}</div></div><span className="metric-icon"><Icon size={20} /></span></section>
}
