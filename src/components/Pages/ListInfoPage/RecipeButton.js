import React, {useState} from "react"
import {Link, useParams} from "react-router-dom"


import {
  ListItem,
  ButtonBase,
  Paper,
  makeStyles,
} from "@material-ui/core"


import LinkIcon from "@material-ui/icons/Link"
import EditIcon from "@material-ui/icons/Edit"
import RemoveCircleIcon from "@material-ui/icons/RemoveCircle"

import axios from "../../../AxiosConfig"

const INTERNAL_PADDING = 0
const INTERNAL_MARGIN = 3
const BUTTON_BORDER_RADIUS = "100%"

const useStyles = makeStyles({
  panel: {
    borderRadius: "30px",
    marginLeft: (props)=>props.recipe.name.length + "ch",
    backgroundColor: "lightgray",
    position: "absolute",
    "& button": {
      padding: INTERNAL_PADDING,
      margin: INTERNAL_MARGIN,
      borderRadius: BUTTON_BORDER_RADIUS
    },
    "& a": {
      padding: INTERNAL_PADDING,
      margin: INTERNAL_MARGIN,
      borderRadius: BUTTON_BORDER_RADIUS,
      color: "black"
    }
  }
})

const RecipeButton = (props) => {
  const [hovering, setHovering] = useState(false)
  const classes = useStyles(props)

  const panel = (
    <Paper className={classes.panel}>
      {props.recipe.url ?
        <RecipeSourceButton source={props.recipe.url} />
        : null}
      {props.recipe.name == "Additional Ingredients" ?
        null
        : ( <>
              <RecipeEditButton id={props.recipe.id}/>
              <RecipeDeleteButton id={props.recipe.id} refreshPanels={props.refreshPanels} />
            </>)}
        </Paper>
      )


  return (
    <ListItem
      className={classes.root}
      onMouseEnter={()=>setHovering(true)}
      onMouseLeave={()=>setHovering(false)}>
    {props.recipe.name}
    {hovering ? panel : null}

    </ListItem>
  )
}

const RecipeSourceButton = (props) => {
  return (
    <ButtonBase href={props.source} target="_blank">
      <LinkIcon />
    </ButtonBase>
  )
}

const RecipeEditButton = (props) => {
  return (
    <ButtonBase>
      <Link to={`/recipe/${props.id}`}>
        <EditIcon />
      </Link>
    </ButtonBase>
  )
}

const RecipeDeleteButton = (props) => {
  const {resourceId} = useParams()
  const clickHandler = () => {
    // call the adjusted endpoint for list recipe associations
    axios.get(`/list-recipe-associations`,{
      params: {
        recipe: props.id,
        list: resourceId
      }
    })
    .then(resp=>{
      return axios.delete(`/list-recipe-associations/${resp.data.id}`)
    })
    .then(resp=>props.refreshPanels())
    .catch(err=>console.log(err))
  }
  return (
    <ButtonBase onClick={clickHandler}>
      <RemoveCircleIcon />
    </ButtonBase>
  )
}

export default RecipeButton
