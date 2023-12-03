import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { WeatherContext } from "../contexts/WeatherContext";
import { format, addDays } from 'date-fns';

const WeatherChart = () => {
  const [weatherData, setWeatherData] = useState([]);
  const { city } = useContext(WeatherContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiKey = import.meta.env.VITE_API_KEY;
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`
        );

        const today = new Date();
        const daysOfWeek = ["dom", "seg", "ter", "qua", "qui", "sex", "sáb", "dom"];

        // Extrair os dados relevantes do objeto de resposta
        const extractedData = response.data.list.slice(0, 8).map((item, index) => ({
          date: `${format(addDays(today, index), 'dd/MM')} (${daysOfWeek[index]})`,
          temperature: Math.ceil(item.main.temp - 273.15), // Arredondar para o próximo número inteiro
        }));

        setWeatherData(extractedData);
      } catch (error) {
        console.error('Erro ao buscar dados da API:', error);
      }
    };

    fetchData();
  }, [city]);

  return (
    <ResponsiveContainer width="100%" height={450}>
      <LineChart data={weatherData} margin={{ top: 50, right: 30, left: 0, bottom: 10 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis unit="°C" interval={0} tickCount={10} />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="temperature" stroke="#8884d8" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default WeatherChart;
