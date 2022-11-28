import React from 'react'



const WeatherCard = ({ weather, temperature, isCelcius, changeUnitTemperature }) => {
  return (
    <article className='weather-card__content'>
      <h1 className='weather-card__tittle'>Weather APP</h1>
      <section className='weather-card__section'>
        <h3 className='weather-card__city'>{`${weather.name}, ${weather.sys.country}`}</h3>
        <div className='weather-card__img--container'>
          <img className='weather-card--img' src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`} alt="" />
        </div>
        <ul className='weather-card__list'>
          <li>{weather.weather[0].description}</li>
          <li>{`Wind speed: ${weather.wind.speed} m/s`}</li>
          <li>{`Clouds: ${weather.clouds.all} %`}</li>
          <li>{`Pressure: ${weather.main.pressure} hPa`}</li>
        </ul>
        <p className='weather-card__degrees celcius'>{isCelcius ? `${temperature.celcius} °C` : `${temperature.fahrenheit} °F`}</p>
        <button className='weather-card__btn' onClick={changeUnitTemperature}>Degrees °F/°C</button>
      </section>

      <footer className='footer__container'>
        <span className='copyright'>&copy; All rights reserved.</span>
        <span className='contact'> <a href="https://portafolio-jorge-ortegon.netlify.app/" target="_blank">Contact</a></span>
      </footer>
    </article>
  )
}

export default WeatherCard