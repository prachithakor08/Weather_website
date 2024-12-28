import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import "./SearchBox.css";

export default function SearchBox({updateInfo}){
    let [city,setCity] = useState("");
    let [error,setError] = useState(false);
const API_URL = "https://api.openweathermap.org/data/2.5/weather";
// const API_KEY = "c8ec05a457bc09fe256c17f413e1d442"; 
const API_KEY = "1031e82180981b48e6b9fba105594774";


let getWeatherInfo= async()=>{
    try{
        let response=  await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
    let JSonResponse = await response.json();
    console.log(JSonResponse);
    let result = {
        city:city,
        temp:JSonResponse.main.temp,
        tempmin:JSonResponse.main.temp_min,
        tempmax:JSonResponse.main.temp_max,
        humidity:JSonResponse.main.humidity,
        feelsLike:JSonResponse.main.feels_like,
        weather:JSonResponse.weather[0].description,
    };
    console.log(result);
    return result;
    }catch(err){
       throw err;
    }
  
}

    let handleChange = (event) =>{
        setCity(event.target.value);
    }
    let handleSubmit=async (event)=>{
        try{
            event.preventDefault();
            console.log(city);
            setCity("");
           let newInfo = await getWeatherInfo();
            updateInfo(newInfo);
        }catch(err){
            setError(true);
        }
       
    }
    return(
        <div className='SearchBox'>
            <form onSubmit={handleSubmit}>
            <TextField id="standard-basic" 
        label="Search city" 
        variant="standard"
        required
        value={city}
        onChange={handleChange} />
       <br></br> <br></br><Button variant="contained"
        type='submit'>Search</Button>
        {error && <p style={{color:"red"}}>No such place in our data!</p> }
            </form>

        </div>
        
    )
}