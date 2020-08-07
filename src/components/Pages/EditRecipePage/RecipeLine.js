import React from "react"

import {
  ListItem,
  makeStyles
} from "@material-ui/core"

import IngredientButton from "./IngredientButton"

const useStyles = makeStyles({
  root: {
    color: "white",

  }
})

const RecipeLine = (props) => {
  const classes = useStyles()
  return (
    <ListItem className={classes.root}>
      {props.line.text.split(" ").map((word, index)=>(
        <IngredientButton key={index} text={word} />
      ))}
      {props.line.ingredients.map((ing)=><IngredientButton text={ing.name} />)}
    </ListItem>
  )
}

export default RecipeLine
