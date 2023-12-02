import styled from "styled-components";
import Image from '../assets/casaco.png';
import Circle from '../assets/circle.png';
import Search from '../assets/search.png';
import { getFormattedDate } from "../useful/getFormattedDate";
import { getFormattedDateTime } from "../useful/getFormattedDateTime";
import Switch from "react-switch";
import { useState, useContext } from "react";
import { WeatherContext } from "../contexts/WeatherContext";

export default function SmallerContainerContent() {

    const { fahrenheit, darkMode, changeForFahrenheit, changeForDarkMode } = useContext(WeatherContext);

    const [city, setCity] = useState('');

    const formattedDate = getFormattedDate();
    const formattedDateTime = getFormattedDateTime();

    return (

        <PageContainer darkMode = {darkMode}>

            <Header>
                <ImageHeader src={Image} alt="Casaquinho" />
                <Title darkMode = {darkMode}>Levo um casaquinho?</Title>
            </Header>

            <Input>
                <Border>
                    <ImageSearch src={Search} alt="Lupa" />
                    <input placeholder="Procure por uma cidade" type="city" id="city" value={city} onChange={(e) => setCity(e.target.value)} />
                </Border>
            </Input>

            <Temperature>

                <TemperatureMeasurement>
                    <ImageTemperature src={Circle} alt="Tópico" />
                    <TemperatureText darkMode = {darkMode}>30</TemperatureText>
                    <Degrees darkMode = {darkMode}>°C</Degrees>
                </TemperatureMeasurement>

                <Weather darkMode = {darkMode}>Céu aberto</Weather>

            </Temperature>

            <Divider></Divider>

            <DayAndHour>
                <DatasOfTheDay darkMode = {darkMode}>{formattedDate}</DatasOfTheDay>
                <DatasOfTheDay darkMode = {darkMode}>{formattedDateTime}</DatasOfTheDay>
            </DayAndHour>

            <Buttons>

                <SwitchContainer>
                    <Switch
                        onChange={changeForFahrenheit}
                        checked={fahrenheit}
                    />
                    <Texts darkMode = {darkMode}>°F</Texts>
                </SwitchContainer>

                <SwitchContainer>
                    <Switch
                        onChange={changeForDarkMode}
                        checked={darkMode}
                    />
                    <Texts darkMode = {darkMode}>Dark Mode</Texts>
                </SwitchContainer>

            </Buttons>

            <RightsReserved darkMode = {darkMode}>Todos os direitos reservados. 2023.</RightsReserved>

        </PageContainer>

    )
}

const PageContainer = styled.div`
    width: 550px;
    height: calc(100% - 65px);
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${(props) => (props.darkMode ? "#333" : "#FFF")};
`

const Header = styled.div`
    width: 550px;
    height: 120px;
    display:flex;
    justify-content: space-between;
    align-items: center;
`

const Input = styled.div`
    width: 550px;
    height: 225px;
    display:flex;
    justify-content: center;
    align-items: center;
`

const Temperature = styled.div`
    width: 500px;
    height: 228px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`
const Divider = styled.div`
    width: 395px;
    height: 5px;
    margin: 20px;
    background-color: #EDEDED;
`

const DayAndHour = styled.div`
    width: 215px;
    height: 80px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`

const Buttons = styled.div`
    width: 278px;
    height: 100px;
    margin: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;

`

const RightsReserved = styled.h4`
    width: 416px;
    height: 48px;
    text-align: left;
    color: ${(props) => (props.darkMode ? "#FFF" : "#222222")};
`

const ImageHeader = styled.img`
    width: 120px;
    height: 120px;
`;

const ImageTemperature = styled.img`
    width: 150px;
    height: 150px;
`;

const ImageSearch = styled.img`
    width: 36.7px;
    height: 40px;
    border-radius: 16px;
`;

const Title = styled.h2`
    width: 416px;
    color: ${(props) => (props.darkMode ? "#FFF" : "#222222")};
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
const SwitchContainer = styled.div`
    width: 250px;
    height: 48px;
    display:flex;
    justify-content: space-between;
    align-items: center;
`;

const Texts = styled.h4`
     text-align: left;
     margin-left: 30px;
     color: ${(props) => (props.darkMode ? "#FFF" : "#222222")};
`;
const Weather = styled.h5`
     color: ${(props) => (props.darkMode ? "#FFF" : "#222222")};
`;

const DatasOfTheDay = styled.h4`
     color: ${(props) => (props.darkMode ? "#FFF" : "#222222")};
`;

const Border = styled.div`
    width: 500px;
    height: 80px;
    border-radius: 24px;
    display:flex;
    padding: 14px;
    justify-content: space-between;
    align-items: center;
    background-color: #EDEDEF;
    box-shadow: 0px 24px 48px 0px #314F7C14;
`;



