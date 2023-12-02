import styled from "styled-components";
import { getFormattedDate } from "../useful/getFormattedDate";
import { getFormattedDateTime } from "../useful/getFormattedDateTime";
import { useContext } from "react";
import { WeatherContext } from "../contexts/WeatherContext";

export default function SmallerContainerDayAndHour() {

    const { darkmode } = useContext(WeatherContext);

    const formattedDate = getFormattedDate();
    const formattedDateTime = getFormattedDateTime();

    return (
        <DayAndHour>
            <DatasOfTheDay darkmode={darkmode ? 'true' : 'false'}>{formattedDate}</DatasOfTheDay>
            <DatasOfTheDay darkmode={darkmode ? 'true' : 'false'}>{formattedDateTime}</DatasOfTheDay>
        </DayAndHour>
    )
}

const DayAndHour = styled.div`
    width: 215px;
    height: 80px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`

const DatasOfTheDay = styled.h4`
     color: ${(props) => (props.darkmode === 'true' ? "#FFF" : "#222222")};
`;
