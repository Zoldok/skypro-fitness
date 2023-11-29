import { useParams } from 'react-router'
import {
  useAddNewUserMutation,
  useGetUserQuery,
  useGetWorkoutByIdQuery,
} from '../../Store/Service/Service'
import Exercises from '../../components/Exercises/Exercises'
import Header from '../../components/Header/Header'
import Video from '../../components/Video/Video'
import * as S from './training.styled'
import Progress from '../../components/Progress/Progress'
import { useState } from 'react'
import MyProgress from '../../components/MyProgress/MyProgress'
// import { Notifications } from 'react-push-notification'
import PushNotice from '../../components/SetProgress/SetProgres'

export default function TrainingPage() {
  const { id } = useParams()
  const { data, isLoading } = useGetWorkoutByIdQuery(id)
  const userId = localStorage.getItem('userId')
  const { data: userData, isLoading: isLoading1 } = useGetUserQuery(userId)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [UpdateUser] = useAddNewUserMutation()
  const [showNotice, setShowNotice] = useState(false)

  if (isLoading || isLoading1) return <div>Идет загрузка</div>

  const setProgress = (array) => {
    let changedUserData = JSON.parse(JSON.stringify(userData))
    console.log(changedUserData)

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
    console.log(changedUserData)
  }

  return (
    <S.StyledSection>
      {/* <Notifications /> */}
      <Header />
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
