import React from "react"
import {useState, useEffect} from "react"

import IngredientButton from "../Buttons/IngredientButton"
import {PlusButton} from "../Buttons/ListModificationButtons"

import {
  Paper,
  Grid,
  Box,
  makeStyles
} from "@material-ui/core"

const useStyles = makeStyles({
  root: {
    backgroundColor: "#B5E4E8E6"
  }
})

const ListPanel = (props) => {

  const {listItems} = props

  console.log(listItems)

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

  console.log(chunkedAr)
  console.log(chunkedAr[chunkedAr.length-1])

  if (chunkedAr.length > 0){
    chunkedAr[chunkedAr.length-1].push(
      <Box mx={1}>
        <PlusButton />
      </Box>
    )
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
