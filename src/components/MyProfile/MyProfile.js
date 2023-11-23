import { getAuth, updateEmail, updatePassword } from 'firebase/auth'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import * as S from './MyProfile.styles'
import { setEmail } from '../../Store/Slice/Slice'
import CorrectLogin from '../../pages/CorrectLogin/CorrectLogin'
import CorrectPassword from '../../pages/CorrectPassword/Correct'

function MyProfile() {
  const dispatch = useDispatch()
  const userName = localStorage.getItem('userEmail')

  const auth = getAuth()
  const [visibleLogin, setVisibleLogin] = useState(false)
  const [visiblePas, setVisiblePas] = useState(false)
  const [newEmail, setNewEmail] = useState('')
  const [newPassword, setNewPassword] = useState('')

  const handleLogin = () => {
    setVisibleLogin(!visibleLogin)
    const user = auth.currentUser
    updateEmail(user, newEmail)
      .then(() => {
        localStorage.setItem('userEmail', newEmail)
        dispatch(setEmail({ email: newEmail }))
      })
      .catch(() => {
        alert('Некорректный логин')
      })
  }

  const handlePassword = () => {
    setVisiblePas(!visiblePas)
    const user = auth.currentUser

    updatePassword(user, newPassword)
      .then(() => {
        console.log('ready')
      })
      .catch(() => {
        alert('Некорректный пароль')
      })
  }
  return (
    <S.HeaderStyleMyProfile>
      <S.NamePages>Мой профиль</S.NamePages>
      <S.LoginPassName>Логин: {userName}</S.LoginPassName>
      <S.LoginPassNameWithPadding>Пароль: ********</S.LoginPassNameWithPadding>

      {visibleLogin ? (
        <CorrectLogin onClick={handleLogin} setNew={setNewEmail} />
      ) : (
        <S.ProfileButton onClick={handleLogin}>
          Редактировать логин
        </S.ProfileButton>
      )}
      <S.ContainerWithButtom>
        {visiblePas ? (
          <CorrectPassword onClick={handlePassword} setNew={setNewPassword} />
        ) : (
          <S.ProfileButton onClick={handlePassword}>
            Редактировать пароль
          </S.ProfileButton>
        )}
      </S.ContainerWithButtom>
    </S.HeaderStyleMyProfile>
  )
}

export default MyProfile
