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
  const [childClicked,setChildClicked]=React.useState(null);
  const [loading,setloading]=React.useState(true)
  const [type,setType]=React.useState("");
  const [rating,setRating]=React.useState("");


  React.useEffect(()=>{
    navigator.geolocation.getCurrentPosition(({coords:{latitude,longitude}})=>{
      setCoordinate({lat:latitude, lng:longitude})
    })
  },[])
  React.useEffect(()=>{
    setloading(true)
    if(bounds){
      fetch_place_data(type,bounds.sw,bounds.ne)
      .then(data=>{
        setPlaces(data)
        setloading(false)
      })
    }
  },[bounds])

  return (
        <CssBaseline>
        <Header/>
        <Grid container 
        spacing={3} 
        style={{width:"100%"}}>
             <Grid item xs={12} md={4}>
                 <List 
                 places={places} 
                 childClicked={childClicked}/>
                 loading={loading}
                 rating={rating}
                 setRating={setRating}
                 type={type}
                 setType={setType}
             </Grid>
             <Grid item xs={12} md={8}>
                <Map
                  setCoordinate={setCoordinate}
                  setBounds={setBounds}
                  coordinate={coordinate}
                  places={places} 
                  setChildClicked={setChildClicked}
                 />
             </Grid>
        </Grid>
        </CssBaseline>
  )
}
