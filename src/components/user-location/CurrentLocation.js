import React, { useEffect, useState } from 'react'


const CurrentLocation = () => {
    const [coords,setCoords] = useState({})
    const [location,setLoactions]=useState([])

  useEffect(()=>{
      return window.navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
        setCoords({ lat: latitude, lng: longitude });
      })
  },[])

  useEffect(()=>{
      async function getCurrentLocation(){
        if(coords.lat || coords.lng){
        const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${coords.lat},${coords.lng}&key=AIzaSyAvTG8YHyz82spRn_az1S6Nrc_7atr5n1E`)
         const data = await response.json()
        setLoactions(data.plus_code.compound_code)
        }
      }
      getCurrentLocation()

  },[coords])
   console.log(location)



  return (
    <div>{location.split("RXWF+VRQ")} </div>
  )
}

export default CurrentLocation