import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoute = ({ redirectPath = '/', isAllowed }) => {
  if (!isAllowed) {
    return <Navigate to={redirectPath} replace={true} />
  }

  return <Outlet />
}
export default ProtectedRoute
