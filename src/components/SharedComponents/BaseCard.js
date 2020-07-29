import React from "react"

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
  const ingredients = props.contents.ingredients.map((ing, index)=>(
    <ListItem key={index}>{ing}</ListItem>
  ))
  return(
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Box m={2}>
        <Paper className={classes.root}>
          <Typography variant="h6" className={classes.title}>{props.contents.name}</Typography>
          <List>
            {ingredients}
          </List>
        </Paper>
      </Box>
    </Grid>
  )
}

export default RecipeCard
