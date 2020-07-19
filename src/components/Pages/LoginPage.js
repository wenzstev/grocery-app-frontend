import React from "react"

import {makeStyles} from "@material-ui/core"

import {LoginSquiggle} from "../Backgrounds/Squiggles"
import woodBackground from "../../assets/wood-background.jpg"

const useStyles = makeStyles({
  root: {
    background: "url(" + woodBackground + ")",
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundColor: "#a8d4ff",
    backgroundBlendMode: "multiply",
    height: "100vh",
    width: "100vw",

  }
})

const LoginPage = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <LoginSquiggle />
    </div>
  )
}

export default LoginPage
