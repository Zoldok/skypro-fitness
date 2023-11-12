import styled from 'styled-components';
import PromoSection from '../../components/PromoSection/PromoSection'

const StyledMain = styled.div`
  padding-left: calc(50% - 580px);
  padding-right: calc(50% - 580px);
  background: #271a58;
  min-height: 100vh;

  @media (max-width: 1190px) {
    padding-left: 40px;
    padding-right: 40px;
  }
`;

export default function Main() {
  return (
    <StyledMain>
      <PromoSection />
    </StyledMain>
  )
}
