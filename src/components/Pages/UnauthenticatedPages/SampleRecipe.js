import React from "react"

import {
  Paper,
  Typography,
  makeStyles
} from "@material-ui/core"

import AddRecipeModal from "../MainTemplatePage/AddRecipeModal"

import MainTemplatePage from "../MainTemplatePage"

const useStyles = makeStyles({
  root: {
    position: "relative",
    top: "30vh",
    padding: "1rem",
    borderRadius: 15
  }
})

const SampleRecipe = () => {
  const classes = useStyles()
  return (
    <MainTemplatePage noSearchbar>
    <Paper className={classes.root}>
      <Typography> To get started, paste the recipe url you would like to use. </Typography>
      <AddRecipeModal isSample={true} />
      <Typography style={{marginTop:'1rem'}}>Please note that not every recipe site is currently supported, although more are being added all the time.</Typography>
    </Paper>
    </MainTemplatePage>
  )
}

export default SampleRecipe
