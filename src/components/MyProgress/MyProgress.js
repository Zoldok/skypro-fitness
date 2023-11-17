import { createGlobalStyle } from 'styled-components'
import * as S from './MyProgressStyle'

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
export default function MyProgress() {
  return (
    <S.Wrapper>
      <GlobalStyle />
      <S.BlockProgress>
        <S.TitleProgress>Мой прогресс</S.TitleProgress>

        <S.BlockProgressBox>
          <S.BlockProgressBoxText>
            Сколько раз вы сделали наклоны вперед?
          </S.BlockProgressBoxText>
          <S.Inputs type="text" placeholder="введите значение" />
        </S.BlockProgressBox>

        <S.BlockProgressBox>
          <S.BlockProgressBoxText>
            Сколько раз вы сделали наклоны назад?
          </S.BlockProgressBoxText>
          <S.Inputs type="text" placeholder="введите значение" />
        </S.BlockProgressBox>

        <S.BlockProgressBox>
          <S.BlockProgressBoxText>
            Сколько раз вы сделали поднятие ног, согнутых в коленях?
          </S.BlockProgressBoxText>
          <S.Inputs type="text" placeholder="введите значение" />
        </S.BlockProgressBox>
        <S.Button>Отправить</S.Button>
      </S.BlockProgress>
    </S.Wrapper>
  )
}
