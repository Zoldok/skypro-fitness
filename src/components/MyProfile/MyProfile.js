import * as S from './MyProfile.styles'

function MyProfile() {
  return (
    <S.HeaderStyleMyProfile>
      <S.NamePages>Мой профиль</S.NamePages>
      <S.LoginPassName>Логин: тут логин будет</S.LoginPassName>
      <S.LoginPassNameWithPadding>
        Пароль: тут пароль будет
      </S.LoginPassNameWithPadding>
      <S.ProfileButton>Редактировать логин</S.ProfileButton>
      <S.ContainerWithButtom>
        <S.ProfileButton>Редактировать пароль</S.ProfileButton>
      </S.ContainerWithButtom>
    </S.HeaderStyleMyProfile>
  )
}

export default MyProfile
