import { createGlobalStyle } from 'styled-components'
import * as S from './MyProgressStyle'
import { useAddUserProgressMutation, useGetExercisesByIdQuery } from '../../Store/Service/Service';
import { useState } from 'react';

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
export default function MyProgress({ handleClickOutside, exercises, setIsModalOpen, setProgress }) {
  const { data, isLoading } = useGetExercisesByIdQuery()

  const filteredExercises = {};
    for (const key in data) {
      if (exercises.includes(key)) {
          filteredExercises[key] = data[key];
      }
    }
  
  if(isLoading) return <div>pfuheprf</div>

  const [userValues, setUserValues] = useState(Object.values(filteredExercises).map(() => ""));


  const handleInputChange = (value, index) => {
    const newValues = [...userValues];
    newValues[index] = Number(value);
    setUserValues(newValues);
  };

  const handleClickSend = () => {
    const ProgressArray = Object.values(filteredExercises).map((exercise, index) => {
      return {id: exercise._id, number_of_repetitions: userValues[index]}
    })
    setProgress(ProgressArray);
    setIsModalOpen(false);
  };

  return (
    <S.Wrapper onClick={handleClickOutside}>
      <GlobalStyle />
      <S.BlockProgress >
        <S.TitleProgress>Мой прогресс</S.TitleProgress>
            {Object.values(filteredExercises).map((exercise, index) => (
                <S.BlockProgressBox key={index}>
                    <S.BlockProgressBoxText>Сколько вы сделали: {exercise.name}</S.BlockProgressBoxText>  
                    <S.Inputs 
                      type={"number"}
                      placeholder={"Введите значение"}
                      value={userValues[index]} 
                      onChange={(event) => handleInputChange(event.target.value, index)} 
                  />
                </S.BlockProgressBox>
              ))}
        <S.Button onClick={handleClickSend} >Отправить</S.Button>
      </S.BlockProgress>
    </S.Wrapper>
  )
}
