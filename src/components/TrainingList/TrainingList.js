import { useParams } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import * as S from './TrainingListStyle'
import { setTrainingList } from '../../Store/Slice/Slice'
import { useGetUserByIdQuery } from '../../Store/Service/Service'
import Loader from '../Loader/Loader'

const TrainingList = ({ workouts, onClose }) => {
  const dispatch = useDispatch()
  const modalRef = useRef(null)
  const userId = 'Nj8JToDl4N382Y6NTQ'
  const [show, setShow] = useState(false)
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        show &&
        event.target &&
        modalRef.current &&
        !modalRef.current.contains(event.target)
      ) {
        setShow(false)
      }
    }

    document.addEventListener('mousedown', handleOutsideClick)

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick)
    }
  }, [show])

  if (!Array.isArray(workouts)) {
    return null // or any other fallback UI you prefer
  }

  workouts.forEach((workout) => {
    console.log(workout)
  })

  return (
    <S.Wrapper>
      <S.Box ref={modalRef}>
        <S.Title>Выберите тренировку</S.Title>
        {workouts.map((workout, index) => (
          <>
            <S.Buttons>
              <S.Button key={index}>{workout}</S.Button>
            </S.Buttons>
            {/* <ul>
              <li key={index}>{workout}</li>
            </ul> */}
          </>
        ))}
      </S.Box>
    </S.Wrapper>
  )
}
export default TrainingList
