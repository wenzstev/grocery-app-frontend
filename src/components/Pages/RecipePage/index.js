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
import AddRecipeModal from "../MainTemplatePage/AddRecipeModal"

import axios from "../../../AxiosConfig"

const HomePage = (props) => {
  const user = useSelector(state=>state.user)
  const [recipes, setRecipes] = useState(null)
  console.log(user)

  const getRecipes = async() => {
    var recipeResponse = await axios.get(`/recipes?user=${user.id}`)
    setRecipes(recipeResponse.data)
  }

  useEffect(()=>{
    if(user != null){
      getRecipes()
    }
  }, [user])


  return (
    <Grid container>
      <CreateNewCard type="Recipe" clickHandler={()=>props.openModal(<AddRecipeModal />)}/>
      {recipes ?
        recipes
          .filter((value)=>value.name != "Additional Ingredients")
          .map((value, index)=> <RecipeCard key={index} recipe={value} />)
        : null}
    </Grid>
  )
}

export default HomePage
