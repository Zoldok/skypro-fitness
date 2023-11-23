import * as S from './Main.styled'
import PromoSection from '../../components/PromoSection/PromoSection'
import HeaderMain from '../../components/HeaderMain/HeaderMain'
import CardsSection from '../../components/CardsSection/CardsSection'

export default function Main() {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <S.StyledMain>
      <HeaderMain />
      <PromoSection />
      <CardsSection />
      <S.footerMain>
        <S.BigButtonMain onClick={scrollToTop}>Наверх</S.BigButtonMain>
      </S.footerMain>
    </S.StyledMain>
  )
}
