import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
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
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedCourse, setSelectedCourse] = useState(null)
  const [selectedWorkoutId, setSelectedWorkoutId] = useState(null)
  const [completedWorkouts, setCompletedWorkouts] = useState({})
  const userId = localStorage.getItem('userId')
  const { data, isLoading } = useGetUserQuery(userId)
  const { data: allCourses, isLoading: isLoading1 } = useGetAllCoursesQuery()
  const { data: allWorkouts, isLoading: isLoading2 } = useGetWorkoutsQuery()

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
    setSelectedCourse(filteredWorkouts)
    setIsModalOpen(true)
  }
  const closeModal = () => {
    setIsModalOpen(false)
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Escape') {
      closeModal()
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])
  if (isLoading || isLoading1 || isLoading2) {
    return <Preloader />
  }

  const onListItemClick = (id) => {
    setSelectedWorkoutId(id)

    navigate(`/TrainingPage/${id}`)
    setCompletedWorkouts((prevItems) => {
      const updatedItems = { ...prevItems, [id]: !prevItems[id] }
      return updatedItems
    })
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
            {/* <S.CloseButton onClick={closeModal}>Закрыть</S.CloseButton> */}
            <S.ModalTitle>Выберите тренировку</S.ModalTitle>
            <S.ModalList>
              {Object.values(selectedCourse).map((workout, i) => {
                const isCompleted = completedWorkouts[workout._id]
                const isActive = selectedWorkoutId === workout._id

                return (
                  <S.ModalListItem
                    key={(i, workout._id)}
                    onClick={() => onListItemClick(workout._id)}
                    className={isActive ? 'active' : ''}
                  >
                    {workout.name}
                    {isCompleted && isActive && (
                      <img src="/img/active_item.svg" alt="active_item" />
                    )}
                  </S.ModalListItem>
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
