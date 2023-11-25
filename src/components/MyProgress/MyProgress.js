import { createGlobalStyle } from 'styled-components'
import * as S from './MyProgressStyle'
import { useAddUserProgressMutation, useGetUserQuery } from '../../Store/Service/Service';
import { useState } from 'react';
import { useParams } from 'react-router';

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
export default function MyProgress({ handleClickOutside, data, setIsModalOpen }) {
 
  const [userProgress] = useAddUserProgressMutation();
  console.log(userProgress)
  const [userValues, setUserValues] = useState([]);

  const handleInputChange = (value, index) => {
    const newValues = [...userValues];
    newValues[index] = value;
    setUserValues(newValues);
  };

  const handleClickSend = () => {
    userProgress({ variables: { progress: userValues } });
    setIsModalOpen(true); // Перенесли вызов setIsModalOpen(true) в эту функцию
  };

  return (
    <S.Wrapper onClick={handleClickOutside}>
      <GlobalStyle />
      <S.BlockProgress >
        <S.TitleProgress>Мой прогресс</S.TitleProgress>
            {Object.values(data.exercises).map((exercise, index) => (
                <S.BlockProgressBox key={index}>
                    <S.BlockProgressBoxText>Сколько вы сделали {exercise.question}</S.BlockProgressBoxText>  
                    <S.Inputs 
                      type="text" 
                      value={userValues[index] || ""} 
                      onChange={(event) => handleInputChange(event.target.value, index)} 
                      placeholder="введите значение" 
                  />
                </S.BlockProgressBox>
              ))}
        <S.Button onClick={handleClickSend} >Отправить</S.Button>
      </S.BlockProgress>
    </S.Wrapper>
  )
}
