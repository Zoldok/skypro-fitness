import styled from 'styled-components'

export const HeaderStyleMyProfile = styled.div`
  display: flex;
  flex-direction: column;
`

export const ProfileButton = styled.button`
  width: 275px;
  height: 52px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  border: 1px solid #ffffff;
  border-radius: 46px;
  // padding: 6px 20px;
  background-color: #580ea2;
  color: white;


  &:not(:last-child) {
    margin-right: 10px;
  }

  &.button-active {
    color: #b672ff;
    border-color: #b672ff;
  }
`
export const ContainerWithButtom = styled.div`
padding-top: 14px;
`

export const NamePages = styled.p`
color: #000;
font-variant-numeric: lining-nums proportional-nums;
font-family: StratosSkyeng;
font-size: 48px;
font-style: normal;
font-weight: 400;
line-height: 56px; /* 116.667% */ 
margin-bottom: 40px;
`
export const LoginPassName = styled.p`
color: #000;
font-variant-numeric: lining-nums proportional-nums;
font-family: StratosSkyeng;
font-size: 24px;
font-style: normal;
font-weight: 400;
line-height: 32px; /* 133.333% */ 
margin-bottom: 20px;
`
export const LoginPassNameWithPadding = styled(LoginPassName)`
padding-bottom: 20px;
`
