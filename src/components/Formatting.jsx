import React, { useContext } from 'react';
import styled from 'styled-components';
import { WeatherContext } from '../contexts/WeatherContext';

const Formatting = () => {

  const { weatherData } = useContext(WeatherContext);
  const weatherDataEmpty = Object.keys(weatherData).length > 0;

  return (
    <Overlay weatherDataEmpty={weatherDataEmpty}>
      <OverlayContent>
      </OverlayContent>
    </Overlay>
  );
};

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: white;
  display: ${(props) => (props.weatherDataEmpty ? 'none' : 'flex')};
  align-items: center;
  justify-content: center;
  z-index: 1000; 
`;

const OverlayContent = styled.div`
  color: #fff;
`;

export default Formatting;
