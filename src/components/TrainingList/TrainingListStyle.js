import styled from 'styled-components'

export const Box = styled.div`
  display: flex;
  gap: 40px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--background-color-allPage);
  height: 626px;
  width: 444px;
`

export const Active = styled.div`
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
  opacity: 0;
  pointer-events: none;
`

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
  -webkit-transition: opacity 200ms ease-in;
  -moz-transition: opacity 200ms ease-in;
  transition: opacity 200ms ease-in;
  pointer-events: auto;
`

export const Title = styled.p`
  font-size: 32px;
  line-height: 40px;
  color: #000000;
`

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`
export const Button = styled.button`
  background-color: let(--background-color-button);
  color: #000000;
  width: 275px;
  height: 52px;
  border-radius: 46px;
  border: none;
  flex-shrink: 0;

  background-color: let(--background-color-allPage);
  color: #000;
  width: 278px;
  border-radius: 26px;
  border: 2px solid #000;
  display: flex;
  justify-content: center;
  align-items: center;
  &:title {
    font-size: 20px;
    line-height: 115%;
    letter-spacing: -0.05px;
    text-align: center;
    width: 188px;
  }
  &:text {
    color: #000000;
    font-size: 16px;
    line-height: 18px;
    letter-spacing: 0.016px;
  }
  &::active {
    background-color: let(--background-color-button-active);
  }
  &::hover {
    background-color: let(--background-color-button-hover);
  }
`
