import { useState } from 'react';
import InfoBox from './InfoBox.jsx';
import SearchBox from './SearchBox';
export default function WeatherApp(){
    let [ weatherInfo,setWeatherInfo] = useState({
            city:"Delhi",
            feels_like: 24.08,
            temp:25.05,
            tempMin:25.05,
            tempMax:25.05,
            humidity:47,
            weather:"haze",
    })
    let updateInfo = (newInfo)=>{
        setWeatherInfo(newInfo);
    }
    return (
        <div style={{textAlign:"center"}}>
            <h3>Weather App by PRACHI</h3>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}