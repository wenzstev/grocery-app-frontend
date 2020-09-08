import React from "react"

import {withRouter, useHistory} from "react-router-dom"

import {
  Grid,
  Box,
  Divider
} from "@material-ui/core"

import ButtonTemplate from "../Templates/ButtonTemplate"

const WrongTurnNavOptions = (props) => {
  const history = useHistory()
  return (
    <>
      <Box m={2}>
        <Divider />
      </Box>
      <Grid container justifyContent="center" alignItems="center">
        <Grid item xs={6}>
          <Box mx={1}>
            <ButtonTemplate
              color="primary"
              fullWidth
              onClick={()=>history.goBack()}>Go Back</ButtonTemplate>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box mx={1}>
            <ButtonTemplate color="secondary"
              fullWidth
              onClick={()=>props.history.push("/")}
              >Go to Homepage</ButtonTemplate>
          </Box>
        </Grid>
      </Grid>
    </>
  )
}

export default withRouter(WrongTurnNavOptions)
