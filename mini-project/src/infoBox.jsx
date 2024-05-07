

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';

function InfoBox({info}){
     let img_url = "https://images.pexels.com/photos/209831/pexels-photo-209831.jpeg?cs=srgb&dl=pexels-pixabay-209831.jpg&fm=jpg";
    
    return(
        <div className="true">
           <Card sx={{ maxWidth: 445 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={img_url}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
          <p>temprature:{info.temp}&deg;</p>
          <p>humidity:{info.humidity}</p>
          <p> Weather feelsLike :{info.feelsLike}&deg;</p>
          <p>Min Temp:{info.tempMin}&deg;</p>
          <p>Max Temp:{info.tempMax}&deg;</p>
        </Typography>
      </CardContent>
     
    </Card>
        </div>
    )
}

InfoBox.propTypes = {
    info: PropTypes.shape({
      city: PropTypes.string.isRequired,
      temp: PropTypes.number.isRequired,
      humidity: PropTypes.number.isRequired,
      feelsLike: PropTypes.number.isRequired,
      tempMin: PropTypes.number.isRequired,
      tempMax: PropTypes.number.isRequired
    }).isRequired
  };

export default InfoBox;