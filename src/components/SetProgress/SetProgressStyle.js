import { styled } from 'styled-components'

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 1;
  pointer-events: all;
`
export const Content = styled.div`
  width: 444px;
  height: 360px;
  background-color: #ffffff;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 108px;
  padding: 88px 0 36px 0;
`
export const TitleSetProgress = styled.div`
  font-size: 40px;
  font-weight: 400;
  line-height: 48px;
  letter-spacing: 0em;
  text-align: center;
`
export const SetImage = styled.img`
  width: 140px;
  height: 254px;
`
