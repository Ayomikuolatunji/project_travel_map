import React from 'react'
import {CssBaseline,Grid} from "@material-ui/core";
import Header from "./components/Header/Header.js";
import List from "./components/List/List";
import Map from "./components/Map/Map"
import {fetch_place_data} from "./hooks/api"

export default function App() {
  const [places,setPlaces]=React.useState([])
  const [coordinate,setCoordinate]=React.useState({})
  const [bounds,setBounds]=React.useState("");
  React.useEffect(()=>{
    navigator.geolocation.getCurrentPosition(({coords:{latitude,longitude}})=>{
      setCoordinate({lat:latitude, lng:longitude})
    })
  },[])
  React.useEffect(()=>{
    if(bounds){
      fetch_place_data(bounds.sw,bounds.ne)
      .then(data=>{
        console.log(data)
        setPlaces(data)
      })
    }
  },[bounds])

  return (
        <CssBaseline>
        <Header/>
        <Grid container spacing={3} style={{width:"100%"}}>
             <Grid item xs={12} md={4}>
                 <List places={places}/>
             </Grid>
             <Grid item xs={12} md={8}>
                <Map
                  setCoordinate={setCoordinate}
                  setBounds={setBounds}
                  coordinate={coordinate}
                  places={places} 
                 />
             </Grid>
        </Grid>
        </CssBaseline>
  )
}
