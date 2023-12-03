import { useContext } from "react";
import { WeatherContext } from "../contexts/WeatherContext";
import styled from "styled-components";

export default function WhatTheDay() {
    const { darkmode, today, setToday, weatherData } = useContext(WeatherContext);

    const handleTodayClick = () => {
        setToday(true);
    };

    const handleNextDaysClick = () => {
        setToday(false);
    };

    return (
        <DaysContainer>
            <TodayButton
                darkmode={darkmode ? 'true' : 'false'}
                selected={today}
                onClick={handleTodayClick}
                disabled={today}
            >
                Hoje
            </TodayButton>
            <NextDaysButton
                darkmode={darkmode ? 'true' : 'false'}
                selected={!today}
                onClick={handleNextDaysClick}
                disabled={!today}
            >
                Próximos dias
            </NextDaysButton>
        </DaysContainer>
    );
}

const DaysContainer = styled.div`
    width: calc(100% - 10%);
    height: 48px;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    @media (max-width: 1230px) {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 150px;
    }
`;

const buttonStyles = `
    width: 120px;
    height: 48px;
    font-size: 48px;
    line-height: 48px;
    letter-spacing: 0em;
    border: none;
    text-align: left;
    cursor: pointer;
`;

const TodayButton = styled.button`
    ${buttonStyles}
    margin-right: 50px;
    background-color: ${(props) => (props.darkmode === 'true' ? "black" : "#EFEFEF")};
    color: ${(props) => (props.selected ? (props.darkmode === 'true' ? "#4D4494" : "#222222") : "#C8C8C8")};

    @media (max-width: 1230px) {
        border-radius: 32px;
        width: 180px;
        height: 100px;
        font-size: 38px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

const NextDaysButton = styled.button`
    ${buttonStyles}
    width: 350px;
    background-color: ${(props) => (props.darkmode === 'true' ? "black" : "#EFEFEF")};
    color: ${(props) => (props.selected ? (props.darkmode === 'true' ? "#4D4494" : "#222222") : "#C8C8C8")};

    @media (max-width: 1230px) {
        width: 450px;
        border-radius: 32px;
        width: 400px;
        height: 100px;
        font-size: 38px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;
