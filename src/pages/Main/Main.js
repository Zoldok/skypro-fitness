import * as S from './Main.styled'
import PromoSection from '../../components/PromoSection/PromoSection'
import HeaderMain from '../../components/HeaderMain/HeaderMain'
import CardsSection from '../../components/CardsSection/CardsSection'

export default function Main() {
  return (
    <S.StyledMain>
      <HeaderMain />
      <PromoSection />
      <CardsSection />
      <S.footerMain>
        <S.BigButtonMain>Наверх</S.BigButtonMain>
      </S.footerMain>
    </S.StyledMain>
  )
}
