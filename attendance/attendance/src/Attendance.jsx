function Attendance({ student, markAttendance }) {
  return (
    <div className="student-card">
      <div>
        <h3>{student.name}</h3>
        <p>
          Status: <strong>{student.status}</strong>
        </p>
      </div>

      <div className="buttons">
        <button
          className="present-btn"
          onClick={() => markAttendance(student.id, "Present")}
        >
          Present
        </button>

        <button
          className="absent-btn"
          onClick={() => markAttendance(student.id, "Absent")}
        >
          Absent
        </button>
      </div>
    </div>
  );
}

export default Attendance;