import { styled } from 'styled-components'

export const Wrapper = styled.div`
  border-radius: 30px;
  background-color: #f2f2f2;
  width: 638px;
`

export const Content = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 40px;
  padding: 36px 0 36px 0;
`
export const ContentTitle = styled.p`
  text-align: center;
  color: var(--colot-text);
  font-size: 32px;
  line-height: 40px;
`
export const ContentProgress = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 26px;
`
export const ContentProgressText = styled.p`
  color: var(--colot-text);
  font-size: 24px;
  line-height: 32px;
  width: 227px;
`
export const ContentProgressScaleOne = styled.progress`
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  border: none;
  border: 0;
  border-radius: 22px;
  background-color: #565eef;
  height: 35px;
  width: 240px;
  &::-webkit-progress-bar {
    background-color: #edecff;
    border-radius: 22px;
  }
  &::-webkit-progress-value {
    background-color: #565eef;
    border-radius: 22px 0 0 22px;
  }
  &::-moz-progress-bar {
    background-color: #565eef;
    border-radius: 22px 0 0 22px;
  }
`
export const ContentProgressScaleTwo = styled.progress`
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  border: none;
  border: 0;
  border-radius: 22px;
  background-color: #ff6d00;
  height: 35px;
  width: 240px;
  &::-webkit-progress-bar {
    background-color: #fff2e0;
    border-radius: 22px;
  }
  &::-webkit-progress-value {
    background-color: #ff6d00;
    border-radius: 22px 0 0 22px;
  }
  &::-moz-progress-bar {
    background-color: #565eef;
    border-radius: 22px 0 0 22px;
  }
`
export const ContentProgressScaleThree = styled.progress`
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  border: none;
  border: 0;
  border-radius: 22px;
  background-color: #9a48f1;
  height: 35px;
  width: 240px;
  &::-webkit-progress-bar {
    background-color: #f9ebff;
    border-radius: 22px;
  }
  &::-webkit-progress-value {
    background-color: #9a48f1;
    border-radius: 22px 0 0 22px;
  }
  &::-moz-progress-bar {
    background-color: #9a48f1;
    border-radius: 22px 0 0 22px;
  }
`

export const List = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`