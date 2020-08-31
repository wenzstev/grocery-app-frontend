import React, {useState, useEffect} from "react"
import {useParams} from "react-router-dom"

import {
  List,
  ListItem,
  Paper,
} from "@material-ui/core"

import RecipeButton from "./RecipeButton"

import axios from "../../../AxiosConfig"

const RecipePanel = (props) => {
  const [recipes, setRecipes] = useState([])
  const {resourceId} = useParams()


  const getRecipes = () => {
    axios.get(`/recipes?list=${resourceId}`)
    .then(resp=>setRecipes(resp.data))
  }

  useEffect(()=>{
    getRecipes()
  }, []);

  const refreshPanels = () => {
    props.getIngredients()
    getRecipes()
  }

  const mappedRecipes = recipes.map((element, index)=>(
    <RecipeButton
      recipe={element}
      key={index}
      refreshPanels={refreshPanels}/>)
  )

  return (
    <Paper>
      <List>
        {mappedRecipes}
      </List>
    </Paper>
  )
}

export default RecipePanel
