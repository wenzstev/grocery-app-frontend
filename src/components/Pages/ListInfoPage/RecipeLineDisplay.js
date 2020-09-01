import React, {useState, useEffect} from "react"
import {
  Link,
  useParams
} from "react-router-dom"


import axios from "../../../AxiosConfig"

import EditIcon from "@material-ui/icons/Edit"

import {
  Paper,
  List,
  ListItem,
  ButtonBase,
  makeStyles
} from "@material-ui/core"

const useStyles = makeStyles({
  root: {
    fontSize: "14px",
    fontWeight: "normal",
    width: "98%",
    borderRadius: "15px",
    margin: "auto"

  },
  editButton: {
    marginLeft: "10px",
    borderRadius: "15px",
    "& a":{
      color:"black"
    }
  }
})

const RecipeLineDisplayPanel = (props) => {
  const [lines, setLines] = useState([])
  const classes = useStyles(props)
  const {resourceId} = useParams()

  const getLines = () => {
    axios.get(`/lines`,{
      params: {
        list: resourceId,
        ingredient: props.ingredient
      }
    })
    .then(resp=>{
      console.log(resp)
      setLines(resp.data)
    })
  }

  useEffect(()=>{
    getLines()
  },[])

  console.log(lines)

  return (
    <Paper className={classes.root}>
      <List>
      {lines.map((element, index)=>(
        <RecipeLineDisplayLine key={index} line={element} />
      ))}
      </List>
    </Paper>
  )
}

const RecipeLineDisplayLine = (props) => {
  const {line} = props
  const [recipe, setRecipe] = useState({})
  const classes = useStyles()

  const getRecipe = () => {
    axios.get(`/recipes/${line.recipe_id}`)
    .then(resp=>setRecipe(resp.data))
  }

  useEffect(()=>{
    getRecipe()
  },[])

  return(
    <ListItem>
      <span style={{fontStyle:"italic"}}>
        "{line.text.join(' ')}"
      </span>
      <span style={{fontWeight:"bold"}}>
        - {recipe.name}
      </span>
      <ButtonBase className={classes.editButton}>
        <Link to={`/recipe/${line.recipe_id}`}>
          <EditIcon />
        </Link>
      </ButtonBase>
    </ListItem>
  )
}

export default RecipeLineDisplayPanel
