import { ArrowLeft } from 'lucide-react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { useAuth } from '../context/useAuth'
import ReportCard from '../components/ReportCard'

export default function StudentReport({ adminView = false, semesterKey }) {
  const { students, user } = useAuth()
  const { registerNumber } = useParams()
  const student = students.find((item) => item.registerNumber === (adminView ? registerNumber : user?.registerNumber))
  if (!student) return <Navigate to={adminView ? '/admin/students' : '/student'} replace />
  return <>
    <Link className="back-link" to={adminView ? '/admin/students' : '/student'}><ArrowLeft size={15} /> {adminView ? 'Back to students' : 'Back to dashboard'}</Link>
    <div className="page-heading"><div><p className="eyebrow">{adminView ? 'Administrative record' : 'Academic record'}</p><h1>{adminView ? `${student.name} · ${student.registerNumber}` : 'Student report card'}</h1></div></div>
    <ReportCard student={student} semesterKey={semesterKey} />
  </>
}
