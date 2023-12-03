import styled from "styled-components";
import { useContext } from "react";
import { WeatherContext } from "../contexts/WeatherContext";
import { shouldWearJacket } from "../useful/shouldWearJacket";

export default function LargerContainerRecomendation() {

    const { weatherData } = useContext(WeatherContext);

    const min = weatherData.minTemperature - 273.15;
    const max = weatherData.maxTemperature - 273.15;
    const temp = weatherData.temperature - 273.15;

    console.log(weatherData.description);

    return (
        <Recommendation>

            {shouldWearJacket(temp, min, max)
                ? "Sim, você deve levar um casaquinho!"
                : "Não, você não deve levar um casaquinho!"
            }

        </Recommendation>
    )
}

const Recommendation = styled.div`
    width: calc(100% - 10%);
    height: 150px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    color: #AFADAD;
    font-family: 'Poppins';
    font-size: 24px;
    font-style: italic;
    font-weight: 400;
    line-height: 48px;
    letter-spacing: 0em;

    @media (max-width: 1230px) {
    text-align: center;
    height: 120px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`