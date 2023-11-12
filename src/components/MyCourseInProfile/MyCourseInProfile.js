import * as S from './MyCourseInProfile.styles'

function MyCourseInProfile() {
  return (
    <S.HeaderStyleMyProfile>
      <S.NameCourseUser>Мои Курсы</S.NameCourseUser>
      <S.StyleMyCoursBlock>
      <S.BlockTrain src="../../../img/card1.png" alt="logo" />
        <S.BlockTrain src="../../../img/card2.png" alt="logo" />
        <S.BlockTrain src="../../../img/card3.png" alt="logo" />
      </S.StyleMyCoursBlock>
    </S.HeaderStyleMyProfile>
  )
}

export default MyCourseInProfile
