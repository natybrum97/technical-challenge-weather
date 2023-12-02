import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Weather from "./pages/Weather";
import { WeatherProvider } from "./contexts/WeatherContext";

export default function App() {

  return (

    <PagesContainer>
      <BrowserRouter>
        <WeatherProvider>
            <Routes>
              <Route path="/" element={<Weather />} />
            </Routes>
        </WeatherProvider>
      </BrowserRouter>
    </PagesContainer>
  )
}


const PagesContainer = styled.main`
  width: 100%;
  max-height: 100vh;
`