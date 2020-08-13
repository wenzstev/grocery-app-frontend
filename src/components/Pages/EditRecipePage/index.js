import React, {useState, useEffect} from "react"

import {useSelector} from "react-redux"

import {useParams} from "react-router-dom"

import MainTemplatePage from "../MainTemplatePage"
import {TopSquiggle} from "../../Backgrounds/Squiggles"

import {
  Paper,
  Box,
  Grid,
  makeStyles
} from "@material-ui/core"

import RecipePanel from "./RecipePanel"

const EditRecipePage = () => {
  const [recipe, setRecipe] = useState({})
  const token = useSelector(store=>store.token)
  const {recipeId} = useParams()

  const getRecipeFromBackend = () => {
    fetch(`/recipes/${recipeId}`)
    .then(response=>response.json())
    .then(json=>setRecipe(json))
  }

  useEffect(()=>{
    getRecipeFromBackend()
  }, [])

  const changeRecipeLine = (lineId, newLineJSON) => {
    console.log(newLineJSON)
    console.log(recipe.recipe_lines)
    const newLines = [...recipe.recipe_lines]
    newLines[lineId] = newLineJSON
    console.log(newLines)
    setRecipe({...recipe, ...{recipe_lines: newLines}})
  }

  const removeLineFromDOM = (lineId) => {
    console.log("removing line")
    const newLines = [...recipe.recipe_lines]
    newLines.splice(lineId, 1)
    console.log(lineId)
    console.log(newLines)
    setRecipe({...recipe, ...{recipe_lines: newLines}})
  }


  return (
    <MainTemplatePage noSearchbar>
        <TopSquiggle>{recipe ? recipe.name : null}</TopSquiggle>
        <RecipePanel
          lines={recipe.recipe_lines}
          removeLineFromDOM={removeLineFromDOM}
          changeLine={changeRecipeLine}/>
    </MainTemplatePage>
  )
}

export default EditRecipePage
