import { useNavigate, useParams } from 'react-router'
import { useGetWorkoutByIdQuery, useSetUserWorkoutCompletedMutation } from '../../Store/Service/Service'
import Exercises from '../../components/Exercises/Exercises'
import Header from '../../components/Header/Header'
import Video from '../../components/Video/Video'
import * as S from './training.styled'
import Progress from '../../components/Progress/Progress'
import { useState } from 'react'
import MyProgress from '../../components/MyProgress/MyProgress'
import SetProgress from '../../components/SetProgress/SetProgres'

export default function TrainingPage() {
    const { id } = useParams()
    const { data, isLoading } = useGetWorkoutByIdQuery(id)
    if(isLoading) return <div>Идет загрузка</div>
   
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isModalOkOpen, setIsModalOkOpen] = useState(false);
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
            {isModalOpen && <MyProgress data={data} onClose={() => setIsModalOpen(false)} setIsModalOkOpen={setIsModalOkOpen}/>}
            {isModalOkOpen && <SetProgress onClose={() => setIsModalOkOpen(false)} />}
        </S.StyledSection>
      )
}