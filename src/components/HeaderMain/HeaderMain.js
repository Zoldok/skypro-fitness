import { Link } from 'react-router-dom'
import * as S from './HeaderMain.styled'

function HeaderMain() {
  return (
    <S.HeaderMain>
      <S.LogoMain src="../../../img/LogoMain.svg" alt="logo" />
      <Link to="/login">
        <S.StyledSmallButton> Войти </S.StyledSmallButton>
      </Link>
    </S.HeaderMain>
  )
}

export default HeaderMain
