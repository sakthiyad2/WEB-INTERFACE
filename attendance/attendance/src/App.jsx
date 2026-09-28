import { useState } from "react";
import Attendance from "./Attendance";
import "./App.css";

function App() {
  const [students, setStudents] = useState([
    { id: 1, name: "Sakthiya", status: "Absent" },
    { id: 2, name: "Nivedha", status: "Absent" },
    { id: 3, name: "Rajnandhini", status: "Absent" },
    { id: 4, name: "Dharshini", status: "Absent" },
    { id: 5, name: "Malathy", status: "Absent" },
    { id: 6, name: "Saranya", status: "Absent"},
    { id: 7, name: "Santha", status: "Absent"},
    { id: 8, name: "Dellibabu", status: "Absent"},
    { id: 9, name: "Charan", status: "Absent"},
    { id: 10, name: "Lakshit", status: "Absent"},
    { id: 11, name: "Pradeepa", status: "Absent"},
    { id: 12, name: "Tharun D", status: "Absent"},
    { id: 13, name: "Pooja", status: "Absent"},
    { id: 14, name: "Priya", status: "Absent"},
    { id: 15, name: "Padma", status: "Absent"},
    { id: 16, name: "Deepika", status: "Absent"},
    { id: 17, name: "Haripriya", status: "Absent"},
    { id: 18, name: "Priyadharshini", status: "Absent"},
    { id: 19, name: "Ajith Kumar", status: "Absent"},
    { id: 20, name: "Vijay", status: "Absent"}
  ]);

  const markAttendance = (id, status) => {
    setStudents(
      students.map((student) =>
        student.id === id
          ? { ...student, status: status }
          : student
      )
    );
  };

  const presentCount = students.filter(
    (student) => student.status === "Present"
  ).length;

  const absentCount = students.filter(
    (student) => student.status === "Absent"
  ).length;

  return (
    <div className="app">
      <h1>Student Attendance Tracker</h1>

      <div className="summary">
        <div className="summary-card">
          <h2>{students.length}</h2>
          <p>Total Students</p>
        </div>

        <div className="summary-card">
          <h2>{presentCount}</h2>
          <p>Present</p>
        </div>

        <div className="summary-card">
          <h2>{absentCount}</h2>
          <p>Absent</p>
        </div>
      </div>

      <div className="student-list">
        {students.map((student) => (
          <Attendance
            key={student.id}
            student={student}
            markAttendance={markAttendance}
          />
        ))}
      </div>
    </div>
  );
}

export default App;