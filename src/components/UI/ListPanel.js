import React from "react"

import IngredientButton from "./IngredientButton"

import {
  Paper,
  Grid,
  makeStyles
} from "@material-ui/core"

const useStyles = makeStyles({
  root: {
    backgroundColor: "#B5E4E8"
  }
})

const ListPanel = (props) => {

  const size = 5
  const classes = useStyles()

  const testIngredients = [
    "milk",
    "eggs",
    "flour",
    "blueberries",
    "coffee beans",
    "steak"
  ]

  const chunkedAr = []
  for (let i = 0; i < testIngredients.length; i++){
    const last = chunkedAr[chunkedAr.length-1]
    if(!last || last.length === size){
      chunkedAr.push([<IngredientButton key={i}>{testIngredients[i]}</IngredientButton>])
    } else {
      last.push(<IngredientButton key={i}>{testIngredients[i]}</IngredientButton>)
    }
  }

  const columns = chunkedAr.map((ingredients, i)=>(
    <Grid item key={i}>
      {ingredients}
    </Grid>)
  )

  console.log(columns)

  return (
    <Paper variant="outlined" className={classes.root}>
      <Grid container spacing={3}>
        {columns}
      </Grid>
    </Paper>
  )
}

export default ListPanel
