import { useEffect } from 'react';
import { useGetExercisesByIdQuery } from '../../Store/Service/Service'
import * as S from './Exercises.styled'

export default function Exercises({exercises, setIsModalOpen }) {
    const { data, isLoading } = useGetExercisesByIdQuery()
    console.log(exercises)
    console.log(data)
//    В цикле получить по id упражнения
    // useEffect(() => {
    //     for (const key in data) {
    //         const exerciseKey = data[key]; 
    //         if (exercises.includes(exerciseKey)) {
    //           console.log(exerciseKey); 
    //         }
    //       }
    //   }, [exercises, data]);
        const filteredExercises = {};
    for (const key in data) {
    if (exercises.includes(key)) {
        filteredExercises[key] = data[key];
    }
    }
    console.log(filteredExercises);

      if(isLoading) return <div>pfuheprf</div>
    return (
        <S.ExercisesDiv>
            <S.ExercisesTitle>Упражнения</S.ExercisesTitle>
            <S.ExercisesUl>
            {Object.values(filteredExercises).map((exercise, index) => (
                <S.ExercisesLi key={index}>
                    <S.ExercisesStrong>{exercise.name}</S.ExercisesStrong>  
                    <S.ExercisesStrong> ( {exercise.number_of_repetitions} повторений )</S.ExercisesStrong> 
                </S.ExercisesLi>
                ))}
            </S.ExercisesUl>
            <S.ExercisesButton onClick={() => setIsModalOpen(true)}>Заполнить свой прогресс</S.ExercisesButton>
        </S.ExercisesDiv>
    )
}