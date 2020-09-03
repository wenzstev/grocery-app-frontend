import React, {useState} from "react"

import {
  Paper,
  InputBase,
  Typography,
  Box,
  Grid,
  InputLabel,
  Button,
  Modal,
  makeStyles,
  createStyles
} from "@material-ui/core"


import SearchIcon from "@material-ui/icons/Search"
import DehazeIcon from "@material-ui/icons/Dehaze"

import {TopSquiggle} from "../../Backgrounds/Squiggles"

import NavMenu from "../../SharedComponents/NavMenu"
import NavBar from "../../SharedComponents/NavBar"


const useStyles = makeStyles((theme:Theme)=>createStyles({
  root: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    borderRadius: 15,
    zIndex: 10
  },
  searchbar: {
    backgroundColor: "lightgray",
    borderRadius: 15,
    width: "95vw",
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
  },

}))

const SearchBar = (props) => {

  const classes = useStyles()
  return (
    <>
    <Paper className={classes.root}>
      <TopSquiggle>
        <Grid container>
          <Grid item>
            <NavMenu buttonLabel={<DehazeIcon style={{color:"white"}}/>} openModal={props.openModal}/>
          </Grid>
          <Grid item>
            Welcome Back!
          </Grid>
        </Grid>
      </TopSquiggle>
      <Box className={classes.navbar}>
        <NavBar openModal={props.openModal} />
      </Box>
    </Paper>
    <Box className={classes.placeholderBox}/>
    </>
  )
}

export default SearchBar
