import React, {useState, useEffect} from "react"

import {useSelector} from "react-redux"

import {Redirect, useParams} from "react-router-dom"

import MainTemplatePage from "../MainTemplatePage"

import EditableTitle from "../../SharedComponents/EditableTitle"

import {
  Paper,
  Box,
  Grid,
  makeStyles
} from "@material-ui/core"

import RecipePanel from "./RecipePanel"
import BackButton from "../../SharedComponents/BackButton"
import NotYourResource from "../MiscPages/NotYourResource"
import axios from "../../../AxiosConfig"

const EditRecipePage = () => {
  const [recipe, setRecipe] = useState({})
  const [recipeExists, setRecipeExists] = useState(true)
  const [hasPermission, setHasPermission] = useState(true)
  const token = useSelector(store=>store.token)
  const user = useSelector(store=>store.user)
  const {resourceId} = useParams()

  const getRecipe = async() => {
    try {
      var recipe = await axios.get(`/recipes/${resourceId}`)
    } catch (e) {
      if (e.response.status == 404){
        setRecipeExists(false)
        return
      } else {
        console.log(e)
      }
    }
    if (recipe.data.creator_id == user.id){
      setRecipe(recipe.data)
    } else {
      setHasPermission(false)
    }
  }

  useEffect(()=>{
    getRecipe()
  }, [])

  const changeRecipeLine = (lineId, newLineJSON) => {
    const newLines = [...recipe.recipe_lines]
    newLines[lineId] = newLineJSON
    setRecipe({...recipe, ...{recipe_lines: newLines}})
  }

  const removeLineFromDOM = (lineId) => {
    const newLines = [...recipe.recipe_lines]
    newLines.splice(lineId, 1)
    setRecipe({...recipe, ...{recipe_lines: newLines}})
  }


  return (
    <>
      {recipeExists ?
        hasPermission ?
          (
          <MainTemplatePage noSearchbar>
            <EditableTitle type="recipe" hasBackArrow />
            <RecipePanel
              lines={recipe.recipe_lines}
              removeLineFromDOM={removeLineFromDOM}
              changeLine={changeRecipeLine}/>
          </MainTemplatePage>
      ) : <NotYourResource resource="recipe" />
        : <Redirect to="/pagenotfound" />
    }
    </>
  )
}

export default EditRecipePage
