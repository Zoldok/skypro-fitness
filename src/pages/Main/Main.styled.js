import styled, { css } from 'styled-components';

export const StyledMain = styled.div`
  padding-left: calc(50% - 580px);
  padding-right: calc(50% - 580px);
  background: #271a58;
  min-height: 100vh;

  @media (max-width: 1190px) {
    padding-left: 40px;
    padding-right: 40px;
  }
`;
export const footerMain = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const commonButtonStyles = css`
  border-radius: 46px;
  cursor: pointer;
  font-weight: 400;
  transition: background-color 0.3s ease;
`
export const BigButton = styled.button`
  ${commonButtonStyles}
  padding: 7px 24px 9px;
  background: #c7e957;

  font-size: 24px;

  font-weight: 400;
  line-height: 32px;
  letter-spacing: -0.1px;
  background: #c7e957;

  &:hover {
    background-color: #daf289;
  }
  &:active {
    background-color: #ebffab;
  }
`

export const BigButtonMain = styled(BigButton)`
  margin-top: 34px;
`;

export const Block = styled.img`
  width: 360px;
  height: 480px;
`


export const CardsSection = styled.div`
    // width: 1110px;
    height: 980px;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: 24px;
    margin-top: 10px;
`