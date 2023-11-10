import styled from "styled-components";
import Header from "../../components/Header/Header";
import MyProfile from "../../components/MyProfile/MyProfile";
import MyCourseInProfile from "../../components/MyCourseInProfile/MyCourseInProfile";


const StyledSection = styled.section`
  color: #000000;
    max-width: 1440px;
    // height: 100vh;
  margin: 0 auto;
  // position: relative;
  background-color: white;
  display: flex;
    flex-direction: column;
    align-content: center;
    flex-wrap: wrap;
    // flex-wrap: nowrap;
  
`;

export default function Profile() {
  return (
    <StyledSection>

      <Header/>
      <MyProfile/>
      <MyCourseInProfile/>
      <p>Hello World Motherfucker</p>

    </StyledSection>
  );
}