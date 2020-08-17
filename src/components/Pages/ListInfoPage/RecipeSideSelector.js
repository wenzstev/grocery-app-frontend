import React from "react"

import {
  Box,
  Card,
  Typography,
  List,
  ListItem,
  Button
} from "@material-ui/core"

const RecipeSideSelector = ({recipe, inList}) =>{
  console.log(recipe)

  const getFirstNumIngredients = (finalNum) => {
    var numIngredients = 0
    var curLineNum = 0
    var curIngredientInLine = 0
    const ingredientsToReturn = new Array(finalNum)
    while (numIngredients < finalNum){
      let curLine = recipe.recipe_lines[curLineNum]
      console.log(curLine)
      if (curLine != undefined){
        let curIngredient = curLine.ingredients[curIngredientInLine]
        console.log(curIngredient)
        if (curIngredient != undefined){
          ingredientsToReturn[numIngredients] = curIngredient.ingredient
          curIngredientInLine ++
          numIngredients ++
        } else {
          curLineNum ++
          curIngredientInLine = 0
        }
      } else {
        return ingredientsToReturn.slice(0,numIngredients)
      }
    }
    return ingredientsToReturn
  }

  const ingredientsToDisplay = getFirstNumIngredients(5)

  return(
    <Box mb={2} mx={1}>
      <Card variant="outlined">
        <Typography variant="h6">
          {recipe.name}
        </Typography>
        <List>
          {ingredientsToDisplay.map((ingredient, index)=><ListItem key={index}>{ingredient.name}</ListItem>)}
        </List>
        {inList ?
          <Button>Remove</Button>
        : <Button>Add</Button>}
      </Card>
    </Box>
  )
}

export default RecipeSideSelector
