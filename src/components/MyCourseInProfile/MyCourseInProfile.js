import { handleImg } from '../../help'
import { useGetUserByIdQuery } from '../../Store/Service/Service'
import Loader from '../Loader/Loader'
import * as S from './MyCourseInProfile.styles'

function MyCourseInProfile() {
  // const dispatch = useDispatch()
  // const userId = localStorage.getItem('userID')
  const userId = 'Nj8JToDl4N382Y6NTQ'
  console.log('айди', userId)
  const { data, isLoading } = useGetUserByIdQuery(userId)
  console.log(data)
  if (isLoading) {
    return <Loader />
  }

  return (
    <S.HeaderStyleMyProfile>
      <S.NameCourseUser>Мои Курсы</S.NameCourseUser>

      <S.StyleMyCoursBlock>
        {data &&
          typeof data.courses === 'object' &&
          Object.keys(data.courses).map((key, i) => {
            const item = data.courses[key]
            console.log(item)
            return (
              <S.ImgBox key={i}>
                <S.ImgTitle>{item.name}</S.ImgTitle>
                <S.BlockTrain src={handleImg(item)} alt="fitness_img" />
                <div>
                  <S.CourseButton>Перейти →</S.CourseButton>
                </div>
              </S.ImgBox>
            )
          })}
      </S.StyleMyCoursBlock>
    </S.HeaderStyleMyProfile>
  )
}

export default MyCourseInProfile
