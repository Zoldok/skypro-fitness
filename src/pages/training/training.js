import { useParams } from 'react-router'
import { useGetUserQuery, useGetWorkoutByIdQuery, useSetUserWorkoutCompletedMutation } from '../../Store/Service/Service'
import Exercises from '../../components/Exercises/Exercises'
import Header from '../../components/Header/Header'
import Video from '../../components/Video/Video'
import * as S from './training.styled'
import Progress from '../../components/Progress/Progress'
import {  useState } from 'react'
import MyProgress from '../../components/MyProgress/MyProgress'

export default function TrainingPage() {
    const userId = localStorage.getItem('userId')
    console.log(userId)
    const { data: userData, isLoading: isLoading1 } = useGetUserQuery(userId)
    console.log(userData)
  const { id } = useParams();
  const { data, isLoading } = useGetWorkoutByIdQuery(id);
  const [isModalOpen, setIsModalOpen] = useState(false);

if(isLoading || isLoading1) return <div>Идет загрузка</div>

    return (
        <S.StyledSection >
          <Header />
          <S.TitleContent>
            <S.Content>Название тренировки</S.Content>
            <S.TitleTraining>{data.name}</S.TitleTraining>
          </S.TitleContent>
          <Video videoUrl={data.url} />
            <S.Footer>
                <Exercises exercises={data.exercises} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
                <Progress data={data}/>
            </S.Footer>
            {isModalOpen && (
    
        <MyProgress data={data} setIsModalOpen={setIsModalOpen}/>
    )}
            {/* <SetProgress /> */}
        </S.StyledSection>
      )
}