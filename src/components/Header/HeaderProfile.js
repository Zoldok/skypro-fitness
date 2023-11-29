import { useNavigate } from 'react-router-dom'
import SidebarLogin from '../SidebarUser/SidebarPersonal'
import * as S from './Header.styles'

function HeaderProfile() {
  const navigate = useNavigate()
  const goHome = () => {
  navigate('/profile')
  }

  return (
    <S.HeaderStyle>
      <S.NavLogo onClick={goHome}>
        <S.LogoImage src="../../../img/logo.png" alt="logo" />
      </S.NavLogo>
      <SidebarLogin />
    </S.HeaderStyle>
  )
}

export default HeaderProfile