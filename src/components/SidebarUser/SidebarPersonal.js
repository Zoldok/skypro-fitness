import * as S from './SidebarPersonal.styled'

function SidebarLogin() {
  return (
    <S.SidebarPersonal>
      <S.SidebarIcon>
        <svg alt="logout">
          <use xlinkHref="img/icon/sprite.svg#logout" />
        </svg>
      </S.SidebarIcon>
      <S.SidebarPersonalName>User Userovi4</S.SidebarPersonalName>
    </S.SidebarPersonal>
  )
}

export default SidebarLogin
