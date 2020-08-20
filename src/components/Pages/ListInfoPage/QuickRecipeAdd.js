import React, {useState, useEffect} from "react"

import {useSelector} from "react-redux"

import {
  Drawer
} from "@material-ui/core"

import RecipeSideSelector from "./RecipeSideSelector"

import axios from "../../../AxiosConfig"

const QuickRecipeAdd = (props) => {
  const user = useSelector(store=>store.user)
  const token = useSelector(store=>store.token)
  const [recipes, setRecipes] = useState([])
  const [associations, setAssociations] = useState([])

  const getRecipes = () => {
    axios.get(`/recipes?user=${user.id}`)
    .then(res=>setRecipes(res.data))
  }

  const getAssociations = () => {
    axios.get(`/list-recipe-associations?list=${props.listId}`)
    .then(res=>setAssociations(res.data))
  }

  // THIS ISN'T UPDATING AT THE RIGHT TIME. WHY?
  const updateList = () => {
    props.getIngredients()
    getAssociations()
  }


  useEffect(()=>{
    getRecipes()
    getAssociations()
  }, [props.open])

  const recipeIsAssociated = (recipe) => {
    for (var i = 0; i < associations.length; i++){
      if (associations[i].recipe_id == recipe.id){
        return associations[i]
      }
      return null
    }
  }

  return (
    <Drawer anchor="left" open={props.open} onClose={props.onClose}>
      {recipes.map((recipe, index)=>{
        const assoc = recipeIsAssociated(recipe)
        return (
          <RecipeSideSelector
            key={index}
            recipe={recipe}
            listId = {props.listId}
            inList={recipeIsAssociated(recipe)}
            updateList={updateList}/>
      )}
    )}
    </Drawer>
  )
}

export default QuickRecipeAdd
