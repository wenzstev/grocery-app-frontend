import React from "react"
import {Link} from "react-router-dom"

import {
  ListItem,
  ButtonBase
} from "@material-ui/core"

import LinkIcon from "@material-ui/icons/Link"
import EditIcon from "@material-ui/icons/Edit"
import RemoveCircleIcon from "@material-ui/icons/RemoveCircle"



const RecipeButton = (props) => {
  return (
    <ListItem>
    {props.recipe.name}
    {props.recipe.url ?
      <RecipeSourceButton source={props.recipe.url} />
      : null}
    {props.recipe.name == "Additional Ingredients" ?
      null
      : ( <>
            <RecipeEditButton id={props.recipe.id}/>
            <RecipeDeleteButton />
          </>)}

    </ListItem>
  )
}

const RecipeSourceButton = (props) => {
  return (
    <a href={props.source}>
      <LinkIcon />
    </a>
  )
}

const RecipeEditButton = (props) => {
  return (
    <Link to={`/recipe/${props.id}`}>
      <EditIcon />
    </Link>
  )
}

const RecipeDeleteButton = (props) => {
  return (
    <ButtonBase>
      <RemoveCircleIcon />
    </ButtonBase>
  )
}

export default RecipeButton
