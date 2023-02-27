import React, { useState } from 'react'
import axios from 'axios'

function App() {
  const [data, setData] = useState({})
  const [location, setLocation] = useState('')
  const yearNow = new Date().getFullYear();
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=895284fb2d2c50a520ea537456963d9c`

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      })
      setLocation('')
    }
  }

  

  return (
    <div className="app">
      <div className="search">
        <input
          value={location}
          onChange={event => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder='Enter Location'
          type="text" />
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            {data.main ? <h1>{data.main.temp.toFixed()}°F </h1> : null}
          </div>
          
          <div className="description">
            {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>
       
        </div>

        {data.name !== undefined &&
          <div className="bottom">
            <div className="feels">
              {data.main ? <p className='bold'>{data.main.feels_like.toFixed()}°F</p> : null}
              <p>Feels Like</p>
            </div>
            <div className="humidity">
              {data.main ? <p className='bold'>{data.main.humidity}%</p> : null}
              <p>Humidity</p>
            </div>
            <div className="wind">
              {data.wind ? <p className='bold'>{data.wind.speed.toFixed()} MPH</p> : null}
              <p>Wind Speed</p>
            </div>
          </div>
        }
        
      <div className='footer'>
      <div className='app__desc'>Basic weather application using React, 
            <a href="https://openweathermap.org/api" 
            className="footer__social" rel="noreferrer"
            target="_blank">{" "}Openweathermap{" "}</a>{" "}
             and {""}
            <a href="https://status.unsplash.com/" 
            className="footer__social" rel="noreferrer"
            target="_blank">{" "}Unsplash{" "}</a> . </div>
          <span className='footer__copy'>  
           
            &#169;<a href="https://iyelrodriguez.github.io/web-react/" 
            className="footer__social" rel="noreferrer"
            target="_blank"> G.Rdrgz.</a> All rights reserved. {yearNow}</span>
      </div>


      </div>
    </div>
  );
}

export default App;
