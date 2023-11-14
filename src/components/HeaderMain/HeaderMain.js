import { Link } from "react-router-dom"
import * as S from './HeaderMain.styled'
// import { useGetAllCoursesQuery } from "../../Service/Service"

function HeaderMain() {
  // const { data } = useGetAllCoursesQuery();
  // console.log(data);

  return (
    <S.HeaderMain>
      <S.LogoMain src="../../../img/LogoMain.svg" alt="logo" />
      <Link to="/AuthPage">
        <S.StyledSmallButton> Войти </S.StyledSmallButton>
      </Link>
    </S.HeaderMain>
  )
}

export default HeaderMain
