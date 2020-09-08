import React from "react"

import BackgroundDisplay from "./BackgroundDisplay"
import BasicInfoPanel from "../../SharedComponents/BasicInfoPanel"

import {
  AppBar,
  Toolbar,
  Button,
  Box,
  Container,
} from "@material-ui/core"

const UnauthLayout = (props) => {
  return (
    <BackgroundDisplay background={props.background} backgroundColor={props.backgroundColor}>
      <Container>
      <BasicInfoPanel>
        {props.children}
      </BasicInfoPanel>
      </Container>
    </BackgroundDisplay>
  )
}

export default UnauthLayout
