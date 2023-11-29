import { Routes, Route } from 'react-router-dom'
import Profile from './pages/profile'

import Acquaint from './pages/acquaint/acquaint'
import AuthPage from './pages/Authpage/AuthPage'
import ProtectedRoute from './components/ProtectedRoute/protected-route'
import Main from './pages/Main/Main'
import TrainingPage from './pages/training/training'

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<ProtectedRoute />}>
        <Route path="/profile" element={<Profile />} />
      </Route>
      <Route path="/" element={<Main />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/acquaint/:courseName" element={<Acquaint />} />
      <Route path="/TrainingPage/:id" element={<TrainingPage />} />
      <Route path="/acquaint" element={<Acquaint />} />
      <Route path="/login" element={<AuthPage isLoginMode={false} />} />
      <Route path="/register" element={<AuthPage isLoginMode />} />
    </Routes>
  )
}