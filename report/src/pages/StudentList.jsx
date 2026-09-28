import { useMemo, useState } from 'react'
import { Plus, Search, X } from 'lucide-react'
import { useAuth } from '../context/useAuth'
import StudentTable from '../components/StudentTable'
import { calculateSemester } from '../data/students'

const emptyForm = { registerNumber: '', name: '', dob: '', department: '', year: '1st Year', semester1Subjects: '[]', semester1Cgpa: '0', semester2Subjects: '[]', semester2Cgpa: '0' }
const toForm = (student) => ({
  registerNumber: student.registerNumber, name: student.name, dob: student.dob, department: student.department, year: student.year,
  semester1Subjects: JSON.stringify(student.semester1?.subjects || [], null, 2), semester1Cgpa: String(student.semester1?.cgpa || 0),
  semester2Subjects: JSON.stringify(student.semester2?.subjects || [], null, 2), semester2Cgpa: String(student.semester2?.cgpa || 0),
})

export default function StudentList() {
  const { students, addStudent, updateStudent, deleteStudent } = useAuth()
  const [search, setSearch] = useState('')
  const [editing, setEditing] = useState(null)
  const [modalOpen, setModalOpen] = useState(false)
  const [form, setForm] = useState(emptyForm)
  const [error, setError] = useState('')
  const filtered = useMemo(() => students.filter((student) => `${student.registerNumber} ${student.name}`.toLowerCase().includes(search.toLowerCase())), [students, search])

  const openForm = (student = null) => { setEditing(student); setForm(student ? toForm(student) : { ...emptyForm }); setError(''); setModalOpen(true) }
  const closeForm = () => setModalOpen(false)
  const remove = (student) => { if (window.confirm(`Delete ${student.name} (${student.registerNumber})?`)) deleteStudent(student.registerNumber) }
  const setField = (key, value) => setForm((current) => ({ ...current, [key]: value }))
  const handleSubmit = (event) => {
    event.preventDefault()
    try {
      const next = {
        registerNumber: form.registerNumber.trim(), name: form.name.trim(), dob: form.dob.trim(),
        department: form.department.trim(), year: form.year,
        semester1: calculateSemester(JSON.parse(form.semester1Subjects), form.semester1Cgpa),
        semester2: calculateSemester(JSON.parse(form.semester2Subjects), form.semester2Cgpa),
      }
      if (!next.registerNumber || !next.name || !next.dob || !next.department) { setError('Complete all student details.'); return }
      if (!editing && students.some((item) => item.registerNumber.toLowerCase() === next.registerNumber.toLowerCase())) { setError('A student with this register number already exists.'); return }
      if (editing) updateStudent(editing.registerNumber, next)
      else addStudent(next)
      closeForm()
    } catch {
      setError('Semester subjects must be valid JSON arrays of subject records.')
    }
  }

  return <>
    <div className="page-heading"><div><p className="eyebrow">Administration</p><h1>Student records</h1><p className="subtitle">Add students, maintain marks, and review academic reports.</p></div><button className="button primary" onClick={() => openForm()}><Plus size={16} /> Add student</button></div>
    <section className="panel"><div className="panel-heading"><h2>All students <span className="student-reg">({filtered.length})</span></h2><label className="search-box"><Search size={16} /><input aria-label="Search by register number or student name" value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search name or register number" /></label></div>
      <StudentTable students={filtered} onEdit={openForm} onDelete={remove} />
    </section>
    {modalOpen && <StudentEditor title={editing ? 'Edit student' : 'Add student'} form={form} error={error} setField={setField} onSubmit={handleSubmit} onClose={closeForm} />}
  </>
}

function StudentEditor({ title, form, error, setField, onSubmit, onClose }) {
  const readOnlyRegister = title.startsWith('Edit')
  return <div className="modal-backdrop" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose() }}>
    <form className="panel modal" onSubmit={onSubmit}>
      <div className="modal-top"><div><h2>{title}</h2><p>Student profile and semester marks</p></div><button type="button" className="icon-button" onClick={onClose} aria-label="Close"><X size={17} /></button></div>
      {error && <div className="form-error" role="alert">{error}</div>}
      <div className="form-grid">
        <Field label="Register number" value={form.registerNumber} onChange={(value) => setField('registerNumber', value)} required readOnly={readOnlyRegister} />
        <Field label="Student name" value={form.name} onChange={(value) => setField('name', value)} required />
        <Field label="Date of birth" value={form.dob} onChange={(value) => setField('dob', value)} placeholder="DD/MM/YYYY" required />
        <Field label="Department" value={form.department} onChange={(value) => setField('department', value)} required />
        <div className="field"><label htmlFor="year">Year</label><select id="year" value={form.year} onChange={(event) => setField('year', event.target.value)}>{['1st Year', '2nd Year', '3rd Year', '4th Year'].map((year) => <option key={year}>{year}</option>)}</select></div>
      </div>
      <div className="form-section-title">Semester 1 results</div>
      <div className="form-grid"><Field label="Subjects (JSON array)" value={form.semester1Subjects} onChange={(value) => setField('semester1Subjects', value)} multiline /><Field label="CGPA" value={form.semester1Cgpa} onChange={(value) => setField('semester1Cgpa', value)} inputMode="decimal" /></div>
      <div className="form-section-title">Semester 2 results</div>
      <div className="form-grid"><Field label="Subjects (JSON array)" value={form.semester2Subjects} onChange={(value) => setField('semester2Subjects', value)} multiline /><Field label="CGPA" value={form.semester2Cgpa} onChange={(value) => setField('semester2Cgpa', value)} inputMode="decimal" /></div>
      <div className="form-help">Subject records use <strong>code, name, internal, external, total, grade</strong>. Totals and percentage are calculated when saved.</div>
      <div className="modal-actions"><button type="button" className="button" onClick={onClose}>Cancel</button><button className="button primary" type="submit">Save student</button></div>
    </form>
  </div>
}

function Field({ label, value, onChange, required = false, readOnly = false, placeholder, multiline = false, inputMode }) {
  const id = `field-${label.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`
  return <div className="field"><label htmlFor={id}>{label}</label>{multiline ? <textarea id={id} value={value} onChange={(event) => onChange(event.target.value)} /> : <input id={id} value={value} onChange={(event) => onChange(event.target.value)} required={required} readOnly={readOnly} placeholder={placeholder} inputMode={inputMode} />}</div>
}
