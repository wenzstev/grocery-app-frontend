import React, {useState, useEffect} from "react"

import {useSelector} from "react-redux"

import {Link, Redirect, useParams} from "react-router-dom"

import MainTemplatePage from "../MainTemplatePage"

import EditableTitle from "../../SharedComponents/EditableTitle"

import {
  Paper,
  Typography,
  makeStyles
} from "@material-ui/core"

import RecipePanel from "./RecipePanel"
import NotYourResource from "../MiscPages/NotYourResource"
import axios from "../../../AxiosConfig"
import ButtonTemplate from "../../Templates/ButtonTemplate"

const useStyles = makeStyles({
  root: {
    borderRadius: 15,
    padding: '1rem',
    marginTop: '1rem'
  }
})

const LoggedOutPanel = () => {
  const classes = useStyles()
  return (
    <Paper className={classes.root}>
      <Typography>
        You are currently logged out. Log in to save this recipe as part of a grocery list!
      </Typography>
      <Link style={{textDecoration:'none'}} to="/login">
        <ButtonTemplate>Login</ButtonTemplate>
      </Link>
    </Paper>
  )
}

const EditRecipePage = () => {
  const [recipe, setRecipe] = useState({})
  const [recipeExists, setRecipeExists] = useState(true)
  const [hasPermission, setHasPermission] = useState(true)
  const user = useSelector(store=>store.user)
  const {resourceId} = useParams()

  const getRecipe = async() => {
    try {
      var recipe = await axios.get(`/recipes/${resourceId}`)
    } catch (e) {
      if (e.response.status === 404){
        setRecipeExists(false)
        return
      } else {
        console.log(e)
      }
    }
    if (recipe.data.creator_id != null){
      console.log(recipe.data.creator_id)
      if(user != null && recipe.data.creator_id === user.id){
        setRecipe(recipe.data)
      } else {
        setHasPermission(false)
      }
    } else {
      setRecipe(recipe.data)
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
            {user ? null: <LoggedOutPanel />}
          </MainTemplatePage>
      ) : <NotYourResource resource="recipe" />
        : <Redirect to="/pagenotfound" />
    }
    </>
  )
}

export default EditRecipePage
