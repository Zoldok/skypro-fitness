import { useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { handleImg } from '../../help'
import {
  useGetAllCoursesQuery,
  useGetUserQuery,
  useGetWorkoutsQuery,
} from '../../Store/Service/Service'
import Preloader from '../Loader/Preloader'
import * as S from './MyCourseInProfile.styles'

function MyCourseInProfile() {
  const modalRef = useRef(null)
  const navigate = useNavigate()
  const { id } = useParams()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedCourse, setSelectedCourse] = useState(null)
  const [selectedItemId, setSelectedItemId] = useState(null)
  const userId = localStorage.getItem('userId')
  const { data, isLoading } = useGetUserQuery(userId)
  const { data: allCourses, isLoading: isLoading1 } = useGetAllCoursesQuery()
  const { data: allWorkouts, isLoading: isLoading2 } = useGetWorkoutsQuery()

  if (isLoading || isLoading1 || isLoading2) {
    return <Preloader />
  }

  const filteredCourses = {}
  for (const key in allCourses) {
    if (data?.courses.includes(key)) {
      filteredCourses[key] = allCourses[key]
    }
  }

  const handleCourseClick = (course) => {
    const filteredWorkouts = {}
    for (const key in allWorkouts) {
      if (course.workout.includes(key)) {
        filteredWorkouts[key] = allWorkouts[key]
      }
    }
    console.log(filteredWorkouts)
    setSelectedCourse(filteredWorkouts)
    setIsModalOpen(true)
  }
  const closeModal = () => {
    setIsModalOpen(false)
  }

const onListItemClick = ( id ) => {
    setSelectedItemId((prevSelectedItemId) =>
      prevSelectedItemId !== courseName ? courseName : null,
    )
    navigate(`/TrainingPage/${id}`) 
  }
  return (
    <S.HeaderStyleMyProfile>
      <S.NameCourseUser>Мои Курсы</S.NameCourseUser>
      <S.StyleMyCoursBlock>
        {Object.values(filteredCourses).map((course, i) => {
          return (
            <S.ImgBox key={i}>
              <S.ImgTitle>{course.name}</S.ImgTitle>
              <S.BlockTrain src={handleImg(course)} alt="fitness_img" />
              <S.CourseButton
                onClick={() => {
                  handleCourseClick(course)
                }}
              >
                Перейти →
              </S.CourseButton>
            </S.ImgBox>
          )
        })}
      </S.StyleMyCoursBlock>

      {isModalOpen && (
        <S.Modal ref={modalRef}>
          <S.ModalContent>
            <S.CloseButton onClick={closeModal}>Закрыть</S.CloseButton>
            <S.ModalTitle>Выберите тренировку</S.ModalTitle>
            <S.ModalList>
              { Object.values(selectedCourse).map((workout, i) => {
                console.log(workout)

                  return (
                    <>
                      <div
                        key={(i, workout._id )}
                        onClick={() => onListItemClick(workout._id)}
                      >
                        <S.ModalListItem
                          active={workout.name === selectedItemId}
                          className={
                            workout.name === selectedItemId ? 'active' : ''
                          }
                        >
                          {workout.name}
                          {workout.name === selectedItemId && (
                            <img src="/img/active_course.svg" alt="active_course" />
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