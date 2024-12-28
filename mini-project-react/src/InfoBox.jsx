import Card from '@mui/material/Card';
import "./InfoBox.css";
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';

export default function InfoBox({info}){
    const Init_URL = "https://images.unsplash.com/photo-1561470508-fd4df1ed90b2?q=80&w=876&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";   
    const Hot_URL ="https://plus.unsplash.com/premium_photo-1717602366421-61415250f4cf?q=80&w=1043&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"; 
    const Rainy_URL ="https://images.unsplash.com/photo-1492011221367-f47e3ccd77a0?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"; 
    const Cold_URL ="https://images.unsplash.com/photo-1677256691517-36d1f6120297?q=80&w=927&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"; 
    return(
    

        <div className="InfoBox">
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity>80?
            Rainy_URL :
             info.temp>15?
             Hot_URL : Cold_URL
        }
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {info.city}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
         <p>Temperature = {info.temp}&deg;C</p>
         <p>Humidity = {info.humidity}</p>
         <p>Min Temp = {info.tempMin}&deg;C</p>
         <p>Max Temp = {info.tempMax}&deg;C</p>
         <p>
         The weather can be described as <i>{info.weather}</i> and
          feels like <i>{info.feels_like}</i>
         </p>
        </Typography>
      </CardContent>
    </Card>
        </div>
    )
}