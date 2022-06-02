import React, { useState, useEffect, createRef } from 'react';
import { CircularProgress,Typography, InputLabel, Select,MenuItem  } from '@material-ui/core';

import PlaceDetails from '../PlaceDetails/PlaceDetails';
import useStyles from './listStyle';

const List = ({ places, type, setType, rating, setRating, childClicked, isLoading }) => {
  const [elRefs, setElRefs] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    setElRefs((refs) => Array(places.length).fill().map((_, i) => refs[i] || createRef()));
  }, [places]);

  return (
    <div className="w-full max-w-full padding-[25px] mt-[40px]">
      <Typography variant="h4">Hotels, Attractions & Dining around you</Typography>
      {isLoading ? (
        <div className={classes.loading}>
          <CircularProgress size="5rem" />
        </div>
      ) : (
        <>
          <div className='mt-7'>
           <div className={'max-w-full w-full mb-[30px]'}>
            <InputLabel id="type">Type</InputLabel>
            <Select id="type" value={type} onChange={(e) => setType(e.target.value)} className="w-full">
              <MenuItem  value="restaurants">Restaurants</MenuItem >
              <MenuItem  value="hotels">Hotels</MenuItem >
              <MenuItem  value="attractions">Attractions</MenuItem >
            </Select>
          </div>
          <div className={'max-w-full w-full mb-[30px]'}>
            <InputLabel id="rating">Rating</InputLabel>
            <Select id="rating" value={rating} onChange={(e) => setRating(e.target.value)} className='w-full'>
              <MenuItem  value="">All</MenuItem >
              <MenuItem  value="3">Above 3.0</MenuItem >
              <MenuItem  value="4">Above 4.0</MenuItem >
              <MenuItem  value="4.5">Above 4.5</MenuItem >
            </Select>
          </div>
           </div>
          <div className='h-[75vh] overflow-auto'>
            {places?.map((place, i) => (
              <div ref={elRefs} key={i} className='w-full my-4'>
                <PlaceDetails selected={Number(childClicked) === i} refProp={elRefs[i]} place={place} />
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default List;