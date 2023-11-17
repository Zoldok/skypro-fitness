import styled from 'styled-components'

export const HeaderStyleMyProfile = styled.div`
  display: flex;
  flex-direction: column;
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
export const ContainerWithButtom = styled.div`
  padding-top: 14px;
`

export const NamePages = styled.h1`
  color: #000;
  font-size: 48px;
  font-style: normal;
  font-weight: 400;
  line-height: 56px; /* 116.667% */
  margin-bottom: 40px;
`
export const LoginPassName = styled.h2`
  color: #000;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px; /* 133.333% */
  margin-bottom: 20px;
`
export const LoginPassNameWithPadding = styled(LoginPassName)`
  padding-bottom: 20px;
`
