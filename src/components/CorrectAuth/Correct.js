import { createGlobalStyle } from 'styled-components'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import * as S from './CorrectStyle'

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
export default function CorrectAuth({ isLoginMode = false }) {
  // const [error, setError] = useState(null)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [repeatPassword, setRepeatPassword] = useState('')

  return (
    <S.PageContainer>
      <GlobalStyle />
      <S.ModalForm>
        <Link to="/login">
          <S.ModalLogo>
            <S.ModalLogoImage src="./img/logo.png" alt="logo" />
          </S.ModalLogo>
        </Link>
        {isLoginMode ? (
          <>
            <S.LoginName>Новый логин:</S.LoginName>
            <S.Inputs>
              <S.ModalInput
                type="text"
                name="login"
                placeholder="Логин"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value)
                }}
              />
            </S.Inputs>
            {/* {error && <S.Error>{error}</S.Error>} */}
            <S.Buttons>
              <S.PrimaryButton>
                {/* // disabled={isLoading} onClick={handleLogin}> //{' '}
                {isLoading ? 'Осуществляется вход' : 'Войти'} */}
                Сохранить
              </S.PrimaryButton>
            </S.Buttons>
          </>
        ) : (
          <>
            <S.LoginName>Новый пароль:</S.LoginName>
            <S.Inputs>
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
            {/* {error && <S.Error>{error}</S.Error>} */}
            <S.Buttons>
              <S.PrimaryButton>
                {/* {isLoading? 'Осуществляется регистрация' :
                'Зарегистрироваться' */}
                Сохранить
              </S.PrimaryButton>
            </S.Buttons>
          </>
        )}
      </S.ModalForm>
    </S.PageContainer>
  )
}
