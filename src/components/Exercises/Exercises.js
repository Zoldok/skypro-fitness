import * as S from './Exercises.styled'

export default function Exercises({exercises, setIsModalOpen }) {
    return (
        <S.ExercisesDiv>
            <S.ExercisesTitle>Упражнения</S.ExercisesTitle>
            <S.ExercisesUl>
            {Object.values(exercises).map((exercise, index) => (
                <S.ExercisesLi key={index}>
                    <S.ExercisesStrong>{exercise.name}</S.ExercisesStrong>  
                    <S.ExercisesStrong> ( {exercise.number} повторений )</S.ExercisesStrong> 
                </S.ExercisesLi>
                ))}
            </S.ExercisesUl>
            <S.ExercisesButton onClick={() => setIsModalOpen(true)}>Заполнить свой прогресс</S.ExercisesButton>
        </S.ExercisesDiv>
    )
}