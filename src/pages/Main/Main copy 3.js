import { Link } from 'react-router-dom'
import * as S from './Main.styled'
import PromoSection from '../../components/PromoSection/PromoSection'
import HeaderMain from '../../components/HeaderMain/HeaderMain'
// import CardsSection from '../../components/CardsSection/CardsSection';
import { useGetAllCoursesQuery } from '../../Service/Service'
import Loader from '../../components/Loader/Loader'

export default function Main() {
  const { data, isLoading } = useGetAllCoursesQuery()

  if (isLoading) {
    return <Loader />
  }

  const courseArray = Object.values(data)
  console.log("Course Array:", courseArray);
  return (
    <S.StyledMain>
      <HeaderMain />
      <PromoSection />
      {/* <CardsSection /> */}
      <div >
        {courseArray.map((course) => {
           console.log("Current Course:", course)
           return (
          <Link to={`/acquaint/${course.name}`} key={course.id}>
            <div>
            {/* <h3>{course.title}</h3> */}
              <img
                src={`../../../img/course-banner/${course.name}.png`}
                alt={course.title}
                style={{ width: '360px', height: '480px' }}
              />
            </div>
          </Link>)
})}
      </div>
      <S.footerMain>
        <S.BigButtonMain>Наверх</S.BigButtonMain>
      </S.footerMain>
      
    </S.StyledMain>
  )
}
