import React, {useState} from "react"
import {useParams} from "react-router-dom"
import clsx from "clsx"
import EditIcon from "@material-ui/icons/Edit"

import RecipeLineDisplay from "./RecipeLineDisplay"


import axios from "../../../AxiosConfig"

import {
  ButtonBase,
  Box,
  makeStyles} from "@material-ui/core"

const useStyles = makeStyles({
  root: {
    fontFamily: "Acari Sans, Verdana",
    fontWeight: "bold",
    fontSize: "20px",
    color: "white",
    padding: "5px",
    borderRadius: "25px",
    textAlign: "left",
    width: "100%"
  },
  textBox: {
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden",
    maxWidth: "100%",
    display: "inline-block"
  },
  hover: {
      backgroundColor: "white",
      color: "black",
      position: "absolute",
      zIndex: "5",
      left: "0px",
      top: "0px",
      width: "auto"
  }
})

const IngredientButton = (props) =>{
  const [hovering, setHovering] = useState(false)
  const [displayLines, setDisplayLines] = useState(false)
  const classes = useStyles()
  const {resourceId} = useParams()


  const display = hovering ?
  <ButtonBase
    onMouseLeave={()=>setHovering(false)}
    onClick = {()=>setDisplayLines(prev=>!prev)}
    className={clsx(classes.root, classes.hover)}>
    {props.ingredient}
    <EditIcon />
  </ButtonBase>
  : null


  return(
    <Box px={1} position="relative" className={classes.root}>
        <Box
          component="span"
          className={classes.textBox}
          onMouseEnter={()=>setHovering(true)}>
          {props.ingredient}
        </Box>
      {display}
      {displayLines ?
        <RecipeLineDisplay ingredient={props.ingredient}/>
        : null}
    </Box>
  )
}


export default IngredientButton
