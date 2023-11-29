import { createGlobalStyle } from 'styled-components'
import * as S from './ProgressStyle'
import { useGetExercisesByIdQuery } from '../../Store/Service/Service'

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

export default function Progress({ userProgress, exercises }) {
  const { data, isLoading } = useGetExercisesByIdQuery() // TODO: получать только нужные упражнения

  if (isLoading) return <div>идет загузка...</div>

  const progress = []
  userProgress
    .filter((pro) => {
      return exercises.includes(pro.exercise)
    })
    .forEach((p) => {
      let updatedUserProgress = { ...p }
      if (Object.keys(data).includes(p.exercise)) {
        updatedUserProgress.name = data[p.exercise].name
      }
      progress.push(updatedUserProgress)
    })
    // const backgrdBorder = ['#565EEF', '#FF6D00', '#9A48F1'];
    const backgrd = ['#565EEF', '#FF6D00', '#9A48F1'];
  return (
    <S.Wrapper>
      <GlobalStyle />
      <S.Content>
        <S.ContentTitle>Мой прогресс по тренировке </S.ContentTitle>
        <S.ContentProgress>
          {progress.map((exercise, index) => {
            const userP = exercise.number_of_repetitions
            const targetP = data[exercise.exercise].number_of_repetitions
            const percent = Math.round((userP / targetP) * 100)
            const progressText = `${percent}%`
            return (
              <S.List key={index}>
                <S.ContentProgressText>{exercise.name}</S.ContentProgressText>
                <S.ContentProgressScale backgrd={backgrd[index % backgrd.length]}>
                  <S.ContentProgressScaleOne
                    max="100"
                    value={percent}
                    backgrd={backgrd[index % backgrd.length]}
                    percent={percent}
                  ><S.labelStyles>{progressText}</S.labelStyles> 
                  </S.ContentProgressScaleOne>
                </S.ContentProgressScale>
              </S.List>
            )
          })}
        </S.ContentProgress>
      </S.Content>
    </S.Wrapper>
  )
}
