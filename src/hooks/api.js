import axios from "axios"
const URL="https://travel-advisor.p.rapidapi.com/hotels/list-in-boundary"



 export const fetch_place_data=async(type,sw,ne)=>{
   const {data:{data}}=await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,{
      params: {
        bl_latitude: sw.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
        tr_latitude: ne.lat,
      },
      headers: {
        'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
        'x-rapidapi-key': 'f39faec486msh7879808fc1c5c89p167805jsn011d92b6ee37'
      }
   })
   return data
 }