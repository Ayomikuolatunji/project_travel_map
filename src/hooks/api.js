import axios from "axios"




 export const getPlacesData=async(type,sw,ne)=>{
   const {data:{data}}=await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,{
      params: {
        bl_latitude: sw.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
        tr_latitude: ne.lat,
      },
      headers: {
        'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
        'x-rapidapi-key': 'cdf111e78bmsh3a3833806dff059p1775c1jsndf1581c43594'
      }
   })
   return data
 }


 export const getWeatherData=async(lat,lng)=>{
     try{
        const {data}=await axios.get("https://community-open-weather-map.p.rapidapi.com/find",{
          params: {lon: lng,lat:lat},
          headers: {
            'X-RapidAPI-Host': 'community-open-weather-map.p.rapidapi.com',
            'X-RapidAPI-Key': 'cdf111e78bmsh3a3833806dff059p1775c1jsndf1581c43594'
          }
        })
        return data
     }catch(err){

     }
 }