import { useState } from 'react'
import { ArrowRight, LockKeyhole, ShieldCheck } from 'lucide-react'
import { Navigate, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/useAuth'
import Loading from '../components/Loading'

export default function Login() {
  const { user, ready, loading, login } = useAuth()
  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  if (!ready) return <Loading label="Preparing sign in" />
  if (user) return <Navigate to={user.role === 'admin' ? '/admin' : '/student'} replace />

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (!username.trim() || !password.trim()) { setError('Enter both your register number and password.'); return }
    const success = await login(username, password)
    if (success) {
      const session = JSON.parse(localStorage.getItem('loggedInUser'))
      navigate(session.role === 'admin' ? '/admin' : '/student', { replace: true })
    } else setError('Those credentials do not match a student or administrator account.')
  }

  return <section className="login-shell">
    <div className="login-intro"><p className="eyebrow">Student services · Results</p><h1>Your academic progress, clearly presented.</h1><p>Sign in to review semester results, subject marks, and your academic summary from one college portal.</p><div className="login-side-note"><ShieldCheck size={19} /><span>Student access is limited to the report linked to your authenticated register number.</span></div></div>
    <form className="panel login-card" onSubmit={handleSubmit}>
      <h2>Sign in</h2><p>Use your college credentials to continue.</p>
      {error && <div className="form-error" role="alert">{error}</div>}
      <div className="field"><label htmlFor="username">Register number</label><input id="username" autoComplete="username" value={username} onChange={(event) => { setUsername(event.target.value); setError('') }} placeholder="e.g. 411625243044" /></div>
      <div className="field"><label htmlFor="password">Date of birth or password</label><input id="password" type="password" autoComplete="current-password" value={password} onChange={(event) => { setPassword(event.target.value); setError('') }} placeholder="DD/MM/YYYY" /></div>
      <button className="button primary full-width" type="submit" disabled={loading}>{loading ? 'Signing in…' : <>Continue <ArrowRight size={16} /></>}</button>
      <div className="form-help"><strong><LockKeyhole size={12} /> Demo access</strong><br />Admin: <strong>admin</strong> / <strong>admin123</strong><br />Student: <strong>411625243044</strong> / <strong>19/12/2007</strong></div>
    </form>
  </section>
}
