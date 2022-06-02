import React from "react"
import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from "@mui/material";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Rating from '@mui/material/Rating';
import useStyles from './MapStyles.js';
import mapStyles from './newMapStyles';


const Map = ({ coords, places, setCoords, setBounds, setChildClicked, weatherData }) => {
    const matches = useMediaQuery('(min-width:600px)');
    const classes = useStyles();
  
    return (
      <div className={classes.mapContainer}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyAvTG8YHyz82spRn_az1S6Nrc_7atr5n1E'}}
          defaultCenter={coords}
          center={coords}
          defaultZoom={18}
          margin={[50, 50, 50, 50]}
          options={{ disableDefaultUI: true, zoomControl: true, styles: mapStyles }}
          onChange={(e) => {
            setCoords({ lat: e.center.lat, lng: e.center.lng });
            setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
          }}
          onChildClick={(child) => setChildClicked(child)}
        >
          {places.length && places.map((place, i) => (
            <div
              className={classes.markerContainer}
              key={i}
            >
              {!matches
                ? <LocationOnIcon color="primary" fontSize="large" />
                : (
                  <Paper elevation={3} className={classes.paper}>
                    <Typography className={classes.typography} variant="subtitle2" gutterBottom> {place.name}</Typography>
                    <img
                      className={classes.pointer}
                      src={place.photo ? place.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}
                    alt="mim"/>
                    <Rating name="read-only" size="small" value={Number(place.rating)} readOnly />
                  </Paper>
                )}
            </div>
          ))}
          {weatherData?.list?.length && weatherData.list.map((data, i) => (
            <div key={i}>
              <img src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`} height="70px" alt="ayomiku"/>
            </div>
          ))}
        </GoogleMapReact>
      </div>
    );
  };
  
  export default Map;