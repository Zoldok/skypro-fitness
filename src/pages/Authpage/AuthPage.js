import { createGlobalStyle } from 'styled-components'
import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth'
import { useDispatch } from 'react-redux'
import * as S from './AuthPageStyle'
import { setLogin } from '../../Store/Slice/Slice'

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
}

*:before,
*:after {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
}

a,
a:visited {
  text-decoration: none;
  font-family: 'StratosSkyeng', sans-serif;
  cursor: pointer;
}

button,
._btn {
  cursor: pointer;
}

ul li {
  list-style: none;
}

@font-face {
  font-family: 'StratosSkyeng';
  src: local("StratosSkyeng"), local("StratosSkyeng"), url("../fonts/StratosSkyeng.woff2") format("woff2"), url("../fonts/StratosSkyeng.woff") format("woff"), url("../fonts/StratosSkyeng.ttf") format("truetype");
  font-weight: 400;
  font-style: normal;
}

html,
body {
  width: 100%;
  height: 100%;
  font-family: 'StratosSkyeng', sans-serif;
}

`
export default function AuthPage({ isLoginMode = false }) {
  const dispatch = useDispatch()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [repeatPassword, setRepeatPassword] = useState('')
  const [passwordMatchError, setPasswordMatchError] = useState(false)
  const navigate = useNavigate()

  const isValidateForm = async () => {
    const recExp = /^(?=.*[a-zA-Z])(?=.*\d).+/
    if (email === '' || password === '') {
      setPasswordMatchError('Укажите почту/пароль')
      return false
    }
    if (email.length < 5) {
      setPasswordMatchError('Слишком короткая почта или имя')
      return false
    }
    if (password !== repeatPassword) {
      setPasswordMatchError('Пароли не совпадают')
      return false
    }
    if (password.length < 8 || repeatPassword.length < 8) {
      setPasswordMatchError('Пароль должен содержать более 4 символов')
      return false
    }
    if (password.includes('123456')) {
      setPasswordMatchError('Пароль слишком распространен')
      return false
    }
    if (!recExp.test(password)) {
      setPasswordMatchError('Пароль должен состоять не только из цифр')
      return false
    }

    return true
  }

  const isValidateFormLogin = () => {
    if (email === '' || password === '') {
      setPasswordMatchError('Укажите почту/пароль')
      return false
    }
    if (email.length < 5) {
      setPasswordMatchError('Слишком короткая почта или имя')
      return false
    }
    return true
  }

  const handleRegister = (event) => {
    event.preventDefault()
    const auth = getAuth()
    if (!isValidateForm()) return
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user
        console.log(user)
        navigate('/login')
      })
      .catch((error) => {
        if (error.message.includes('auth/invalid-email')) {
          setPasswordMatchError('Введен невалидный email')
          return
        } else if (error.message.includes('auth/email-already-in-use')) {
          setPasswordMatchError('Пользователь с таким email уже существует')
          return
        }
      })
  }

  const handleLogin = async (event) => {
    event.preventDefault()
    const auth = getAuth()
    const isValidLoginForm = await isValidateFormLogin()
    if (isValidLoginForm) {
      await signInWithEmailAndPassword(auth, email, password)
        .then((userData) => {
          const user = userData.user
          console.log(user)
          dispatch(
            setLogin({
              type: 'setUser',
              userId: user.uid,
              email: user.email,
            }),
          )
          localStorage.setItem('userId', user.uid)
          localStorage.setItem('userEmail', user.email)
          navigate('/profile')
        })
        .catch((error) => {
          if (error.message.includes('auth/invalid-login-credentials')) {
            setPasswordMatchError('Не верный E-mail/пароль')
          }
        })
    } else {
      isValidateFormLogin()
    }
  }

  useEffect(() => {
    setPasswordMatchError(null)
  }, [isLoginMode, email, password, repeatPassword])

  return (
    <S.PageContainer>
      <GlobalStyle />
      <S.ModalForm>
        <Link to="/login">
          <S.ModalLogo>
            <S.ModalLogoImage src="././img/logo.png" alt="logo" />
          </S.ModalLogo>
        </Link>
        {isLoginMode ? (
          <>
            <S.Inputs>
              <S.ModalInput
                type="text"
                name="login"
                placeholder="Почта"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value)
                }}
              />
              <S.ModalInput
                type="password"
                name="password"
                placeholder="Пароль"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value)
                }}
              />
              <S.ModalInput
                type="password"
                name="repeat-password"
                placeholder="Повторите пароль"
                value={repeatPassword}
                onChange={(event) => {
                  setRepeatPassword(event.target.value)
                }}
              />
            </S.Inputs>
            {passwordMatchError && <S.Error>{passwordMatchError}</S.Error>}
            <S.Buttons>
              <S.PrimaryButton onClick={handleRegister}>
                Зарегистрироваться
              </S.PrimaryButton>
            </S.Buttons>
          </>
        ) : (
          <>
            <S.Inputs>
              <S.ModalInput
                type="text"
                name="login"
                placeholder="Почта"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value)
                }}
              />
              <S.ModalInput
                type="password"
                name="password"
                placeholder="Пароль"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value)
                }}
              />
            </S.Inputs>
            {passwordMatchError && <S.Error>{passwordMatchError}</S.Error>}
            <S.Buttons>
              <S.PrimaryButton onClick={handleLogin}>Войти</S.PrimaryButton>
              <Link to="/register">
                <S.SecondaryButton>Зарегистрироваться</S.SecondaryButton>
              </Link>
            </S.Buttons>
          </>
        )}
      </S.ModalForm>
    </S.PageContainer>
  )
}
