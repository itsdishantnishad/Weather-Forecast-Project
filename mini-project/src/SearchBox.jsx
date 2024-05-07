import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import PropTypes from 'prop-types';
import { useState } from 'react';

function SearchBox({updateInfo}){
    let [city, setCity] = useState("");

    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "724b672aea4f1d814e3f3fdf510ea2e3";

    let getWeatherInfo = async ()=>{
        let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponse =  await response.json();
         console.log(jsonResponse);
         let result = {
            city:city,
            temp:jsonResponse.main.temp,
            tempMin:jsonResponse.main.temp_min,
            tempMax : jsonResponse.main.temp_max,
            humidty:jsonResponse.main.humidity,
            feelsLike:jsonResponse.main.feels_like,
            weather:jsonResponse.weather[0].description,
         }
         console.log(result);
         return result;
    }

    let handleCity = (event)=>{
        setCity(event.target.value);
    }

    let handleSubmit = async (event)=>{
       event.preventDefault();
       console.log(city);
       setCity("");
        let newInfo = await  getWeatherInfo();
        updateInfo(newInfo);

    }

    return(
        <div>
           <form onSubmit={handleSubmit}>
               <TextField 
                   id="city" 
                   label="City Name" 
                   variant="outlined" 
                   value={city} 
                   onChange={handleCity} 
                     required
               /><br></br><br></br>
               <Button variant="contained" type="submit">
                  Search
               </Button>
           </form>
        </div>
    )
}

SearchBox.propTypes = {
    updateInfo: PropTypes.shape({
      city: PropTypes.string.isRequired,
      temp: PropTypes.number.isRequired,
      humidity: PropTypes.number.isRequired,
      feelsLike: PropTypes.number.isRequired,
      tempMin: PropTypes.number.isRequired,
      tempMax: PropTypes.number.isRequired
    }).isRequired
  };

export default SearchBox;