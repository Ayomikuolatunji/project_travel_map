import React, { useEffect, useState } from 'react'


const CurrentLocation = () => {
    const [coords,setCoords] = useState({})
    const [location,setLoactions]=useState({location:"loading.."})

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
         console.log(data)
        setLoactions({location:data.plus_code.compound_code})
        }
      }
      getCurrentLocation()

  },[coords])
  function removeFirstword(name) {
    const names = name.split(" ").map(function (word) {
         return word;
     });
     const [, ...rest] = names;
    return rest.join(" ");
 }
  return (
    <div> 
      <h1 className='sm:text-2xl text-xl'>{removeFirstword(location?.location)}</h1>
    </div>
  )
}

export default CurrentLocation