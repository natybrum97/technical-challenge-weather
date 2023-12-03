import styled from "styled-components";
import Image from '../assets/casaco.png';
import { useContext } from "react";
import { WeatherContext } from "../contexts/WeatherContext";
import 'animate.css';

export default function SmallerContainerHeader() {

    const { darkmode } = useContext(WeatherContext);

    return (
        <Header>
            <ImageHeader src={Image} alt="Casaquinho" />
            <Title darkmode={darkmode ? 'true' : 'false'}>Levo um casaquinho?</Title>
        </Header>
    )
}

const Header = styled.div`
    width: 550px;
    height: 120px;
    display:flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 1230px) {
    margin-top: 25px;
  }
`

const ImageHeader = styled.img`
    width: 120px;
    height: 120px;
    animation: bounce; 
    animation-duration: 2s;
`;

const Title = styled.h2`
    width: 416px;
    color: ${(props) => (props.darkmode === 'true' ? "#FFF" : "#222222")};
`
