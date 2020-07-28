import React from "react"

import {
  Paper,
  Box,
  Typography,
  List,
  ListItem,
  makeStyles,
  createStyles
} from "@material-ui/core"

const useStyles = makeStyles((theme:Theme)=>createStyles({
  root: {
    borderRadius: 10,
    "&:hover":{
      backgroundColor: "whitesmoke"
    }
  },
  title: {
    textAlign: "center"
  }
}))

const RecipeCard = (props) => {
  const classes = useStyles()
  const ingredients = props.recipe.ingredients.map((ing, index)=>(
    <ListItem key={index}>{ing}</ListItem>
  ))
  return(
    <Box m={2}>
      <Paper className={classes.root}>
        <Typography variant="h6" className={classes.title}>{props.recipe.name}</Typography>
        <List>
          {ingredients}
        </List>
      </Paper>
    </Box>
  )
}

export default RecipeCard
