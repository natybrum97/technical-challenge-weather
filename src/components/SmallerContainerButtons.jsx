import styled from "styled-components";
import { useContext } from "react";
import { WeatherContext } from "../contexts/WeatherContext";
import Switch from "react-switch";

export default function SmallerContainerButtons() {

    const { fahrenheit, darkmode, changeForFahrenheit, changeForDarkMode, weatherData } = useContext(WeatherContext);

    return (
        <Buttons>
            <SwitchContainer>
                <Switch
                    onChange={changeForFahrenheit}
                    checked={fahrenheit}
                />
                <Texts darkmode={darkmode ? 'true' : 'false'}>°F</Texts>
            </SwitchContainer>

            <SwitchContainer>
                <Switch
                    onChange={changeForDarkMode}
                    checked={darkmode}
                />
                <Texts darkmode={darkmode ? 'true' : 'false'}>Dark Mode</Texts>
            </SwitchContainer>
        </Buttons>
    )
}

const Buttons = styled.div`
    width: 278px;
    height: 100px;
    margin: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
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
     color: ${(props) => (props.darkmode === 'true' ? "#FFF" : "#222222")};
`;