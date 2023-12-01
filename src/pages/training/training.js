import { useParams } from 'react-router'
import {
  useAddNewUserMutation,
  useGetUserQuery,
  useGetWorkoutByIdQuery,
} from '../../Store/Service/Service'
import Exercises from '../../components/Exercises/Exercises'
import Video from '../../components/Video/Video'
import * as S from './training.styled'
import Progress from '../../components/Progress/Progress'
import { useEffect, useState } from 'react'
import MyProgress from '../../components/MyProgress/MyProgress'
import PushNotice from '../../components/SetProgress/SetProgres'
import HeaderProfile from '../../components/Header/HeaderProfile'
import { Preloader } from '../../components/Loader/Preloader.styles'

export default function TrainingPage() {
  const { id } = useParams()
  const { data, isLoading } = useGetWorkoutByIdQuery(id)
  const userId = localStorage.getItem('userId')
  const { data: userData, isLoading: isLoading1 } = useGetUserQuery(userId)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [UpdateUser] = useAddNewUserMutation()
  const [showNotice, setShowNotice] = useState(false)

  const setProgress = (array) => {
    let changedUserData = JSON.parse(JSON.stringify(userData))

    if (!changedUserData.progress) {
      changedUserData.progress = []
    }

    array.forEach((d) => {
      let existingProgress = changedUserData.progress.find(
        (p) => p.exercise == d.id,
      )
      if (existingProgress) {
        existingProgress.number_of_repetitions = d.number_of_repetitions
      } else {
        existingProgress = {
          number_of_repetitions: d.number_of_repetitions,
          exercise: d.id,
        }
        changedUserData.progress.push(existingProgress)
      }
    })
    UpdateUser({ id: userId, data: changedUserData }).finally(() => {
      window.location.reload()
    })
    setShowNotice(true)
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
  if (isLoading || isLoading1) return <Preloader />
  return (
    <S.StyledSection>
      <HeaderProfile />
      <S.TitleContent>
        <S.Content>{data.courseName}</S.Content>
        <S.TitleTraining>{data.name}</S.TitleTraining>
      </S.TitleContent>
      <Video videoUrl={data.url} />
      <S.Footer>
        <Exercises
          exercises={data.exercises}
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
        <Progress userProgress={userData.progress} exercises={data.exercises} />
      </S.Footer>
      {isModalOpen && (
        <MyProgress
          exercises={data.exercises}
          setIsModalOpen={setIsModalOpen}
          setProgress={setProgress}
        />
      )}
      {showNotice ? <PushNotice setShowNotice={setShowNotice} /> : ''}
    </S.StyledSection>
  )
}
