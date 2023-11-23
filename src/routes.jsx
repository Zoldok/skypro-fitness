import { Routes, Route } from 'react-router-dom'
import Profile from './pages/profile'
import Main from './pages/main/Main'
import Acquaint from './pages/acquaint/acquaint'
import AuthPage from './pages/Authpage/AuthPage'
import ProtectedRoute from './components/ProtectedRoute/protected-route'

export default function AppRoutes() {
  const user = localStorage.getItem('userEmail')
  return (
    <Routes>
      <Route element={<ProtectedRoute isAllowed={Boolean(user)} />}>
        <Route path="/profile" element={<Profile />} />
      </Route>
      <Route path="/" element={<Main />} />
      <Route path="/acquaint/:id" element={<Acquaint />} />
      <Route path="/acquaint" element={<Acquaint />} />
      <Route path="/login" element={<AuthPage isLoginMode={false} />} />
      <Route path="/register" element={<AuthPage isLoginMode />} />
    </Routes>
  )
}
