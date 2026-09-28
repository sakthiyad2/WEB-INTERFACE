import { Navigate, Route, Routes } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import { useAuth } from './context/useAuth'
import ProtectedRoute from './components/ProtectedRoute'
import Navbar from './components/Navbar'
import Loading from './components/Loading'
import Login from './pages/Login'
import AdminDashboard from './pages/AdminDashboard'
import StudentList from './pages/StudentList'
import StudentDashboard from './pages/StudentDashboard'
import StudentReport from './pages/StudentReport'
import Semester1 from './pages/Semester1'
import Semester2 from './pages/Semester2'
import './App.css'

function HomeRedirect() {
  const { user, ready } = useAuth()
  if (!ready) return <Loading label="Restoring your session" />
  if (!user) return <Navigate to="/login" replace />
  return <Navigate to={user.role === 'admin' ? '/admin' : '/student'} replace />
}

function AppRoutes() {
  return <>
    <Navbar />
    <main className="app-main"><Routes>
      <Route path="/" element={<HomeRedirect />} />
      <Route path="/login" element={<Login />} />
      <Route element={<ProtectedRoute role="admin" />}>
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/students" element={<StudentList />} />
        <Route path="/admin/student/:registerNumber" element={<StudentReport adminView />} />
      </Route>
      <Route element={<ProtectedRoute role="student" />}>
        <Route path="/student" element={<StudentDashboard />} />
        <Route path="/student/semester/1" element={<Semester1 />} />
        <Route path="/student/semester/2" element={<Semester2 />} />
        <Route path="/student/report" element={<StudentReport />} />
      </Route>
      <Route path="*" element={<HomeRedirect />} />
    </Routes></main>
    <footer className="site-footer">Prince Dr. K. Vasudevan College of Engineering and Technology <span>·</span> Student portal</footer>
  </>
}

function App() {
  return <AuthProvider><AppRoutes /></AuthProvider>
}

export default App
