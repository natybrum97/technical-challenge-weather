import { useContext } from "react";
import { WeatherContext } from "../contexts/WeatherContext";
import styled from "styled-components";

export default function LargerContainerCity() {

  const { darkmode, weatherData } = useContext(WeatherContext);

  return (
    <CityContainer>

      {Object.keys(weatherData).length > 0 && (
        <>
          <City darkmode={darkmode ? 'true' : 'false'}>{weatherData.city}</City>
          <Coordinates darkmode={darkmode ? 'true' : 'false'}>Lat: {weatherData.latitude}   Long: {weatherData.longitude}</Coordinates>
        </>
      )}

    </CityContainer>
  )
}

const CityContainer = styled.div`
    width: calc(100% - 10%);
    height: auto;
    margin-top: 50px;

    @media (max-width: 1230px) {
    height: 130px;
    margin-top: 0px;
  }
`

const City = styled.h1`
    width: calc(100% - 10%);
    display:flex;
    justify-content: flex-start;
    align-items: center;
    color: ${(props) => (props.darkmode === 'true' ? "#FFF" : "#222222")};

    @media (max-width: 1550px) {
    width:100%;
    font-family: 'Poppins';
    font-size: 80px;
    font-weight: 600;
    line-height: 70px;
    letter-spacing: 0em;
    margin-top: 30px;
    margin-bottom: 20px;
  }
`;

const Coordinates = styled.h4`
    width: calc(100% - 10%);
    height: 48px;
    text-align: left;
    color: ${(props) => (props.darkmode === 'true' ? "#FFF" : "#222222")};
    
    @media (max-width: 1230px) {
    width: 100%;
    text-align: left;
  }
`