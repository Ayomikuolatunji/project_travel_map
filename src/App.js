import React from 'react'
import {CssBaseline,Grid} from "@material-ui/core";
import Header from "./components/Header/Header.js";
import List from "./components/List/List";
import Map from "./components/Map/Map"
import {fetch_place_data,getWeatherData} from "./hooks/api"

export default function App() {
  const [places,setPlaces]=React.useState([])
  const [coordinate,setCoordinate]=React.useState({})
  const [bounds,setBounds]=React.useState("");
  const [childClicked,setChildClicked]=React.useState(null);
  const [loading,setloading]=React.useState(true)
  const [type,setType]=React.useState("hotels");
  const [rating,setRating]=React.useState("");
  const [filteredPlaces,setFilteredPlaces]=React.useState([])
  const [autocomplete, setAutocomplete] = React.useState(null);
  const [weatherData, setWeatherData] = React.useState([]);


  React.useEffect(()=>{
    navigator.geolocation.getCurrentPosition(({coords:{latitude,longitude}})=>{
      setCoordinate({lat:latitude, lng:longitude})
    })
  },[])
  React.useEffect(()=>{
    setloading(true)
    if(bounds){
      getWeatherData(coordinate.lat,coordinate.lng)
      .then(data=>{
         setWeatherData(data)
      })
      .catch(err=>{
        console.log(err)
      })
      fetch_place_data(type,bounds.sw,bounds.ne)
      .then(data=>{
        setPlaces(data.filter((place) => place.name && place.num_reviews > 0));
        setFilteredPlaces([])
        setRating('');
        setloading(false)
      })
    }
  },[type,bounds])
  React.useEffect(()=>{
       const filteredArray=places.filter((place)=>place.rating>rating)
       setFilteredPlaces(filteredArray)
  },[rating,places])
  const onLoad = (autoC) => setAutocomplete(autoC);
  const onPlaceChanged = () => {
    const lat = autocomplete.getPlace().geometry.location.lat();
    const lng = autocomplete.getPlace().geometry.location.lng();

    setCoordinate({ lat, lng });
  };
  return (
       <div className='block'>
          <CssBaseline>
            <Header
              onPlaceChanged={onPlaceChanged} 
              onLoad={onLoad}
            />
            <div className='flex flex-wrap w-[90%] mx-auto h-[60vh]'>
                <div className='w-[30%]'>
                    <List 
                    places={filteredPlaces.length ? filteredPlaces : places} 
                    childClicked={childClicked}
                    loading={loading}
                      type={type}
                      setType={setType}
                      rating={rating}
                      setRating={setRating}
                      />
                </div>
                <div className='w-[70%] sticky'>
                    <Map
                      setCoordinate={setCoordinate}
                      setBounds={setBounds}
                      coordinate={coordinate}
                      places={filteredPlaces.length ? filteredPlaces : places} 
                      setChildClicked={setChildClicked}
                      weatherData={weatherData}
                    />
                </div>
            </div>
            </CssBaseline>
            <div>
                Looking for a place?
            </div>
       </div>
  )
}
