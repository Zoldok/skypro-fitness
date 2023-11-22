import styled from 'styled-components'

export const ModalWindow = styled.section`
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
background-color: rgba(0, 0, 0, 0.5); /* Прозрачный серый фон */
display: flex;
justify-content: center;
align-items: center;
`
export const ModalWindowContent = styled.div`
background-color: white; /* Цвет фона модального окна */
padding: 20px;
border-radius: 8px;
box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
max-width: 600px; /* Максимальная ширина модального окна */
width: 100%;
overflow-x:hidden
`

export const ModelMessage = styled.h1`
color: #000;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 32px;
    margin-top: 75px;
    width: 823px;
 
    padding-bottom: 34px;
`
export const ModalInput = styled.input`
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

export const ModalButton = styled.button`
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

export const ForModalButton = styled.div`
padding-top: 40px;
`