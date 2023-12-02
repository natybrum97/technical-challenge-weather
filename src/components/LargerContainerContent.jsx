import styled from "styled-components";
import { useContext } from "react";
import { WeatherContext } from "../contexts/WeatherContext";
import { convertToFahrenheit } from "../useful/convertToFahrenheit";

export default function LargerContainerContent() {

    const { darkmode, fahrenheit } = useContext(WeatherContext);

    const minimumTemperatureCelsius = 31;
    const minimumTemperature = fahrenheit ? convertToFahrenheit(minimumTemperatureCelsius) : minimumTemperatureCelsius;

    const maximumTemperatureCelsius = 48;
    const maximumTemperature = fahrenheit ? convertToFahrenheit(maximumTemperatureCelsius) : maximumTemperatureCelsius;


    return (

        <PageContainer darkmode={darkmode ? 'true' : 'false'}>

            <DaysContainer>
                <Today darkmode={darkmode ? 'true' : 'false'}>Hoje</Today>
                <NextDays darkmode={darkmode ? 'true' : 'false'}>Próximos dias</NextDays>
            </DaysContainer>

            <CityContainer>
                <City darkmode={darkmode ? 'true' : 'false'}>São Paulo</City>
                <Coordinates darkmode={darkmode ? 'true' : 'false'}>Lat: 44.34   Long: 10.99</Coordinates>
            </CityContainer>

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
                    <Value>64%</Value>
                </Characteristics>

                <Characteristics>
                    <Text>Velocidade do vento</Text>
                    <Value>12 m/s</Value>
                </Characteristics>

            </WeatherCharacteristics>

            <Recommendation>Não, você não deve levar um casaquinho!</Recommendation>

            <RightsReserved darkmode={darkmode ? 'true' : 'false'}>Dados fornecidos pela <span>Open Weather API</span></RightsReserved>

            <RightsReservedResponsive darkmode={darkmode ? 'true' : 'false'}>Todos os direitos reservados. 2023.</RightsReservedResponsive>

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

const DaysContainer = styled.div`
    width: calc(100% - 10%);
    height: 48px;
    display:flex;
    justify-content: flex-start;
    align-items: center;

    @media (max-width: 1230px) {
    display:flex;
    justify-content: center;
    align-items: center;
    height: 150px;
  }
`
const Today = styled.button`
    width: 120px;
    height: 48px;
    font-size: 48px;
    line-height: 48px;
    letter-spacing: 0em;
    border: none;
    text-align: left;
    margin-right: 50px;
    background-color: ${(props) => (props.darkmode === 'true' ? "black" : "#EFEFEF")};
    color: ${(props) => (props.darkmode === 'true' ? "#FFF" : "#222222")};
    cursor: pointer;

    @media (max-width: 1230px) {
    border-radius: 32px;
    width: 180px;
    height: 100px;
    font-size: 38px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(117.33deg, #4D4494 22.83%, #4F43AE 90.03%);
    color: #FFF;
  }
`

const NextDays = styled.button`
    width: 350px;
    height: 48px;
    font-size: 48px;
    line-height: 48px;
    letter-spacing: 0em;
    text-align: left;
    border: none;
    background-color: ${(props) => (props.darkmode === 'true' ? "black" : "#EFEFEF")};
    color: ${(props) => (props.darkmode === 'true' ? "#FFF" : "#222222")};
    cursor: pointer;

    @media (max-width: 1230px) {
    width: 450px;
    border-radius: 32px;
    width: 400px;
    height: 100px;
    font-size: 38px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(117.33deg, #4D4494 22.83%, #4F43AE 90.03%);
    color: #FFF;
  }
`
const CityContainer = styled.div`
    width: calc(100% - 10%);
    height: 180px;
    margin-top: 50px;

    @media (max-width: 1230px) {
    height: 130px;
    margin-top: 0px;
  }
`

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
    width: 200px;
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

