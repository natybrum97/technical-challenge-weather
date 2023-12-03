import styled from "styled-components";
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
            <Position>
              <Circle weatherDescription={weatherData.description} />
            </Position>
            <TemperatureText darkmode={darkmode ? 'true' : 'false'} weatherDescription={weatherData.description}>
              {temperature.toFixed(0)}
            </TemperatureText>

            <Degrees darkmode={darkmode ? 'true' : 'false'} weatherDescription={weatherData.description}>
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
   color: ${(props) => {
    switch (props.weatherDescription) {
      case "Clear":
        return "#FF7F00";
      case "Clouds":
        return "#808080";
      case "Rain":
        return "#0000FF";
      case "Snow":
        return "#AFADAD";
      case "Thunderstorm":
        return "#800080";
      case "Drizzle":
        return "#00BFFF";
      case "Mist":
        return "#AFADAD";
      default:
        return props.darkmode === 'true' ? "#FFF" : "#222222";
    }
  }};
`;


const Degrees = styled.p`
    width: 144px;
    height: 95px;
    font-family: 'Poppins';
    font-size: 120px;
    font-weight: 300;
    line-height: 100px;
    letter-spacing: 0em;
    text-align: right;
    color: ${(props) => {
    switch (props.weatherDescription) {
      case "Clear":
        return "#FF7F00";
      case "Clouds":
        return "#808080";
      case "Rain":
        return "#0000FF";
      case "Snow":
        return "#D3D3D3";
      case "Thunderstorm":
        return "#800080";
      case "Drizzle":
        return "#ADD8E6";
      case "Mist":
        return "#D3D3D3";
      default:
        return props.darkmode === 'true' ? "#FFF" : "#222222";
    }
  }};
`

const Weather = styled.h5`
     color: ${(props) => (props.darkmode === 'true' ? "#FFF" : "#222222")};
     text-transform: capitalize;
`;

const Circle = styled.div`
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background-color: ${(props) => {
    switch (props.weatherDescription) {
      case "Clear":
        return "#FF7F00";
      case "Clouds":
        return "#808080";
      case "Rain":
        return "#0000FF";
      case "Snow":
        return "#D3D3D3";
      case "Thunderstorm":
        return "#800080";
      case "Drizzle":
        return "#ADD8E6";
      case "Mist":
        return "#D3D3D3";
      default:
        return props.darkmode === 'true' ? "#FFF" : "#222222";
    }
  }};
`;

const Position = styled.div`
    width: 150px;
    height: 150px;
    display:flex;
    justify-content: center;
    align-items: center;
`;