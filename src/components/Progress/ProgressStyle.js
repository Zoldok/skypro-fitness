import { styled } from 'styled-components'

export const Wrapper = styled.div`
margin-top: 75px;
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
export const ContentProgressScale = styled.div`
appearance: none;
-moz-appearance: none;
-webkit-appearance: none
border: none;
border-radius: 22px;
border: 2px solid ${(props) => props.backgrd};
background: #EDECFF;
height: 35px;
width: 240px;
box-shadow: 0 0 0 2px ${(props) => props.backgrd};
`

export const ContentProgressScaleOne = styled.div`
appearance: none;
-moz-appearance: none;
-webkit-appearance: none;
border: none;
border: 0;
border-radius: 22px;
background-color: ${(props) => props.backgrd};
height: 35px;
width: ${props => props.percent}%;
`

export const labelStyles = styled.span`
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: #FFF;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
`

export const List = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`
