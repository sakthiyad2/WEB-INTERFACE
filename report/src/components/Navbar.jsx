import { BookOpen, LogOut } from 'lucide-react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/useAuth'

export default function Navbar() {
  const { user, logout } = useAuth()
  const navigate = useNavigate()
  const signOut = () => { logout(); navigate('/login', { replace: true }) }
  return <header className="topbar"><div className="topbar-inner">
    <NavLink className="brand" to={user?.role === 'admin' ? '/admin' : user ? '/student' : '/login'}>
      <span className="brand-mark"><BookOpen size={20} /></span>
      <span className="brand-name">ACADEMIC PORTAL<span className="brand-subtitle">Student results & records</span></span>
    </NavLink>
    {user && <nav className="nav-links" aria-label="Main navigation">{user.role === 'admin' ? <>
      <NavLink to="/admin">Overview</NavLink><NavLink to="/admin/students">Students</NavLink>
    </> : <>
      <NavLink to="/student">Overview</NavLink><NavLink to="/student/semester/1">Semester 1</NavLink><NavLink to="/student/semester/2">Semester 2</NavLink><NavLink to="/student/report">Full report</NavLink>
    </>}</nav>}
    {user && <div className="nav-user"><span className="user-chip">{user.name}<small>{user.role === 'admin' ? 'Administrator' : user.registerNumber}</small></span><button className="icon-button" type="button" onClick={signOut} title="Log out" aria-label="Log out"><LogOut size={17} /></button></div>}
  </div></header>
}
