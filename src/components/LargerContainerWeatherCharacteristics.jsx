import { useContext } from "react";
import { WeatherContext } from "../contexts/WeatherContext";
import styled from "styled-components";
import { convertToFahrenheit } from "../useful/convertToFahrenheit";

export default function LargerContainerWeatherCharacteristics() {

    const { fahrenheit, weatherData } = useContext(WeatherContext);

    const minimumTemperatureCelsius = weatherData.minTemperature - 273.15;
    const minimumTemperature = fahrenheit ? convertToFahrenheit(minimumTemperatureCelsius) : minimumTemperatureCelsius;

    const maximumTemperatureCelsius = weatherData.maxTemperature - 273.15;
    const maximumTemperature = fahrenheit ? convertToFahrenheit(maximumTemperatureCelsius) : maximumTemperatureCelsius;

    return (
        <WeatherCharacteristics>
            <Characteristics>
                <Text>Mínima</Text>
                <Value>{minimumTemperature.toFixed(0)}{fahrenheit ? '° F' : '° C'}</Value>
            </Characteristics>

            <Characteristics>
                <Text>Máxima</Text>
                <Value>{maximumTemperature.toFixed(0)}{fahrenheit ? '° F' : '° C'}</Value>
            </Characteristics>

            <Characteristics>
                <Text>Umidade</Text>
                <Value>{weatherData.humidity}%</Value>
            </Characteristics>

            <Characteristics>
                <Text>Velocidade do vento</Text>
                <Value>{weatherData.speed} m/s</Value>
            </Characteristics>
        </WeatherCharacteristics>
    )
}

const WeatherCharacteristics = styled.div`
    width: calc(100% - 10%);
    height: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap:calc(100% - 90%);
`

const Characteristics = styled.div`
    width: 465px;
    height: 180px;
    margin-top: 50px;
    border-radius: 32px;
    background: linear-gradient(117.33deg, #4D4494 22.83%, #4F43AE 90.03%);
    box-shadow: 0px 24px 48px 0px #314F7C14;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 20px;
`

const Text = styled.div`
    width: 250px;
    height: 23px;
    font-family: 'Poppins';
    font-size: 22px;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;
    margin-left: 40px;
    color: #FFFFFF;
`

const Value = styled.div`
    width: 280px;
    height: 45px;
    font-family: 'Poppins';
    font-size: 48px;
    font-weight: 600;
    line-height: 36px;
    letter-spacing: 0em;
    text-align: left;
    margin-left: 40px;
    color: #FFFFFF;
`