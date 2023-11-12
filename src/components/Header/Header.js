import SidebarLogin from '../SidebarUser/SidebarPersonal'
import * as S from "./Header.styles"

function Header() {
  return (
    <S.HeaderStyle>
      <S.NavLogo>
        <S.LogoImage src="../../../img/logo.png" alt="logo" />
      </S.NavLogo>
      <SidebarLogin />
    </S.HeaderStyle>
  )
}

export default Header
