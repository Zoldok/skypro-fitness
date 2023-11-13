
import { Routes, Route } from 'react-router-dom'
import Profile from './pages/profile'
import Main from './pages/Main/Main'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  )
}
