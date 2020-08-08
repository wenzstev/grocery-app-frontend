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
  const {ingredients, text} = props.line
  console.log(ingredients)
  return (
    <ListItem className={classes.root}>
      {text.map((word, index)=>{
        if(ingredients[0] !== undefined){
          if(index >= ingredients[0].relevant_tokens[0] && index < ingredients[0].relevant_tokens[1]){
            return <IngredientButton key={index} text={word} ingredient/>
          }
        }
        return (
          <IngredientButton key={index} text={word}/>
        )}
      )}
    </ListItem>
  )
}

export default RecipeLine
