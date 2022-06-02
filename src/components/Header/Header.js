import React from 'react';
import { Autocomplete } from '@react-google-maps/api';
import { AppBar, Toolbar,InputBase, Box } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import logo from "../../assets/images/destination.png"

import useStyles from './HeaderStyle';
import CurrentLocation from '../user-location/CurrentLocation';

const Header = ({ onPlaceChanged, onLoad }) => {
  const classes = useStyles();


  return (
    <AppBar position="static">
      <Toolbar className='w-full flex sm:justify-between sm:flex-row flex-col sm:py-0 py-2 justify-center items-center'>
       <div className='flex justify-between sm:w-[50%] w-full sm:mb-0 mb-6 items-center'>
       <Box>
        <span className="flex items-center">
               <img src={logo} className="mr-3 h-8" alt="FlowBite Logo"/>
                 <span className="self-center sm:text-2xl font-semibold text-sm  whitespace-nowrap dark:text-white">Travel Advisor</span>
            </span>
          <h6 className='sm:block sm:relative'>
            Explore new places
          </h6>
        </Box> 
        {/* current Loaction */}
        <Box className='flex flex-col sm:flex-row'>
          <CurrentLocation/>
        </Box>
       </div>
        <Box display="flex w-[30%]">
          <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase placeholder="Search…" classes={{ root: classes.inputRoot, input: classes.inputInput }} />
            </div>
          </Autocomplete>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;