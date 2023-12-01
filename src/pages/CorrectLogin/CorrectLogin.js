import { createGlobalStyle } from 'styled-components'
import * as S from './CorrectLoginStyle'

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
export default function CorrectLogin({ onClick, setNew }) {
  const setDataOnChange = (event, setData) => {
    setData(event.target.value)
  }

  return (
    <S.PageContainer>
      <GlobalStyle />
      <S.ModalForm>
        <S.ModalLogo>
          <S.ModalLogoImage src="../../img/logo.png" alt="logo" />
        </S.ModalLogo>

        <S.LoginName>Новый логин:</S.LoginName>
        <S.Inputs>
          <S.ModalInput
            type="text"
            name="login"
            placeholder="Логин"
            onChange={(event) => setDataOnChange(event, setNew)}
          />
        </S.Inputs>
        <S.Buttons>
          <S.PrimaryButton onClick={onClick}>Сохранить</S.PrimaryButton>
        </S.Buttons>
      </S.ModalForm>
    </S.PageContainer>
  )
}
