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

export const BlockProgress = styled.div`
  width: 444px;
  height: auto;
  padding-top: 36px;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 30px;
  border-radius: 12px;
  --modal-width: 366px;
  --modal-height: 439px;
`

export const TitleProgress = styled.h2`
  font-size: 32px;
  font-weight: 400;
  line-height: 40px;
  letter-spacing: 0em;
  text-align: left;
`

export const BlockProgressBox = styled.div`
  width: 360px;
`
export const BlockProgressBoxText = styled.p`
  color: #000;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.05px;
  margin-bottom: 20px;
`
export const Inputs = styled.input`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;
  border: none;
  border-bottom: 1px solid #d0cece;
  padding: 8px 1px;
  &::placeholder {
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    color: #d0cece;
  }
`

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  width: 278px;
  height: 52px;
  border-radius: 46px;
  border: none;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  margin-bottom: 44px;

  &:disabled {
    background-color: #00000;
  }

  color: #ffffff;
  background-color: #580ea2;
  &:hover {
    background-color: #3f007d;
  }

  &:active {
    background-color: #271a58;
  }
`
