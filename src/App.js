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
  const [type,setType]=React.useState("attractions");
  const [rating,setRating]=React.useState("");
  const [filteredPlaces,setFilteredPlaces]=React.useState([])


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
        setPlaces(Object.values(data));
        setFilteredPlaces([])
        setloading(false)
      })
    }
  },[type,bounds])
  React.useEffect(()=>{
       const filteredArray=places.filter((place)=>place.rating>rating)
       setFilteredPlaces(filteredArray)
  },[rating,places])
  return (
        <CssBaseline>
        <Header/>
        <Grid container 
        spacing={3} 
        style={{width:"100%"}}>
             <Grid item xs={12} md={4}>
                 <List 
                 places={filteredPlaces.length ? filteredPlaces : places} 
                 childClicked={childClicked}
                 loading={loading}
                  type={type}
                  setType={setType}
                  rating={rating}
                  setRating={setRating}
                  />
             </Grid>
             <Grid item xs={12} md={8}>
                <Map
                  setCoordinate={setCoordinate}
                  setBounds={setBounds}
                  coordinate={coordinate}
                  places={filteredPlaces.length ? filteredPlaces : places} 
                  setChildClicked={setChildClicked}
                 />
             </Grid>
        </Grid>
        </CssBaseline>
  )
}
