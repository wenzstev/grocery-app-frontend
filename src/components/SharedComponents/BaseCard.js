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

import axios from "../../AxiosConfig"

const useStyles = makeStyles((theme:Theme)=>createStyles({
  root: {
    borderRadius: 10,
    height: "280px",
    "&:hover":{
      backgroundColor: "whitesmoke"
    },
    "& a":{
      color: "black"
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
  const [ingredients, setIngredients] = useState([])
  const classes = useStyles()

  const getIngredients = async() => {
    var ingredientResponse = await axios.get(`/ingredients?${props.type}=${props.id}`)
    setIngredients(ingredientResponse.data.map((ingredient)=>ingredient['name']).sort())
  }

  useEffect(()=>{
    getIngredients()
  }, [])

  const mappedIngredients = ingredients.map((ing, index)=>{
    if (index < SHOWNINGREDIENTS){
      return (
        <ListItem key={index}>{ing}</ListItem>
      )}
      else if (index === ingredients.length - 1){
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
            {mappedIngredients}
          </List>
        </Link>
        </Paper>
      </Box>
    </Grid>
  )
}


export const RecipeCard = (props) => {
  return(
    <BaseCard
      type="recipe"
      name={props.recipe.name}
      id={props.recipe.id}
      route={`/recipe/${props.recipe.id}`}
      />
  )
}

export const ListCard = (props) => {
  return (
      <BaseCard
        type="list"
        name={props.list.name}
        id={props.list.id}
        route={`/list/${props.list.id}`}
      />
  )

}
