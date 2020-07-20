import React from "react"

import {
  Container,
  Typography,
  makeStyles
} from "@material-ui/core"

import {LoginSquiggle} from "../Backgrounds/Squiggles"
import woodBackground from "../../assets/wood-background.jpg"
import RegisterPanel from "../UI/RegisterPanel"

const useStyles = makeStyles({
  root: {
    background: "url(" + woodBackground + ")",
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundColor: "#a8d4ff",
    backgroundBlendMode: "multiply",
    height: "100vh",
    width: "100vw",
  },
  panel: {
    zIndex: "5",
    position: "relative",
    color: "white"
  }
})

const LoginPage = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <LoginSquiggle />
      <Container className={classes.panel}>
        <Typography variant="h4">
          Register
        </Typography>
        <RegisterPanel />
      </Container>

    </div>
  )
}

export default LoginPage
