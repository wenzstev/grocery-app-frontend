import React from "react"

import {
  Paper,
  InputBase,
  Typography,
  Box,
  Grid,
  InputLabel,
  Button,
  makeStyles
} from "@material-ui/core"


import SearchIcon from "@material-ui/icons/Search"
import DehazeIcon from "@material-ui/icons/Dehaze"

import {TopSquiggle} from "../../Backgrounds/Squiggles"

import NavMenu from "../../SharedComponents/NavMenu"
import NavBar from "../../SharedComponents/NavBar"


const useStyles = makeStyles({
  root: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    borderRadius: 15
  },
  searchbar: {
    backgroundColor: "lightgray",
    borderRadius: 15,
    width: "95vw",
  },
  navbar: {

  },
  searchInput: {
    width: "100%",
    top: 3
  },
  searchIcon: {
    padding: 5
  },
  drawerbutton: {
    borderRadius: 15
  },
  placeholderBox: {
    height: "25vh"
  }
})

const SearchBar = (props) => {
  const classes = useStyles()
  return (
    <>
    <Paper className={classes.root}>
      <TopSquiggle>Welcome Back!</TopSquiggle>
      <Box className={classes.navbar} mt={1}>
      <Box className={classes.searchbar} mx={1}>
        <InputLabel>
          <Grid container>
            <Grid item>
              <NavMenu buttonLabel={<DehazeIcon />} setToken={props.setToken}/>
            </Grid>
            <Grid item>
              <SearchIcon className={classes.searchIcon}/>
            </Grid>
            <Grid item xs={8} md={10}>
              <InputBase className={classes.searchInput} placeholder="Search..." />
            </Grid>
          </Grid>
        </InputLabel>
      </Box>
      <NavBar />
      </Box>
    </Paper>
    <Box className={classes.placeholderBox}/>
    </>
  )
}

export default SearchBar
