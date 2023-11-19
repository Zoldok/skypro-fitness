import { Routes, Route } from 'react-router-dom'
import Profile from './pages/profile'

import Acquaint from './pages/acquaint/acquaint'
import AuthPage from './pages/Authpage/AuthPage'
import Main from './pages/main/Main'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/profile" element={<Profile />} />

      <Route path="/acquaint/:courseName" element={<Acquaint />} />
      {/* <Route path="/AuthPage" element={<AuthPage />} /> */}

      <Route path="/acquaint" element={<Acquaint />} />
      <Route path="/login" element={<AuthPage isLoginMode={false} />} />
      <Route path="/register" element={<AuthPage isLoginMode />} />

    </Routes>
  )
}
