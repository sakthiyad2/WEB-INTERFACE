import { useEffect, useState } from 'react'
import { AuthContext } from './useAuth'
import { calculateSemester, seedStudents } from '../data/students'

const STUDENTS_KEY = 'reportCardStudents'
const SESSION_KEY = 'loggedInUser'
const DATA_VERSION_KEY = 'reportCardDataVersion'
const normalizeDate = (value) => String(value).replace(/[^0-9]/g, '')

export function AuthProvider({ children }) {
  const [students, setStudents] = useState(seedStudents)
  const [user, setUser] = useState(null)
  const [ready, setReady] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    let active = true
    Promise.resolve().then(() => {
      if (!active) return
      try {
        const savedStudents = localStorage.getItem(STUDENTS_KEY)
        const savedSession = localStorage.getItem(SESSION_KEY)
        if (savedStudents) {
          const restoredStudents = JSON.parse(savedStudents)
          if (Number(localStorage.getItem(DATA_VERSION_KEY) || 0) < 6) {
            const sample = restoredStudents.find((item) => item.registerNumber === '411625243044')
            const updatedSample = seedStudents.find((item) => item.registerNumber === '411625243044')
            if (sample && updatedSample) {
              sample.year = updatedSample.year
              sample.semester1 = updatedSample.semester1
              sample.semester2 = updatedSample.semester2
            }
            localStorage.setItem(DATA_VERSION_KEY, '6')
          }
          setStudents(restoredStudents)
        } else localStorage.setItem(DATA_VERSION_KEY, '6')
        if (savedSession) setUser(JSON.parse(savedSession))
      } catch {
        localStorage.removeItem(SESSION_KEY)
      } finally {
        setReady(true)
      }
    })
    return () => { active = false }
  }, [])

  useEffect(() => {
    if (ready) localStorage.setItem(STUDENTS_KEY, JSON.stringify(students))
  }, [students, ready])

  const login = async (username, password) => {
    setLoading(true)
    await new Promise((resolve) => window.setTimeout(resolve, 300))
    let nextUser = null
    if (username.trim().toLowerCase() === 'admin' && password === 'admin123') {
      nextUser = { role: 'admin', name: 'Portal Administrator' }
    } else {
      const student = students.find((item) => item.registerNumber.toLowerCase() === username.trim().toLowerCase())
      if (student && normalizeDate(student.dob) === normalizeDate(password)) {
        nextUser = { role: 'student', registerNumber: student.registerNumber, name: student.name }
      }
    }
    if (nextUser) {
      localStorage.setItem(SESSION_KEY, JSON.stringify(nextUser))
      setUser(nextUser)
    }
    setLoading(false)
    return Boolean(nextUser)
  }

  const logout = () => { localStorage.removeItem(SESSION_KEY); setUser(null) }
  const addStudent = (student) => setStudents((current) => [...current, student])
  const updateStudent = (registerNumber, updates) => setStudents((current) => current.map((item) => item.registerNumber === registerNumber ? { ...item, ...updates } : item))
  const deleteStudent = (registerNumber) => setStudents((current) => current.filter((item) => item.registerNumber !== registerNumber))
  const saveSemester = (registerNumber, semesterKey, subjects, cgpa) => updateStudent(registerNumber, { [semesterKey]: calculateSemester(subjects, cgpa) })

  return <AuthContext.Provider value={{ students, user, ready, loading, login, logout, addStudent, updateStudent, deleteStudent, saveSemester }}>{children}</AuthContext.Provider>
}

