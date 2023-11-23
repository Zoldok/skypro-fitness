import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import * as S from './TrainingListStyle'
import { setTrainingList } from '../../Store/Slice/Slice'

const TrainingList = () => {
  const dispatch = useDispatch()
  const selector = useSelector(setTrainingList)
  const modal = selector.payload.Api.forTrainingList

  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    if (modal !== false) {
      setIsActive(!isActive)
    }
  }, [modal]) // eslint-disable-line

  const handleChooise = () => {
    dispatch(setTrainingList({ modal: !modal }))
  }

  return (
    <S.Wrapper>
      <S.Box>
        <S.Title>Выберите тренировку</S.Title>
        <S.Buttons>
          <S.Button
            exercise={'Утренняя практика'}
            number={'Йога на каждый день / 1 день'}
          />

          <S.Button
            exercise={'Красота и здоровье'}
            number={'Йога на каждый день / 2 день'}
            onClick={handleChooise}
          />

          <S.Button
            exercise={'Асаны стоя'}
            number={'Йога на каждый день / 3 день '}
          />
          <S.Button
            exercise={'Растягиваем мышцы бедра'}
            number={'Йога на каждый день / 5 день'}
          />
          <S.Button
            exercise={'Гибкость спины'}
            number={'Йога на каждый день / 5 день'}
          />
        </S.Buttons>
      </S.Box>
    </S.Wrapper>
  )
}
export default TrainingList
