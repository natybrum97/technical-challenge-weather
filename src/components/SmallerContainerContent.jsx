import styled from "styled-components";
import { useContext } from "react";
import { WeatherContext } from "../contexts/WeatherContext";
import SmallerContainerHeader from "./SmallerContainerHeader";
import SmallerContainerInput from "./SmallerContainerInput";
import SmallerContainerTemperature from "./SmallerContainerTemperature";
import SmallerContainerButtons from "./SmallerContainerButtons";
import SmallerContainerDayAndHour from "./SmallerContainerDayAndHour";

export default function SmallerContainerContent() {

    const { darkmode } = useContext(WeatherContext);

    return (

        <PageContainer darkmode={darkmode ? 'true' : 'false'}>

            <SmallerContainerHeader />

            <SmallerContainerInput />

            <SmallerContainerTemperature />

            <Divider></Divider>

            <SmallerContainerDayAndHour />

            <SmallerContainerButtons />

            <RightsReserved darkmode={darkmode ? 'true' : 'false'}>Todos os direitos reservados. 2023.</RightsReserved>

        </PageContainer>

    )
}

const PageContainer = styled.div`
    width: 550px;
    height: calc(100% - 65px);
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${(props) => (props.darkmode === 'true' ? "#333" : "#FFF")};
`

const Divider = styled.div`
    width: 395px;
    height: 5px;
    margin: 20px;
    background-color: #EDEDED;
`

const RightsReserved = styled.h4`
    width: 416px;
    height: 48px;
    text-align: left;
    color: ${(props) => (props.darkmode === 'true' ? "#FFF" : "#222222")};
`


