import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../context/useAuth'
import Loading from './Loading'

export default function ProtectedRoute({ role }) {
  const { user, ready } = useAuth()
  if (!ready) return <Loading label="Restoring your session" />
  if (!user) return <Navigate to="/login" replace />
  if (user.role !== role) return <Navigate to={user.role === 'admin' ? '/admin' : '/student'} replace />
  return <Outlet />
}
