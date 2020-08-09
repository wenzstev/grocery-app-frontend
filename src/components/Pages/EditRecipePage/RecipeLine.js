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

  const mapTextToIngredients = (arrayLength, ingredientArray) => {
    const emptyArray = new Array(arrayLength)
    if (ingredientArray.length == 0) {return emptyArray}
    var curIngredient = 0
    for (var i = 0; i < arrayLength; i++){
      const [tokenStart, tokenEnd] = ingredients[curIngredient].relevant_tokens
      if (i >= tokenStart && i < tokenEnd){
        emptyArray[i] = props.colors[curIngredient]
      } else if (i == tokenEnd) {
        curIngredient ++
      }
      curIngredient = 0
    }
    return emptyArray
  }

  console.log(ingredients)
  const textToIngredientArray = mapTextToIngredients(text.length, ingredients)
  console.log(textToIngredientArray)


  return (
    <ListItem className={classes.root}>
      {text.map((word, index)=>(
        <IngredientButton
          color={textToIngredientArray[index]}
          >{word}</IngredientButton>
      ))}
    </ListItem>
  )
}

export default RecipeLine
