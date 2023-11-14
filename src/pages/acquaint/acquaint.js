import * as S from './acquaint.styled'

export default function Acquaint() {
  return (
    <S.StyledPromo>
      <S.NavLogo>
        <S.LogoImage src="../../../img/logo.png" alt="logo" />
      </S.NavLogo>
      <S.CourseBlock>
        <S.CourseBlockName>
          <S.CourseBlockText>Йога</S.CourseBlockText>
        </S.CourseBlockName>
        <S.StyleMyCoursBlock>
          <S.BlockTrain src="../../img/yoga_banner.png" alt="logo" />
        </S.StyleMyCoursBlock>
      </S.CourseBlock>
      <S.AboutPages>Подойдет для вас, если:</S.AboutPages>
      <S.CoursReadings>
        <S.LogoImage2 src="../../../img/1.svg" alt="logo" />

        <S.AboutPages2>
          Давно хотели попробовать йогу, но не решались начать.
        </S.AboutPages2>

        <S.LogoImage2 src="../../../img/2.svg" alt="logo" />

        <S.AboutPages2>
          Хотите укрепить позвоночник, избавиться от болей в спине и суставах.
        </S.AboutPages2>

        <S.LogoImage2 src="../../../img/3.svg" alt="logo" />

        <S.AboutPages2>
          Ищете активность, полезную для тела и души.
        </S.AboutPages2>
      </S.CoursReadings>
      <S.AboutPages>Направления:</S.AboutPages>
      <S.Directions>
        <S.DirectionsAbout>
          • Йога для новичков <br />• Классическая <br />• Йогатерапия
        </S.DirectionsAbout>
        <S.DirectionsAbout>
          • Кундалини-йога <br />• Хатха-йога <br />• Аштанга-йога
        </S.DirectionsAbout>
      </S.Directions>
      <S.DirectionsAboutCourse>
        Благодаря комплексному воздействию упражнений происходит проработка всех
        групп мышц, тренировка суставов, улучшается циркуляция крови. Кроме
        того, упражнения дарят отличное настроение, заряжают бодростью и
        помогают противостоять стрессам.
      </S.DirectionsAboutCourse>

      <S.Application>
        <S.DirectionsAboutCourse>
          Оставьте заявку на пробное занятие, мы свяжемся с вами, поможем с
          выбором направления и тренера, с которым тренировки принесут здоровье
          и радость!
        </S.DirectionsAboutCourse>
        <S.ProfileButton>Записаться</S.ProfileButton>

        <S.StyleMyCoursBlock2>
          <S.BlockTrainPhone src="../../img/application.svg" alt="logo" />
        </S.StyleMyCoursBlock2>
      </S.Application>
    </S.StyledPromo>
  )
}
