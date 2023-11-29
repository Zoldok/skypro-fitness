import styled from 'styled-components'

export const ExercisesDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;
`

export const ExercisesTitle = styled.p`
    margin-top: 75px;
    color: var(--colot-text);
    font-size: 32px;
    line-height: 40px;
`

export const ExercisesUl = styled.ul`
color: var(--colot-text);
    font-size: 32px;
    line-height: 40px;
    list-style-type: disc;
`
export const ExercisesLi = styled.li`

`
export const ExercisesStrong = styled.strong`
    color: var(--colot-text);
    font-size: 22px;
    font-style: normal
    line-height: 32px;
    margin-left: 20px;
`

export const ExercisesButton = styled.button`
  width: 275px;
  height: 52px;

  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: -0.05px;
  border: 1px solid #ffffff;
  border-radius: 46px;
  background-color: #580ea2;
  color: #fff;

  &:not(:last-child) {
    margin-right: 10px;
  }

  &.button-active {
    color: #b672ff;
    border-color: #b672ff;
  }
`
export const ExercisesNo = styled.p`
    color: #580EA2;
    font-size: 32px;
    line-height: 40px;
`
