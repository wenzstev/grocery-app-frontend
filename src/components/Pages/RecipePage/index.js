import React from "react"

import {
  Container,
  Grid,
  makeStyles
} from "@material-ui/core"

import {TopSquiggle} from "../../Backgrounds/Squiggles"
import woodBackground from "../../../assets/wood-background.jpg"

import NavMenu from "../../SharedComponents/NavMenu"

import SearchBar from "./SearchBar"
import RecipeCard from "./RecipeCard"

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

const HomePage = () => {
  const classes = useStyles()

  const testRecipe = {
    name: "Test Recipe",
    ingredients: [
      "flour",
      "sugar",
      "salt"
    ]
  }

  return (
    <div className={classes.root}>
      <Container>
        <SearchBar />
        <Grid container>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <RecipeCard recipe={testRecipe}/>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default HomePage
