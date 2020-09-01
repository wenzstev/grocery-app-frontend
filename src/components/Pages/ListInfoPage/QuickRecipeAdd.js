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

  useEffect(()=>{
    getAssociationsAndRecipes()
  }, [props.open])


  const updateList = () => {
    props.getIngredients()
    getAssociationsAndRecipes()
  }

  const getAssociationsAndRecipes = async() => {
    try {
      var assocResponse = await axios.get(`/list-recipe-associations?list=${props.listId}`)
      var recipeResponse = await axios.get(`/recipes?user=${user.id}`)
    } catch (err) {
      console.log(err)
    }

    let assoc = assocResponse.data
    let allRecipes = recipeResponse.data

    const associationSet = new Set(assoc.map(element=>element.recipe_id))

    const filteredRecipes = allRecipes.filter((element)=>{
      if (associationSet.has(element.id)){
        return false
      }
      return true
    })

    setRecipes(filteredRecipes)
    setAssociations(assoc)
  }





  const recipeIsAssociated = (recipe) => {
    for (var i = 0; i < associations.length; i++){
      if (associations[i].recipe_id == recipe.id){
        return associations[i]
      }
    }
    return null

  }

  return (
    <Drawer anchor="left" open={props.open} onClose={props.onClose}>
      {recipes.map((recipe, index)=>{
        return (
          <RecipeSideSelector
            key={index}
            recipe={recipe}
            listId = {props.listId}
            updateList={updateList}/>
      )}
    )}
    </Drawer>
  )
}

export default QuickRecipeAdd
