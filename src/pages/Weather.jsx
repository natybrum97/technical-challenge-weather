import styled from "styled-components";
import SmallerContainerContent from "../components/SmallerContainerContent";
import LargerContainerContent from "../components/LargerContainerContent";
import { useContext } from "react";
import { WeatherContext } from "../contexts/WeatherContext";


export default function Weather() {

  const { darkMode } = useContext(WeatherContext);

  return (
    <>

      <Container>

        <SmallerContainer darkMode={darkMode}>
          <SmallerContainerContent />
        </SmallerContainer>

        <LargerContainer darkMode={darkMode}>
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
`;

const SmallerContainer = styled.section`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => (props.darkMode ? "#333" : "#FFF")};
`;

const LargerContainer = styled.section`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => (props.darkMode ? "black" : "#FFF")};
  height: 100vh;
`;


