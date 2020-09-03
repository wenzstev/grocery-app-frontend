
import React from "react"


import {
  Box,
  Card,
  Typography,
  List,
  ListItem,
  ButtonBase,
  makeStyles
} from "@material-ui/core"

import axios from "../../../AxiosConfig.js"


const useStyles = makeStyles({
  card: {
    "& h6":{
      width: "20vw",
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
    },
    "& li":{
      width: "20vw",
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
      display: "block",

    },
    "&:hover":{
      backgroundColor: "lightgray"
    }
  }
})

const RecipeSideSelector = (props) =>{
  const {recipe, listId, inList, updateList} = props
  const classes = useStyles()
  // TODO: this would be good to refactor out and reuse
  const getFirstNumIngredients = (finalNum) => {
    var numIngredients = 0
    var curLineNum = 0
    var curIngredientInLine = 0
    const ingredientsToReturn = new Array(finalNum)
    while (numIngredients < finalNum){
      let curLine = recipe.recipe_lines[curLineNum]
      if (curLine != undefined){
        let curIngredient = curLine.ingredients[curIngredientInLine]
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

  const addRecipeToList = () => {
    axios.post('/list-recipe-associations', {
      'grocerylist_id': listId,
      'recipe_id': recipe.id
    })
    .then(()=>updateList())
  }

  const removeRecipeFromList = () => {
    axios.delete(`/list-recipe-associations/${inList.id}`)
    .then(()=>updateList())
  }

  const ingredientsToDisplay = getFirstNumIngredients(5)

  return(
    <Box m = {1}>
      <ButtonBase className={classes.card} onClick={addRecipeToList}>
        <Card variant="outlined">
          <Typography variant="h6">
            {recipe.name}
          </Typography>
          <List>
            {ingredientsToDisplay.map((ingredient, index)=><ListItem key={index}>{ingredient.name}</ListItem>)}
          </List>
        </Card>
      </ButtonBase>
    </Box>
  )
}

export default RecipeSideSelector
