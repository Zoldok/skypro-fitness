import { Link } from 'react-router-dom'
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
        <Link to="/Progress">
          <S.BigButtonMain>Наверх</S.BigButtonMain>
        </Link>
      </S.footerMain>
    </S.StyledMain>
  )
}
