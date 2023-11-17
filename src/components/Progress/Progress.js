import { createGlobalStyle } from 'styled-components'
import * as S from './ProgressStyle'

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
export default function Progress() {
  return (
    <S.Wrapper>
      <GlobalStyle />
      <S.Content>
        <S.ContentTitle>Мой прогресс по тренировке 2:</S.ContentTitle>
        <S.ContentProgress>
          <S.List>
            <S.ContentProgressText>Наклоны вперед</S.ContentProgressText>
            <S.ContentProgressScaleOne max="100" value="45" />
          </S.List>
          <S.List>
            <S.ContentProgressText>Наклоны назад</S.ContentProgressText>
            <S.ContentProgressScaleTwo max="100" value="45" />
          </S.List>
          <S.List>
            <S.ContentProgressText>
              Поднятие ног, согнутых в коленях
            </S.ContentProgressText>
            <S.ContentProgressScaleThree max="100" value="45" />
          </S.List>
        </S.ContentProgress>
      </S.Content>
    </S.Wrapper>
  )
}
