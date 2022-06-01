import React, { useCallback, useMemo } from 'react'
import axios from "axios"
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';



const GOOGLE_API_KEY='AIzaSyAvTG8YHyz82spRn_az1S6Nrc_7atr5n1E'

const Address = () => {
  const [lat,setLat] = React.useState(0)
  const [lng,setLng]=React.useState(0)

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyAvTG8YHyz82spRn_az1S6Nrc_7atr5n1E"
  })

  const [address, setAddress] = React.useState('')


  const containerStyle = {
    width: '100%',
    height: '400px'
  };
  
  const center = useMemo(() => {
      return {
        lat: lat,
        lng: lng
      }
  },[lat,lng])
  console.log(lat,lng);


  const searchFunction=async(event)=>{
    event.preventDefault()
    try {
        const response= await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI(address)}&key=${GOOGLE_API_KEY}`)
        console.log(response)
         setLat(response.data.results[0].geometry.location.lat)
         setLng(response.data.results[0].geometry.location.lng)
      } catch (err) {
            console.log(err)
      }
    }
    const onLoad = useCallback(function callback(map) {
         const bounds = new window.google.maps.LatLngBounds(parseFloat(center));
         map.fitBounds(bounds);
    }, [center]);


    const onUnmount = React.useCallback(function callback(map) {
    }, [])
   

  return (
    <div className='w-[90%] mx-auto'>
      <div className="header">
        <form id="form" onSubmit={searchFunction}>
          <input type="text" id="address" name="address" className="p-2" placeholder="type your valid address here.."
          onChange={(e)=>setAddress(e.target.value)}
          />
          <button type="submit" className="btn btn-primary">SEARCH ADDRESS</button>
        </form>
      </div>
      {
        isLoaded ? (
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
            onLoad={onLoad}
            onUnmount={onUnmount}
          />
      ) : <></>
      }
    </div>
  )
}

export default Address