import React from "react"

import BackgroundDisplay from "./BackgroundDisplay"
import BasicInfoPanel from "../../SharedComponents/BasicInfoPanel"

import {Link} from "react-router-dom"

import {
  AppBar,
  Toolbar,
  Button,
  Box,
  Container,
  makeStyles
} from "@material-ui/core"

const useStyles = makeStyles({
  loginButton: {
    color: "white",
  }
})


const UnauthLayout = (props) => {
  const classes = useStyles()
  return (
    <BackgroundDisplay background={props.background} backgroundColor={props.backgroundColor}>
      <AppBar position="static">
        <Toolbar>
          <Button className={classes.loginButton} component={Link} to="/login">Login</Button>
        </Toolbar>
      </AppBar>
      <Container>
      <BasicInfoPanel>
        {props.children}
      </BasicInfoPanel>
      </Container>
    </BackgroundDisplay>
  )
}

export default UnauthLayout
