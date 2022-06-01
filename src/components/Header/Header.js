
  
import React from 'react';
import { Autocomplete } from '@react-google-maps/api';
import { AppBar, Toolbar,InputBase, Box } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

import useStyles from './HeaderStyle';

const Header = ({ onPlaceChanged, onLoad }) => {
  const classes = useStyles();


  return (
    <AppBar position="static">
      <Toolbar className='w-full flex justify-between'>
        <span>
          Travel Advisor
        </span>
        <h6  className='sm:block hidden'>
            Explore new places
          </h6>
        <Box display="flex">
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