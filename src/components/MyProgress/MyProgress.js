import { createGlobalStyle } from 'styled-components'
import * as S from './MyProgressStyle'
import { useEffect, useRef, useState } from 'react';

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
export default function MyProgress({ onClose, data, setIsModalOkOpen }) {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [onClose]);

  return (
    <S.Wrapper >
      <GlobalStyle />
      <S.BlockProgress ref={modalRef} >
        <S.TitleProgress>Мой прогресс</S.TitleProgress>
            {Object.values(data?.exercises).map((exercise, index) => (
                <S.BlockProgressBox key={index}>
                    <S.BlockProgressBoxText>Сколько вы сделали {exercise.question}</S.BlockProgressBoxText>  
                    <S.Inputs type="text" placeholder="введите значение" />
                </S.BlockProgressBox>
              ))}
        <S.Button onClick={() => setIsModalOkOpen(true)} >Отправить</S.Button>
      </S.BlockProgress>
    </S.Wrapper>
  )
}
