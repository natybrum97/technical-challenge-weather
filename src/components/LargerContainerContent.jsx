import styled from "styled-components";
import { useContext } from "react";
import { WeatherContext } from "../contexts/WeatherContext";
import WhatTheDay from "./LargerContainerWhatTheDay";
import LargerContainerCity from "./LargerContainerCity";
import LargerContainerWeatherCharacteristics from "./LargerContainerWeatherCharacteristics";
import LargerContainerRecomendation from "./LargerContainerRecomendation";

export default function LargerContainerContent() {

  const { darkmode, weatherData, today } = useContext(WeatherContext);

  return (


    <PageContainer darkmode={darkmode ? 'true' : 'false'}>

      <WhatTheDay />

      <LargerContainerCity />


      {today === true && (
        <>
          <LargerContainerWeatherCharacteristics />

          {Object.keys(weatherData).length > 0 && (
            <>

              <LargerContainerRecomendation />

              <RightsReserved darkmode={darkmode ? 'true' : 'false'}>Dados fornecidos pela <span>Open Weather API</span></RightsReserved>

              <RightsReservedResponsive darkmode={darkmode ? 'true' : 'false'}>Todos os direitos reservados. 2023.</RightsReservedResponsive>
            </>
          )}

        </>
      )}


    </PageContainer>

  )
}

const PageContainer = styled.div`
    width: calc(100% - 65px);
    height: calc(100% - 65px);
    display:flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background-color: ${(props) => (props.darkmode === 'true' ? "black" : "#EFEFEF")};

`

const RightsReserved = styled.h4`
    width: calc(100% - 10%);
    height: 48px;
    text-align: left;
    color: ${(props) => (props.darkmode === 'true' ? "#FFF" : "#222222")};
    span{
        color:#96A7F2;
    }
    @media (max-width: 1230px) {
    width: 100%;
    text-align: center;
  }
`

const RightsReservedResponsive = styled.h4`
    display: none;
    width: calc(100% - 10%);
    height: 48px;
    text-align: left;
    color: ${(props) => (props.darkmode === 'true' ? "#FFF" : "#222222")};

    @media (max-width: 1230px) {
    display: block;
    text-align: center;
    margin-bottom: 50px;
  }
`

