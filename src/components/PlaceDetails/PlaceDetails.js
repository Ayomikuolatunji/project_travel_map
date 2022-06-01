import React from "react";
import { Box, Typography, Button, Card, CardMedia, CardContent, CardActions, Chip } from '@material-ui/core';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import Rating from '@mui/material/Rating';
import useStyles from './detailStyle';


export default function PlaceDetail({place,selected,refProp}){
    const classes = useStyles();

    if(selected) refProp?.current?.scrollIntoView({behavior:"smooth", block:"start"})
    return(
        <Card elevation={6}>
           <CardMedia
                style={{ height: 270 }}
                image={place.photo ? place.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}
                title={place.name}
            />
              <CardContent>
                <Typography gutterBottom variant="h5">{place.name}</Typography>
                <Box display="flex" justifyContent="space-between" my={2}>
                  <Rating name="read-only" value={Number(place.rating)} readOnly />
                    <Typography component="legend">{place.num_reviews} review{place.num_reviews > 1 && 's'}</Typography>
                </Box>
                <Box display="flex" justifyContent="space-between">
                    <Typography component="legend">Price</Typography>
                    <Typography gutterBottom variant="subtitle1">
                        {place.price_level}
                    </Typography>
                </Box>
                <br />
                <div className="w-full flex justify-between">
                  <h2 component="legend">Ranking</h2>
                  <br />
                  <span className="text-[15px]">
                      <span>{place.ranking}</span>
                  </span>
                </div>
                {place?.awards?.map((award,i) => (
                  <Box display="flex" justifyContent="space-between" my={1} alignItems="center" key={i}>
                    <img src={award.images.small} alt="img-pic"/>
                    <Typography variant="subtitle2" color="textSecondary">{award.display_name}</Typography>
                  </Box>
                ))}
                 {place?.cuisine?.map(({ name }) => (
                    <Chip key={name} size="small" label={name} className={classes.chip} />
                    ))}
                    {place.address && (
                    <Typography gutterBottom variant="body2" color="textSecondary" className={classes.subtitle}>
                        <LocationOnIcon />{place.address}
                    </Typography>
                    )}
                    {place.phone && (
                    <Typography variant="body2" color="textSecondary" className={classes.spacing}>
                        <PhoneIcon /> {place.phone}
                    </Typography>
                )}
              </CardContent>
              <CardActions>
                <Button size="small" color="primary" onClick={() => window.open(place.web_url, '_blank')}>
                Trip Advisor
                </Button>
                <Button size="small" color="primary" onClick={() => window.open(place.website, '_blank')}>
                Website
                </Button>
            </CardActions>
        </Card>
    )
}