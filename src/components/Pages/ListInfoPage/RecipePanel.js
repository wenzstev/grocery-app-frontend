import React, {useState, useEffect} from "react"
import {useParams} from "react-router-dom"

import {
  List,
  ListItem,
  Paper,
  Box,
  Grid,
  makeStyles,
} from "@material-ui/core"

import RecipeButton from "./RecipeButton"

import axios from "../../../AxiosConfig"

const useStyles = makeStyles({
  root: {
    backgroundColor: "lightgray"
  }
})

const RecipePanel = (props) => {
  const [recipes, setRecipes] = useState([])
  const {resourceId} = useParams()

  const classes = useStyles()

  const getRecipes = () => {
    axios.get(`/recipes?list=${resourceId}`)
    .then(resp=>setRecipes(resp.data))
  }

  useEffect(()=>{
    getRecipes()
  }, [props.drawerOpen]);

  const refreshPanels = () => {
    props.getIngredients()
    getRecipes()
  }

  const mappedRecipes = recipes
  .filter((element)=>element.name != "Additional Ingredients")
  .map((element, index)=>(
    <RecipeButton
      recipe={element}
      key={index}
      refreshPanels={refreshPanels}/>)
  )

  const component = (
    <Grid item xs={12} md={6}>
      <Box m={1}>
        <Paper className={classes.root}>
          <List>
            {mappedRecipes}
          </List>
        </Paper>
      </Box>
    </Grid>
  )

  return (
    <>
    {mappedRecipes.length > 0 ? component : null}
    </>
  )
}

export default RecipePanel
