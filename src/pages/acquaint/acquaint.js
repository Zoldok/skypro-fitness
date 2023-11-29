import * as S from './acquaint.styled'
import React, { useState } from 'react'
import ModalComponent from '../../components/ModalWindow/recording'
import { useNavigate, useParams } from 'react-router-dom'
import { useCourseInfo } from '../../components/CardsSection/CoursDate'
import Preloader from '../../components/Loader/Preloader'

export default function Acquaint() {
  const { COURSEINFO, isLoading, courseData } = useCourseInfo()
  const [isModalOpen, setIsModalOpen] = useState(false)

  const { courseName } = useParams()

  const navigate = useNavigate()
  const goHome = () => {
    navigate('/')
  }

  if (isLoading) {
    return <Preloader />
  }

  const selectedCourse = COURSEINFO.find((course) => course.id === courseName)

  if (!selectedCourse) {
    return <Preloader />
  }
  return (
    <S.StyledPromo>
      <S.NavLogo onClick={goHome}>
        <S.LogoImage src="../../../img/logo.png" alt="logo" />
      </S.NavLogo>
      <S.CourseBlock>
        <S.CourseBlockName>
          <S.CourseBlockText>{selectedCourse.data.name}</S.CourseBlockText>
        </S.CourseBlockName>
        <S.StyleMyCoursBlock>
          <S.BlockTrain
            src={`../../../img/course-banner/${selectedCourse.data.name}.png`}
            alt="logo"
          />
        </S.StyleMyCoursBlock>
      </S.CourseBlock>
      <S.AboutPages>Подойдет для вас, если:</S.AboutPages>
      <S.CoursReadings>
        {selectedCourse.data.accordance.map((item, index) => (
          <S.Div key={item}>
            <S.LogoImage2 src={`../../../img/${index + 1}.svg`} alt="logo" />
            <S.AboutPages2>{item}</S.AboutPages2>
          </S.Div>
        ))}
      </S.CoursReadings>
      <S.AboutPages>Направления:</S.AboutPages>
      <S.Directions>
        {selectedCourse.data.directions.map((direction, index) => (
          <S.DirectionsAbout key={index}>
            {`• ${direction}`} <br />
          </S.DirectionsAbout>
        ))}
      </S.Directions>
      <S.DirectionsAboutCourse>
        {selectedCourse.data.description}
      </S.DirectionsAboutCourse>

      <S.Application>
        <S.DirectionsAboutCourse>
          Оставьте заявку на пробное занятие, мы свяжемся с вами, поможем с
          выбором направления и тренера, с которым тренировки принесут здоровье
          и радость!
        </S.DirectionsAboutCourse>
        <S.ProfileButton onClick={() => setIsModalOpen(true)}>
          Записаться
        </S.ProfileButton>
        {isModalOpen && (
          <ModalComponent onClose={() => setIsModalOpen(false)} />
        )}

        <S.StyleMyCoursBlock2>
          <S.BlockTrainPhone src="../../img/application.svg" alt="logo" />
        </S.StyleMyCoursBlock2>
      </S.Application>
    </S.StyledPromo>
  )
}
