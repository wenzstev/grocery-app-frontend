import React from "react"
import {TopSquiggle} from "../Backgrounds/Squiggles"
import ListPanel from "../UI/ListPanel"
import ListModificationPanel from "../UI/ListModificationPanel"
import AddRecipeButton from "../Buttons/AddRecipeButton"
import ListInfoButton from "../Buttons/ListInfoButton"

import woodBackground from "../../assets/brown-wooden-floor-172292.jpg"

import {
  Container,
  Box,
  makeStyles
} from "@material-ui/core"

const useStyles = makeStyles({
  root: {
    backgroundImage: 'url('+ woodBackground + ')',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundColor: "#a8d4ff",
    backgroundBlendMode: "multiply",
    height: "100vh",
    width: "100vw",
  }
})

const ListPage = (props) => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <TopSquiggle>
        Your List
      </TopSquiggle>
      <Container>
        <ListModificationPanel />
        <ListPanel />
        <Box my={3}>
          <AddRecipeButton />
          <ListInfoButton />
        </Box>

      </Container>
    </div>
  )
}

export default ListPage
