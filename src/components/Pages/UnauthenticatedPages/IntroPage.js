import React from "react"

import UnauthLayout from "./UnauthLayout"

import groceryStore from "../../../assets/grocery-store.jpg"

import {
  Typography,
  Grid,
  Box,
  makeStyles
} from "@material-ui/core"

import {Link} from "react-router-dom"

import ButtonTemplate from "../../Templates/ButtonTemplate"


const ButtonLayout = (props) => {
  return (
    <Grid item xs={6}>
      <Box m={2}>
      <Link to={`/${props.to}`} style={{textDecoration:"none"}}>
        <ButtonTemplate color={props.color} fullWidth>
            {props.text}
        </ButtonTemplate>
      </Link>
      </Box>
    </Grid>
  )
}

const IntroPage =  () => {
  return (
    <UnauthLayout background={groceryStore}>
      <Typography variant="h3">
        This week's grocery run just got a whole lot easier.
      </Typography>
      <Box m={3} />
      <Typography variant="h5">
        SousChef lets you keep your favorite recipes organized and assemble grocery lists with a click of a button.
      </Typography>
      <Box m={3} />
      <Grid container>
        <ButtonLayout to="sample" color="primary" text="Try It Out"/>
        <ButtonLayout to="about" color="secondary" text="Learn More" />
      </Grid>
    </UnauthLayout>
  )
}

export default IntroPage
