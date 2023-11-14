import { Routes, Route } from 'react-router-dom'
import AuthPage from './pages/Authpage/AuthPage'
import Main from './pages/Main/Main'
import Profile from './pages/profile'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/profile" element={<Profile />} />

      <Route path="/AuthPage" element={<AuthPage />} />
    </Routes>
  )
}
