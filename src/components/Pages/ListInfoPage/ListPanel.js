import React from "react"
import {useState, useEffect} from "react"

import IngredientButton from "./IngredientButton"
import AddIngredientButton from "./AddIngredientButton"

import {
  Paper,
  Grid,
  Box,
  Typography,
  makeStyles
} from "@material-ui/core"

const useStyles = makeStyles({
  root: {
    backgroundColor: "#B5E4E8E6"
  },
  gridItem: {
    padding: "0px"
  }
})

const ListPanel = (props) => {
  console.log('rendering list panel')
  console.log(props.listItems)

  const {listItems} = props

  const size = 5
  const classes = useStyles()


  const chunkedAr = []
  for (let i = 0; i < listItems.length; i++){
    const last = chunkedAr[chunkedAr.length-1]
    if(!last || last.length === size){
      chunkedAr.push([<IngredientButton key={i}>{listItems[i]}</IngredientButton>])
    } else {
      last.push(<IngredientButton key={i}>{listItems[i]}</IngredientButton>)
    }
  }


  if (chunkedAr.length > 0){
    chunkedAr[chunkedAr.length-1].push(
      <Box mx={1}>
        <AddIngredientButton getIngredients={props.getIngredients}/>
      </Box>
    )
  }


  const columns = chunkedAr.map((ingredients, i)=>(
    <Grid item key={i} className={classes.gridItem}>
      {ingredients}
    </Grid>)
  )

  const emptyList = (
    <Box p={2}>
      <Typography variant = "h4">Looks like your list is empty!</Typography>
      <Typography component="span">Add Ingredients: </Typography>
      <AddIngredientButton getIngredients={props.getIngredients}/>
    </Box>
  )


  return (
    <Paper variant="outlined" className={classes.root}>
      {columns.length > 0 ? (
        <Grid container spacing={3}>
          {columns.length > 0 ? columns : emptyList}
        </Grid>
      ) : emptyList}

    </Paper>
  )
}

export default ListPanel
