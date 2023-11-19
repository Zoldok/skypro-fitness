import { useGetAllCoursesQuery } from '../../Store/Service/Service'
import * as S from './Promo.styled'

function PromoSection() {
  const { data } = useGetAllCoursesQuery()
  return (
    <S.Promo>
      <S.ContentWrapper>
        <S.PromoSubtitle>Онлайн-тренировки для занятий дома</S.PromoSubtitle>
        <S.PromoTitle>
          Начните заниматься спортом и улучшите качество жизни
        </S.PromoTitle>
        <S.PromoSticker>
          <span>.</span>
        </S.PromoSticker>
      </S.ContentWrapper>
    </S.Promo>
  )
}

export default PromoSection
