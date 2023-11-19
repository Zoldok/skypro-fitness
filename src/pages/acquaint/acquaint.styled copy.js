import styled from 'styled-components'

export const StyledPromo = styled.section`
  background-color: #fafafa;
  padding-left: calc(50% - 580px);
  padding-right: calc(50% - 580px);
  min-height: 100vh;
`
export const NavLogo = styled.div`
  width: 113.33px;
  height: 43px;
  padding: 13px 0 13px 0;
  background-color: transparent;
  margin-bottom: 20px;
`

export const LogoImage = styled.img`
  width: 220px;
  height: 35px;
  color: #181818;
`
export const LogoImage2 = styled.img`
  width: 67px;
  height: 67px;
  display: inline-block;
  vertical-align: middle;
`
export const AboutPages = styled.h1`
  display: inline-block;
  max-width: 830px;
  color: black;
  font-size: 40px;
  font-weight: 400;
  line-height: 1;
  letter-spacing: -1.169px;
  margin: 0;
  margin-top: 75px;
  margin-bottom: 22px;

  @media (max-width: 1161px) {
    max-width: 650px;
  }

  @media (max-width: 600px) {
    font-size: 36px;
  }
`

export const CourseBlock = styled.div`
  width: 1160px;
  height: 310px;
  border-radius: 30px;
  // background: #D0CECE;
  background-color: #f2f2f2;
  // backdrop-filter: blur(14.51865291595459px);
  overflow: hidden;
  margin-top: 75px;
  position: relative;
`
export const CourseBlockName = styled.div`
  width: 528px;
  height: 181px;
  padding-left: 30px;
  padding-top: 30px;
`

export const CourseBlockText = styled.h1`
  width: 528px;
  height: 181px;
  color: #000;
  font-size: 64px;
  font-style: normal;
  font-weight: 400;
  line-height: 72px; /* 112.5% */
  letter-spacing: -0.8px;
`
export const StyleMyCoursBlock = styled.div`
  padding-bottom: 200px;
  position: absolute;
  top: -90px;
  left: 800px;
`

export const BlockTrain = styled.img`
  width: 360px;
  height: 480px;
`

export const BlockTrainPhone = styled.img`
  width: 345px;
  height: 340px;
  position: relative;
  top: -245px;
  left: 760px;
`

export const Div = styled.div`
display: flex;
`
export const CoursReadings = styled.div`
  width: 1153px;
  height: 128px;
  // align-items: center;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 40px;
`

export const AboutPages2 = styled.h1`
  color: #000;
  font-size: 24px;
  font-weight: 400;
  line-height: 32px; /* Specify the line height */
  letter-spacing: -1.169px;
  font-style: normal;
  font-weight: 400;
  display: inline-block;
  vertical-align: middle;
  margin-left: 24px;

  width: 244px; /* Set the fixed width */
  max-width: 100%; /* Allow the width to scale down if needed */
  overflow: hidden; /* Hide overflowing text */
  text-overflow: ellipsis; /* Show ellipsis for overflowing text */
`

export const Directions = styled.div`
display: flex;
flex-wrap: wrap; /* Allow items to wrap to the next line */
justify-content: space-between;
`
export const DirectionsAbout = styled.div`
color: #000;
font-variant-numeric: lining-nums proportional-nums;
font-family: StratosSkyeng;
font-size: 24px;
font-style: normal;
font-weight: 400;
line-height: 32px; /* 133.333% */
padding-right: 20px; 
flex: 0 0 calc(50% - 165px); 
box-sizing: border-box; 
`


export const DirectionsAboutCourse = styled.div`
  color: #000;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px; /* 133.333% */
  margin-top: 75px;
  width: 823px;
  padding-top: 46px;
  padding-bottom: 34px;
`

export const Application = styled.div`
  width: 1160px;
  height: 300px;
  flex-shrink: 0;
  border-radius: 30px;
  background: #f9ebff;
  padding-left: 52px;
`

export const ProfileButton = styled.button`
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

export const StyleMyCoursBlock2 = styled.div`
  padding-bottom: 200px;
  top: -90px;
  left: 800px;
`
