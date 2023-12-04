import styled from "styled-components";
import Search from '../assets/search.png';
import { useContext, useEffect } from "react";
import axios from 'axios';
import { WeatherContext } from "../contexts/WeatherContext";

export default function SmallerContainerInput() {

  const { setWeatherData, city, setCity } = useContext(WeatherContext);

  useEffect(() => {
    getWeather();
  }, [city, setWeatherData]);

  const getWeather = async () => {
    try {
      if (!city) {
        console.error('Cidade não especificada.');
        return;
      }

      const apiKey = import.meta.env.VITE_API_KEY;
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${apiKey}`;

      const response = await axios.get(apiUrl);

      if (response.data.cod === '404') {
        alert('Cidade não encontrada. Por favor, insira um nome de cidade válido.');
      } else {
        setWeatherData({
          city: response.data.name,
          description: response.data.weather[0]?.main || 'Descrição não disponível',
          latitude: response.data.coord.lat,
          longitude: response.data.coord.lon,
          minTemperature: response.data.main.temp_min,
          maxTemperature: response.data.main.temp_max,
          temperature: response.data.main.temp,
          humidity: response.data.main.humidity,
          speed: response.data.wind.speed
        });
      }
    } catch (error) {
      console.error('Erro ao buscar dados meteorológicos:', error);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      getWeather();
    }
  };

  return (
    <Input>
      <Border>
        <ImageSearch src={Search} alt="Lupa" onClick={getWeather} />
        <input
          placeholder="Procure por uma cidade"
          type="city"
          id="city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyPress={handleKeyPress}
        />
      </Border>
    </Input>
  );
}

const Input = styled.div`
    width: 550px;
    height: 225px;
    display:flex;
    justify-content: center;
    align-items: center;
`

const ImageSearch = styled.img`
    width: 36.7px;
    height: 40px;
    border-radius: 16px;
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
