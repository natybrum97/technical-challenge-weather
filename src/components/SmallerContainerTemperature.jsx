import styled from "styled-components";
import Circle from '../assets/circle.png';
import { useContext } from "react";
import { WeatherContext } from "../contexts/WeatherContext";
import { convertToFahrenheit } from "../useful/convertToFahrenheit";
import { translateWeatherDescription } from "../useful/translateWeatherDescription";

export default function SmallerContainerTemperature() {
  const { darkmode, fahrenheit, weatherData } = useContext(WeatherContext);

  const temperatureCelsius = weatherData.temperature - 273.15;
  const temperature = fahrenheit ? convertToFahrenheit(temperatureCelsius) : temperatureCelsius;

  return (
    <Temperature>
      {Object.keys(weatherData).length > 0 && (
        <>
          <TemperatureMeasurement>
            <ImageTemperature src={Circle} alt="Tópico" />
            <TemperatureText darkmode={darkmode ? 'true' : 'false'}>
              {temperature.toFixed(0)}
            </TemperatureText>
            <Degrees darkmode={darkmode ? 'true' : 'false'}>
              {fahrenheit ? '°F' : '°C'}
            </Degrees>
          </TemperatureMeasurement>

          <Weather darkmode={darkmode ? 'true' : 'false'}>
            {translateWeatherDescription(weatherData.description)}
          </Weather>
        </>
      )}
    </Temperature>
  );
}

const Temperature = styled.div`
    width: 500px;
    height: 228px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`

const ImageTemperature = styled.img`
    width: 150px;
    height: 150px;
`;

const TemperatureMeasurement = styled.div`
    width: 500px;
    height: 150px;
    display:flex;
    justify-content: center;
    align-items: flex-start;
`
const TemperatureText = styled.p`
   width: 175px;
   height: 150px;
   font-family: 'Poppins';
   font-size: 150px;
   font-weight: 300;
   line-height: 140px;
   letter-spacing: 0em;
   text-align: left;
   color: #EC6E4C;
`

const Degrees = styled.p`
    width: 144px;
    height: 95px;
    font-family: 'Poppins';
    font-size: 120px;
    font-weight: 300;
    line-height: 100px;
    letter-spacing: 0em;
    text-align: left;
    color: #EC6E4C;
`

const Weather = styled.h5`
     color: ${(props) => (props.darkmode === 'true' ? "#FFF" : "#222222")};
     text-transform: capitalize;
`;