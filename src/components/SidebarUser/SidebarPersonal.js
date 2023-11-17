import * as S from './SidebarPersonal.styled'

function SidebarLogin() {
  const user = localStorage.getItem('userEmail')
  return (
    <S.SidebarPersonal>
      <S.SidebarIcon>
        <svg alt="logout">
          <use xlinkHref="img/icon/sprite.svg#logout" />
        </svg>
      </S.SidebarIcon>
      <S.SidebarPersonalName>{user}</S.SidebarPersonalName>
    </S.SidebarPersonal>
  )
}

export default SidebarLogin
