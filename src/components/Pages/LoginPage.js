import React from "react"

import {
  Container,
  Typography,
  Grid,
  Box,
  makeStyles
} from "@material-ui/core"

import {LoginSquiggle} from "../Backgrounds/Squiggles"
import woodBackground from "../../assets/wood-background.jpg"
import RegisterPanel from "../UI/RegisterPanel"
import LoginPanel from "../UI/LoginPanel"

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
        <Grid container>
        <Grid item xs={12} md={6}>
          <Box mx={5}>
            <LoginPanel />
          </Box>
        </Grid>
          <Grid item xs={12} md={6}>
            <Box mx={5}>
              <RegisterPanel />
            </Box>
          </Grid>
        </Grid>
      </Container>

    </div>
  )
}

export default LoginPage
