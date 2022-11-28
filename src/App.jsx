import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import Loader from './components/Loader'
import WeatherCard from './components/WeatherCard'

function App() {

  const [coords, setCoords] = useState()
  const [weather, setWeather] = useState()
  const [temperature, setTemperature] = useState()
  const [isCelcius, setIsCelcius] = useState(true)

  const changeClassDegrees = () => {
    const degreesElement = document.querySelector(".weather-card__degrees")
    if (degreesElement.classList.contains("celcius")) {
      degreesElement.classList.remove("celcius")
      degreesElement.classList.add("fahrenheit")
    }
    else {
      degreesElement.classList.add("celcius")
      degreesElement.classList.remove("fahrenheit")
    }
  }

  const body = document.querySelector("body")
  const loader = document.querySelector(".loader__container")

  if (body.contains(loader)) {
    body.classList.remove("loading")
  }
  else {
    body.classList.add("loading")
  }

  const changeUnitTemperature = () => {
    setIsCelcius(!isCelcius)
    changeClassDegrees()
  }

  const success = (pos) => {
    const newCoords = {
      lat: pos.coords.latitude,
      lon: pos.coords.longitude
    }
    setCoords(newCoords)
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success)
  }, [])

  useEffect(() => {
    if (coords) {
      const API_KEY = "a6afed7a0aff3678e12d8b0caa609e95"
      const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${API_KEY}`
      axios.get(URL)
        .then((res) => {
          const tempKelvin = res.data.main.temp
          const tempCelcius = (tempKelvin - 273.15).toFixed(1)
          const tempFahrenheit = ((tempCelcius * 9 / 15) + 32).toFixed(1)
          const newTemperature = {
            celcius: tempCelcius,
            fahrenheit: tempFahrenheit
          }
          setTemperature(newTemperature)
          setWeather(res.data)
          // setTimeout(setWeather(res.data), 3000)

        })
        .catch((err) => {
          console.log(err)
        })
    }

  }, [coords])

  return (
    <div className="App">
      {
        weather ? (
          <WeatherCard
            weather={weather}
            temperature={temperature}
            changeUnitTemperature={changeUnitTemperature}
            isCelcius={isCelcius}
          />) : < Loader />
      }
    </div>
  )
}

export default App
