import { useState } from 'react'
import { handleImg } from '../../help'
import { useGetUserQuery } from '../../Store/Service/Service'
import Preloader from '../Loader/Preloader'
import * as S from './MyCourseInProfile.styles'

function MyCourseInProfile() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedCourse, setSelectedCourse] = useState(null)
  const [selectedItemId, setSelectedItemId] = useState(null)

  // const userId = localStorage.getItem('userId')
  const userId = 'Nj8JToDl4N382Y6NTQ'


  // const { data, isLoading } = useGetUserByIdQuery(userId)

  // console.log('айди', userId)
  // const { data, isLoading } = useGetUserQuery(userId)

  console.log(data)
  if (isLoading) {
    return <Preloader />
  }
  const handleCourseClick = (course) => {
    setSelectedCourse(course)
    console.log('трени курса', course.workout)
    setIsModalOpen(true)
  }
  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <S.HeaderStyleMyProfile>
      <S.NameCourseUser>Мои Курсы</S.NameCourseUser>
      <S.StyleMyCoursBlock>
        {data &&
          typeof data.courses === 'object' &&
          Object.keys(data.courses).map((key, i) => {
            const item = data.courses[key]
            const train = item.workout
            return (
              <S.ImgBox key={i}>
                <S.ImgTitle>{item.name}</S.ImgTitle>
                <S.BlockTrain src={handleImg(item)} alt="fitness_img" />
                <S.CourseButton
                  onClick={() => {
                    handleCourseClick(item)
                  }}
                >
                  Перейти →
                </S.CourseButton>
              </S.ImgBox>
            )
          })}
      </S.StyleMyCoursBlock>

      {isModalOpen && (
        <S.Modal>
          <S.ModalContent>
            <S.CloseButton onClick={closeModal}>Закрыть</S.CloseButton>
            <S.ModalTitle>Выберите тренировку</S.ModalTitle>
            <S.ModalList>
              {selectedCourse &&
                selectedCourse.workout &&
                typeof selectedCourse.workout === 'object' &&
                Object.keys(selectedCourse.workout).map((key, i) => {
                  const item = selectedCourse.workout[key]

                  const onListItemClick = (itemName) => {
                    setSelectedItemId((prevSelectedItemId) =>
                      prevSelectedItemId !== itemName ? itemName : null,
                    )
                  }

                  return (
                    <>
                      <div
                        key={(i, item.name)}
                        onClick={() => onListItemClick(item.name)}
                      >
                        <S.ModalListItem
                          active={item.name === selectedItemId}
                          className={
                            item.name === selectedItemId ? 'active' : ''
                          }
                        >
                          {item.name}
                          {item.name === selectedItemId && (
                            <img src="/img/active_item.svg" alt="active_item" />
                          )}
                        </S.ModalListItem>
                      </div>
                    </>
                  )
                })}
            </S.ModalList>
          </S.ModalContent>
        </S.Modal>
      )}
    </S.HeaderStyleMyProfile>
  )
}

export default MyCourseInProfile
