import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import * as S from './SidebarPersonal.styled'

function SidebarLogin() {
  const dispatch = useDispatch()
  const user = localStorage.getItem('userEmail')

  const navigate = useNavigate()

  const handleLogout = () => {
    dispatch({ type: 'setUser', payload: null })
    localStorage.clear()
    navigate('/')
  }

  return (
    <S.SidebarPersonal>
      <S.SidebarIcon onClick={handleLogout}>
        <svg alt="logout">
          <use xlinkHref="../img/sprite.svg#logout"></use>
        </svg>
      </S.SidebarIcon>
      <S.SidebarPersonalName>{user}</S.SidebarPersonalName>
    </S.SidebarPersonal>
  )
}

export default SidebarLogin
