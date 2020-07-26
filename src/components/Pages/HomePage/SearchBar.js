import React from "react"

import {
  Paper,
  InputBase,
  Typography,
  Box,
  Grid,
  InputLabel,
  makeStyles
} from "@material-ui/core"

import SearchIcon from "@material-ui/icons/Search"

const useStyles = makeStyles({
  root: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "20vh",
    borderRadius: 15
  },
  searchbar: {
    position: "relative",
    top: "14vh",
    left: "2vw",
    backgroundColor: "lightgray",
    borderRadius: 15,
    width: "95vw",
  },
  searchInput: {
    width: "100%",
    position: "relative",
    top: 3
  },
  searchIcon: {
    padding: 5
  },
  placeholderBox: {
    height: "20vh"
  }
})

const SearchBar = () => {
  const classes = useStyles()
  return (
    <>
    <Paper className={classes.root}>
      <Box className={classes.searchbar}>
        <InputLabel>
          <Grid container>
            <Grid item xs={1}>
              <SearchIcon className={classes.searchIcon}/>
            </Grid>
            <Grid item xs={11}>
              <InputBase className={classes.searchInput} placeholder="Search..." />
            </Grid>
          </Grid>
        </InputLabel>
      </Box>
    </Paper>
    <Box className={classes.placeholderBox}/>
    </>
  )
}

export default SearchBar
