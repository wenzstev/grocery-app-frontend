import React, {useState, useEffect} from "react"
import {useParams} from "react-router-dom"

import {
  List,
  ListItem,
  Paper,
} from "@material-ui/core"

import RecipeButton from "./RecipeButton"

import axios from "../../../AxiosConfig"

const RecipePanel = () => {
  const [recipes, setRecipes] = useState([])
  const {resourceId} = useParams()

  console.log("recipepanel rendered")

  const getRecipes = () => {
    console.log("getting recipes")
    console.log(recipes)
    axios.get(`/recipes?list=${resourceId}`)
    .then(resp=>setRecipes(resp.data))
  }

  useEffect(()=>{
    getRecipes()
  }, []);

  const mappedRecipes = recipes.map((element, index)=><RecipeButton recipe={element} key={index} />)

  return (
    <Paper>
      <List>
        {mappedRecipes}
      </List>
    </Paper>
  )
}

export default RecipePanel
