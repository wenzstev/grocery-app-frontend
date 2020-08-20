import React, {useState, useEffect} from "react"

import {useSelector} from "react-redux"

import {
  Drawer
} from "@material-ui/core"

import RecipeSideSelector from "./RecipeSideSelector"

const QuickRecipeAdd = (props) => {
  const user = useSelector(store=>store.user)
  const token = useSelector(store=>store.token)
  const [recipes, setRecipes] = useState([])

  const getRecipes = () => {
    fetch(`/recipes?user=${user.id}`)
    .then(response=>response.json())
    .then(json=>{
      setRecipes(json)
    })
  }

  console.log(props.associations)



  useEffect(()=>getRecipes(), [props.open])

  const recipeIsAssociated = (recipe) => {
    for (var i = 0; i < props.associations.length; i++){
      if (props.associations[i].recipe_id == recipe.id){
        return props.associations[i]
      }
      return null
    }
  }

  return (
    <Drawer anchor="left" open={props.open} onClose={props.onClose}>
      {recipes.map((recipe, index)=>{
        const assoc = recipeIsAssociated(recipe)
        return (
          <RecipeSideSelector key={index} recipe={recipe} inList={recipeIsAssociated(recipe)}/>
      )}
    )}
    </Drawer>
  )
}

export default QuickRecipeAdd
