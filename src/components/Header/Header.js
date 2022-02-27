import React from "react"
import {AppBar,Typography,Toolbar,InputBase,Box} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import useStyles from './HeaderStyle';

export default function Header(){
    const classes = useStyles();
    return(
        <div>
          <AppBar positiion={"static"} className={classes.logo}>
              <Toolbar  className={classes.toolbar}>
                  <Typography variant={"h5"} className={classes.title}>
                     Easy travel
                  </Typography>
                  <Box>
                    <Typography variant={"h5"} className={classes.explore}>
                      Explore anywhere in the world
                    </Typography>
                  </Box>
                  <Box display="flex">
                     <div className={classes.search}>
                        <div className={classes.searchIcon}>
                           <SearchIcon/>
                        </div>
                        <InputBase placeholder="search..." classes={{ root: classes.inputRoot, input: classes.inputInput }}/>
                     </div>
                  </Box>
              </Toolbar>
          </AppBar>
        </div>
    )
}