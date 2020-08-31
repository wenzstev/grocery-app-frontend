import React, {useState, useEffect} from "react"
import {useParams} from "react-router-dom"

import axios from "../../../AxiosConfig"

import {
  Paper,
  makeStyles
} from "@material-ui/core"

const useStyles = makeStyles({
  root: {
    fontSize: "14px",
    fontWeight: "normal",
    fontStyle: "italics"
  }
})

const RecipeLineDisplay = (props) => {
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
    {lines.map((element, index)=><li key={index}>{element.text.join(' ')}</li>)}
    </Paper>
  )
}

export default RecipeLineDisplay
