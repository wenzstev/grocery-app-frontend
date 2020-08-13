import React from "react"

import {
  Container,
  Grid,
  makeStyles
} from "@material-ui/core"

import {withRouter, Redirect} from "react-router-dom"

import woodBackground from "../../../assets/wood-background.jpg"

import SearchBar from "./SearchBar"

const useStyles = makeStyles({
  root: {
    backgroundImage: 'url('+ woodBackground + ')',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundColor: "#a8d4ff",
    backgroundBlendMode: "multiply",
    height: "100vh",
    width: "100vw",
  },
})

const MainTemplatePage = (props) => {
  const classes = useStyles()

  

  return (
    <div className={classes.root}>
      {props.noSearchbar ? null : <SearchBar/>}
      <Container>
          {props.children}
      </Container>
    </div>
  )
}

export default MainTemplatePage
