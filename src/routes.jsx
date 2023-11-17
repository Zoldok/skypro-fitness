import { Routes, Route } from 'react-router-dom'
import Profile from './pages/profile'
import Main from './pages/main/Main'
import Acquaint from './pages/acquaint/acquaint'
import AuthPage from './pages/Authpage/AuthPage'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/acquaint" element={<Acquaint />} />
      <Route path="/login" element={<AuthPage isLoginMode={false} />} />
      <Route path="/register" element={<AuthPage isLoginMode />} />
    </Routes>
  )
}
