import { useParams } from 'react-router'
import { useGetWorkoutByIdQuery, useSetUserWorkoutCompletedMutation } from '../../Store/Service/Service'
import Exercises from '../../components/Exercises/Exercises'
import Header from '../../components/Header/Header'
import Video from '../../components/Video/Video'
import * as S from './training.styled'
import Progress from '../../components/Progress/Progress'

export default function TrainingPage() {
    const { id } = useParams()
    const { data, isLoading } = useGetWorkoutByIdQuery(id)
    console.log('params', id)
    console.log(data)
    if(isLoading) return <div>Идет загрузка</div>
    return (
        <S.StyledSection>
          <Header />
          <S.TitleContent>
            <S.Content>Название тренировки</S.Content>
            <S.TitleTraining>{data.name}</S.TitleTraining>
          </S.TitleContent>
          <Video videoUrl={data.url} />
            <S.Footer>
                <Exercises exercises={data.exercises}/>
                <Progress data={data}/>
            </S.Footer>
            {/* <Myprogress /> */}
        </S.StyledSection>
      )
}