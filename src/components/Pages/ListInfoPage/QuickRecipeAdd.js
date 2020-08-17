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



  useEffect(()=>getRecipes(), [props.open])


  return (
    <Drawer anchor="left" open={props.open} onClose={props.onClose}>
      {recipes.map((recipe, index)=><RecipeSideSelector key={index} recipe={recipe} />)}
    </Drawer>
  )
}

export default QuickRecipeAdd
