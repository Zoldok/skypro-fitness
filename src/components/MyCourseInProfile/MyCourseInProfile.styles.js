import styled from 'styled-components'

export const HeaderStyleMyProfile = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 75px;
`

export const StyleMyCoursBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  padding-bottom: 200px;
`
export const BlockTrain = styled.img`
  width: 360px;
  height: 480px;
  border-radius: 30px;
  box-shadow: 0 0 10px 5px rgba(221, 221, 221, 1);
`
export const NameCourseUser = styled.p`
  color: #000;
  font-size: 48px;
  font-style: normal;
  font-weight: 400;
  line-height: 56px; /* 116.667% */
  margin-bottom: 60px;
`
export const ImgBox = styled.div`
  position: relative;
  cursor: pointer;
  width: 360px;
  height: 480px;
  &:hover {
    opacity: 0.8;
    transition: 0.3s;
  }
`
export const ImgTitle = styled.p`
  position: absolute;
  top: 50px;
  left: 50px;
  color: #000;
  font-size: 36px;
  font-style: normal;
  font-weight: 500;
  line-height: 110%; /* 39.6px */
  letter-spacing: -0.5px;
`

export const CourseButton = styled.button`
  position: absolute;
  margin-top: -80px;
  left: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  width: 136px;
  height: 43px;
  border-radius: 80px;
  border: none;
  outline: none;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  color: #000000;
  background-color: #c7e957;
`
export const Modal = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
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

export const ModalContent = styled.div`
  display: flex;
  border-radius: 4px;
  gap: 40px;

  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  height: 626px;
  width: 444px;
`

export const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  font-size: 24px;
  line-height: 10px;
  color: #000000;
  cursor: pointer;
  margin-bottom: 10px;
`

export const ModalTitle = styled.h2`
  font-size: 32px;
  line-height: 40px;
  color: #000000;
`

export const ModalList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  overflow: auto;
`

export const ModalListItem = styled.button`
  height: 76px;
  width: 278px;
  background-color: #ffffff;
  border-radius: 26px;
  border: 2px solid #000;
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  color: #000000;
  font-size: 16px;
  line-height: 18px;
  text-align: center;
  &:active {
    border: 2px solid #06b16e;
    color: #06b16e;
  }
`

export const ItemBox = styled.div`
  right: -8px;
  top: -5px;
  position: absolute;
`
