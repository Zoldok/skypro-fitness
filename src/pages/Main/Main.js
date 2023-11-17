import { Link } from 'react-router-dom'
import * as S from './Main.styled'
import PromoSection from '../../components/PromoSection/PromoSection'
import HeaderMain from '../../components/HeaderMain/HeaderMain'
import CardsSection from '../../components/CardsSection/CardsSection'

// import CardsSection from '../../components/CardsSection/CardsSection';
import { useGetAllCoursesQuery } from '../../Store/Service/Service'
import Loader from '../../components/Loader/Loader'

export default function Main() {
  const { data, isLoading } = useGetAllCoursesQuery()

  if (isLoading) {
    return <Loader />
  }

  const courseArray = Object.values(data)
  console.log('Course Array:', courseArray)
  return (
    <S.StyledMain>
      <HeaderMain />
      <PromoSection />

      <S.CardsSection>
        {courseArray.map((course) => {
          console.log('Current Course:', course)
          return (
            <Link to={`/acquaint/${course.name}`} key={course.id}>
              <div>
                <img
                  src={`../../../img/course-banner/${course.name}.svg`}
                  alt={course.title}
                  style={{ width: '360px', height: '480px' }}
                />
              </div>
            </Link>
          )
        })}
      </S.CardsSection>
      <S.footerMain>
        <S.BigButtonMain>Наверх</S.BigButtonMain>
      </S.footerMain>

      <CardsSection />
      <S.footerMain>
        <S.BigButtonMain>Наверх</S.BigButtonMain>
      </S.footerMain>
    </S.StyledMain>
  )
}
