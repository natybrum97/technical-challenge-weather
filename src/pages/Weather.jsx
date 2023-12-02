import styled from "styled-components";
import SmallerContainerContent from "../components/SmallerContainerContent";
import LargerContainerContent from "../components/LargerContainerContent";
import { useContext } from "react";
import { WeatherContext } from "../contexts/WeatherContext";


export default function Weather() {

  const { darkmode } = useContext(WeatherContext);

  return (
    <>

      <Container>

        <SmallerContainer darkmode = {darkmode ? 'true' : 'false'}>
          <SmallerContainerContent />
        </SmallerContainer>

        <LargerContainer darkmode = {darkmode ? 'true' : 'false'}>
          <LargerContainerContent />
        </LargerContainer>

      </Container>
    </>

  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  border: 4px solid #D8D8D8;

  @media (max-width: 1230px) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
`;

const SmallerContainer = styled.section`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => (props.darkmode === 'true' ? "#333" : "#FFF")};

  @media (max-width: 1230px) {
    width: 100%;
    height: auto;
  }
`;

const LargerContainer = styled.section`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => (props.darkmode === 'true' ? "black" : "#EFEFEF")};
  height: auto;
`;


