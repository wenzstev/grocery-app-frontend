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
    backgroundColor: "#B5E4E8E6",
    margin: "10px"
  },
  gridItem: {
    padding: "0px"
  }
})

const IngredientPanel = (props) => {

  const {listItems} = props

  const size = 5
  const classes = useStyles()



  const emptyList = (
    <Box p={2}>
      <Typography variant = "h4">Looks like your list is empty!</Typography>
      <Typography component="span">Add Ingredients below, or click on the "Quick Add"
        button to add a recipe from your list: </Typography>
      <AddIngredientButton getIngredients={props.getIngredients}/>
    </Box>
  )


  return (
    <Paper variant="outlined" className={classes.root}>
      {props.listItems.length > 0 ? (
        <>
        {props.listItems.map((element, index)=>{
          return <IngredientButton key={index} ingredient={element}/>
        })}
        <AddIngredientButton getIngredients={props.getIngredients}/>
        </>
      ) : emptyList}

    </Paper>
  )
}

export default IngredientPanel
