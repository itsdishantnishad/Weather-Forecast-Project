
import { useState } from 'react';
import SearchBox from './SearchBox'
import InfoBox from './infoBox'
function WeatherApp(){

    const [weatherInfo, setWeatherInfo] = useState({
        city: "Gorakhpur",
        feelsLike: 29.58,
        humidity: 14,
        temp:31.77, 
        tempMin:31.77,
        tempMax:32.08,
        weather:"few clouds",
    })

    let updateInfo = (result)=>{
        setWeatherInfo(result)
    }
    return(
        <div>
            <h2> Search For Weather App</h2>
            <SearchBox updateInfo={updateInfo}/><br></br>
            <InfoBox info = {weatherInfo}/>
        </div>
    )
}

export default WeatherApp;