import { useGetExercisesByIdQuery } from '../../Store/Service/Service'
import * as S from './Exercises.styled'

export default function Exercises({exercises, setIsModalOpen }) {
    const { data, isLoading } = useGetExercisesByIdQuery()

    const filteredExercises = {};
    for (const key in data) {
        if (exercises.includes(key)) {
            filteredExercises[key] = data[key];
        }
    }

    if(isLoading) return <div>идет загрузка</div>
    return (
        <S.ExercisesDiv>
            <S.ExercisesTitle>Упражнения</S.ExercisesTitle>
            <S.ExercisesUl>
                {Object.values(filteredExercises).map((exercise, index) => (
                    <S.ExercisesLi key={index}>
                        <S.ExercisesStrong>
                            {exercise.name} ({exercise.number_of_repetitions} повторений)
                        </S.ExercisesStrong>
                    </S.ExercisesLi>
                    ))}
                </S.ExercisesUl>
                 <S.ExercisesButton onClick={() => setIsModalOpen(true)}>Заполнить свой прогресс</S.ExercisesButton>
                
        </S.ExercisesDiv>

    )
}