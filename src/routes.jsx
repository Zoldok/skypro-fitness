import { Routes, Route } from 'react-router-dom'
import AuthPage from './components/Authpage/AuthPage'
import Header from './components/Header/Header'
import Profile from './pages/profile'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/AuthPage" element={<AuthPage />} />
      <Route path="/" element={<Header />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  )
}
