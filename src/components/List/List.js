import React,{createRef} from "react"
import useStyles from './listStyle';
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select } from '@material-ui/core';
import PlaceDetails from '../PlaceDetails/PlaceDetails';

export default function List({places,childClicked,loading,rating,setRating,setType,type}){
    const classes=useStyles();
    const [elRefs, setElRefs] = React.useState([]);
      
     
    
    console.log(type)
    React.useEffect(() => {
      setElRefs((refs) => Array(places?.length).fill().map((_, i) => refs[i] || createRef()));
    }, [places]);
 
    return(
        <div className={classes.container}>
            <Typography variant="h6">Food & Dining around you</Typography>
            {loading
            ?
            <div className={classes.loading}>
              <CircularProgress size={"5rem"}/>
            </div>
            :
            <>
            <FormControl  className={classes.formControl}>
            <InputLabel id="type">Type</InputLabel>
            <Select id="type" value={type} onChange={(e) => setType(e.target.value)}>
              <MenuItem value="restaurants">Restaurants</MenuItem>
              <MenuItem value="hotels">Hotels</MenuItem>
              <MenuItem value="attractions">Attractions</MenuItem>
            </Select>
           </FormControl>
           <FormControl className={classes.formControl}>
            <InputLabel id="rating">Rating</InputLabel>
            <Select id="rating"  onChange={(e) => setRating(e.target.value)}>
              <MenuItem value="">All</MenuItem>
              <MenuItem value="3">Above 3.0</MenuItem>
              <MenuItem value="4">Above 4.0</MenuItem>
              <MenuItem value="4.5">Above 4.5</MenuItem>
            </Select>
          </FormControl>
          <Grid container spacing={3} className={classes.list} places={places}>
          {places?.map((place, i) => (
             <Grid ref={elRefs[i]} key={i} item xs={12}>
                 <PlaceDetails selected={Number(childClicked) === i} refProp={elRefs[i]} place={place} />
             </Grid>
            ))}
          </Grid>
            </>
           }
           
        </div>
    )
}