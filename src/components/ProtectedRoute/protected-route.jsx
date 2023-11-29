import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoute = ({ redirectPath = '/' }) => {
  const user = localStorage.getItem('userEmail')
  if (!user) {
    return <Navigate to={redirectPath} replace={true} />
  }

  return <Outlet />
}
export default ProtectedRoute
