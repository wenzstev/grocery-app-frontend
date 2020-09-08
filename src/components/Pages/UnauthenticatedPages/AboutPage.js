import React from "react"

import {
  Typography,
  Divider,
  Box,
  Grid,
  Button
} from "@material-ui/core"

import {Link} from "react-router-dom"

import UnauthLayout from "./UnauthLayout"
import ButtonTemplate from "../../Templates/ButtonTemplate"

import goodFood from "../../../assets/good-food.jpg"

const HowToListItem = (props) => (
  <>
    <Typography variant="h4">{props.title}</Typography>
    <Typography>{props.content}</Typography>
    {props.additional}
    <Box mb={3} />
  </>
)

export const BoxDivider = () => <Box m={2}><Divider /></Box>



const AboutPage = () => {
  return (
    <UnauthLayout background={goodFood}>
      <Typography variant="h3">
        Keeping track of your favorite recipes is as easy as 1, 2, 3!
      </Typography>
      <BoxDivider />
      <HowToListItem
        title="1. Enter your recipe url"
        content="Submit the url of the recipe you would like to save, and we'll automatically pull its ingredient lines and title. Most major recipe websites supported, with more being added all the time!"
        />
      <HowToListItem
        title="2. Clean up the ingredients"
        content="We'll provide you with our best guess for the ingredients on the line. Tweak the results or delete extraneous ingredients (like water)."
        />
      <HowToListItem
        title="3. Combine your recipes into grocery lists"
        content="Create new grocery lists with the click of a button, and add as many recipes as you like. We'll automatically combine ingredients, creating a one-stop shop for everything you'll need."
        />
      <BoxDivider />
      <Link to="login" style={{textDecoration:"none"}}>
        <ButtonTemplate color="primary" fullWidth>
          Sign up today and get started!
        </ButtonTemplate>
      </Link>
      <Link to="learnmore" style={{textDecoration:"none", color:"lightgray"}}>
        <Button fullWidth>Tell me more</Button>
      </Link>
    </UnauthLayout>
  )
}

export default AboutPage
