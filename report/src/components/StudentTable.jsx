import { Eye, Pencil, Trash2 } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function StudentTable({ students, onEdit, onDelete, showActions = true }) {
  if (!students.length) return <div className="empty-state">No students match your search.</div>
  return <div className="table-wrap"><table>
    <thead><tr><th>Register no.</th><th>Name</th><th>Department</th><th>Year</th>{showActions && <th>Actions</th>}</tr></thead>
    <tbody>{students.map((student) => <tr key={student.registerNumber}>
      <td><strong>{student.registerNumber}</strong></td><td>{student.name}</td><td>{student.department}</td><td>{student.year}</td>
      {showActions && <td><div className="row-actions">
        <Link className="icon-button" title="View report" aria-label={`View ${student.name} report`} to={`/admin/student/${encodeURIComponent(student.registerNumber)}`}><Eye size={15} /></Link>
        <button className="icon-button" title="Edit student" aria-label={`Edit ${student.name}`} onClick={() => onEdit(student)}><Pencil size={15} /></button>
        <button className="icon-button" title="Delete student" aria-label={`Delete ${student.name}`} onClick={() => onDelete(student)}><Trash2 size={15} /></button>
      </div></td>}
    </tr>)}</tbody>
  </table></div>
}
