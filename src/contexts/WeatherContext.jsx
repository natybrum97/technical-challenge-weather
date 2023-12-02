import { createContext, useState } from "react";

export const WeatherContext = createContext();

export function WeatherProvider({ children }) {

    const [fahrenheit, setFahrenheit] = useState(false);
    const [darkMode, setDarkMode] = useState(false);

    const changeForFahrenheit = (checked) => {
        setFahrenheit(checked);
    };

    const changeForDarkMode = (checked) => {
        setDarkMode(checked);
    };

    return (
        <WeatherContext.Provider value={{fahrenheit, setFahrenheit, darkMode, setDarkMode, changeForFahrenheit, changeForDarkMode}}>
            {children}
        </WeatherContext.Provider>
    )
}

