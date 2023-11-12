import AppWeather from "./components/AppWeather"
import { WeatherProvider } from "./context/weatherProvider"

function App() {
  

  return (
    <WeatherProvider>
      <header>
      <h1>Buscador de Clima</h1>
      </header>
      <AppWeather />
    </WeatherProvider>
    
  )
}

export default App
