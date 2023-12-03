import { createContext, useState } from "react";

export const WeatherContext = createContext();

export function WeatherProvider({ children }) {

    const [fahrenheit, setFahrenheit] = useState(false);
    const [darkmode, setDarkMode] = useState(false);
    const [today, setToday] = useState(true);
    const [weatherData, setWeatherData] = useState({});

    const changeForFahrenheit = (checked) => {
        setFahrenheit(checked);
    };

    const changeForDarkMode = (checked) => {
        setDarkMode(checked);
    };

    return (
        <WeatherContext.Provider value={{ fahrenheit, setFahrenheit, darkmode, setDarkMode, changeForFahrenheit, changeForDarkMode, today, setToday, weatherData, setWeatherData }}>
            {children}
        </WeatherContext.Provider>
    )
}

