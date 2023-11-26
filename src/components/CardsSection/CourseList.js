import * as S from './CardsSection.styled'
import { Link } from 'react-router-dom'

const CardsSectionAll = ({ coursedata }) => {
  if (!coursedata) {
    return <p>тут прелоадер</p>
  }

  return (
    <S.CardsSection>
      {coursedata.map((course) => {
        // console.log('Current Course:', course)
        return (
          <Link
            to={`/acquaint/${course.id}`}
            key={course.id}
            // onClick={() => setSelectedCourse(course)}
          >
            <S.DivCard>
              <S.CourseBlockText>{course.name}</S.CourseBlockText>
              <img
                src={`../../../img/course-banner/${course.name}.png`}
                alt={course.title}
                style={{
                  width: '360px',
                  height: '480px',
                  backgroundColor: 'white',
                  borderRadius: '30px',
                }}
              />
            </S.DivCard>
          </Link>
        )
      })}
    </S.CardsSection>
  )
}

export default CardsSectionAll
