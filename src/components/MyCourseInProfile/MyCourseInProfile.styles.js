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
  &::hover {
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
