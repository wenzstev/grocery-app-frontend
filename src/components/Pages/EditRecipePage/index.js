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


  return (
    <MainTemplatePage noSearchbar>
      <TopSquiggle>{recipe ? recipe.name : null}</TopSquiggle>
      <RecipePanel lines={recipe.recipe_lines}/>
    </MainTemplatePage>
  )
}

export default EditRecipePage
