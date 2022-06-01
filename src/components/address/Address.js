import React from 'react'
import axios from "axios"

const GOOGLE_API_KEY='AIzaSyAvTG8YHyz82spRn_az1S6Nrc_7atr5n1E'

const Address = () => {
  const [address, setAddress] = React.useState('')


    const searchAddress=async(event)=>{
      event.preventDefault()
     try {
      const response= await  axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI(address)}&key=${GOOGLE_API_KEY}`)
      console.log(response)
      const coordinates = response.data.results[0].geometry.location;
      // eslint-disable-next-line no-undef
       new google.maps.Map(document.getElementById("map"), {
        center:coordinates,
        zoom: 8,
      });
     } catch (err) {
          console.log(err)
     }
    }




  return (
    <div>
      <form id="form" onSubmit={searchAddress}>
        <input type="text" id="address" name="address" className="p-2" placeholder="type your valid address here.." 
        onChange={(e)=>setAddress(e.target.value)}
        />
        <button type="submit" className="btn btn-primary">SEARCH ADDRESS</button>
      </form>
      <div id="map">
        <p>Please enter an address!</p>
      </div>
    </div>
  )
}

export default Address