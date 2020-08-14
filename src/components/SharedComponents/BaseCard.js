import React, {useState, useEffect} from "react"

import {
  Paper,
  Box,
  Typography,
  List,
  ListItem,
  Grid,
  makeStyles,
  createStyles
} from "@material-ui/core"

import {Link} from "react-router-dom"

const useStyles = makeStyles((theme:Theme)=>createStyles({
  root: {
    borderRadius: 10,
    height: "280px",
    "&:hover":{
      backgroundColor: "whitesmoke"
    }
  },
  title: {
    textAlign: "center",
    textDecoration: "none",
    textOverflow: "ellipsis",
    overflow: "hidden",
    whiteSpace: "nowrap",
    maxWidth: "90%",
    margin: "auto"
  }
}))

const SHOWNINGREDIENTS = 5

export const BaseCard = (props) => {
  console.log(props)
  const classes = useStyles()
  const ingredients = props.ingredients.map((ing, index)=>{
    if (index < SHOWNINGREDIENTS){
      return (
        <ListItem key={index}>{ing}</ListItem>
      )}
      else if (index === props.ingredients.length - 1){
        return(
          <ListItem style={{fontStyle:"italic"}} key={SHOWNINGREDIENTS}>...and {index-SHOWNINGREDIENTS} more.</ListItem>
        )
      }
    }
  )
  return(
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Box m={2}>
        <Paper className={classes.root}>
          <Link to={props.route} style={{textDecoration: "none"}}>
          <Typography variant="h6" className={classes.title}>{props.name}</Typography>
          <List>
            {ingredients}
          </List>
        </Link>
        </Paper>
      </Box>
    </Grid>
  )
}

export const RecipeCard = (props) => {
  const [ingredients, setIngredients] = useState([])

  useEffect(()=>{
    fetch(`/ingredients?recipe=${props.recipe.id}`)
    .then(response=>response.json())
    .then(json=>setIngredients(json.map((ing)=>ing['name'])))
  },[])

  return(
    <BaseCard
      name={props.recipe.name}
      ingredients={ingredients.sort()}
      route={`/recipe/${props.recipe.id}`}
      />
  )
}

export const ListCard = (props) => {
  const [ingredients, setIngredients] = useState([])

  useEffect(()=>{
    fetch(`/ingredients?list=${props.list.id}`)
    .then(response=>response.json())
    .then(json=>setIngredients(json.map((ing)=>ing['name'])))
  }, [])

  return (
      <BaseCard
        name={props.list.name}
        ingredients={ingredients.sort()}
        route={`/list/${props.list.id}`}
      />
  )

}
