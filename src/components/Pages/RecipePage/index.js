import React, {useState, useEffect} from "react"

import {
  Container,
  Grid
} from "@material-ui/core"

import {useSelector, useDispatch} from "react-redux"

import {TopSquiggle} from "../../Backgrounds/Squiggles"
import woodBackground from "../../../assets/wood-background.jpg"

import NavMenu from "../../SharedComponents/NavMenu"
import MainTemplatePage from "../MainTemplatePage/"

import {RecipeCard} from "../../SharedComponents/BaseCard"
import CreateNewCard from "../../SharedComponents/CreateNewCard"

const HomePage = (props) => {
  const user = useSelector(state=>state.user)
  const [recipes, setRecipes] = useState(null)

  const getRecipes = () => {
    fetch(`/recipes?user=${user.id}`)
    .then(response=>response.json())
    .then(json=>{
      setRecipes(json)
    })
  }

  useEffect(()=>getRecipes(), [])


  return (
    <MainTemplatePage getRecipes={getRecipes}>
      <Grid container>
        <CreateNewCard type="Recipe" />
        {recipes ? recipes.map((value, index)=> <RecipeCard key={index} recipe={value} />) : null}
      </Grid>
    </MainTemplatePage>
  )
}

export default HomePage
