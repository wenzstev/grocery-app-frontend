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
    fontSize: "20px",
    color: "white",
    padding: "5px",
    width: "95%",
    margin:"5px auto",
    display:"block",
    borderRadius: "25px",
    "&:hover":{
      backgroundColor: "white",
      color: "black",
    }
  },
  textBox: {
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden",
    width: "100%",
    display: "inline-block",
    textAlign: "left"
  }
})

const IngredientButton = (props) =>{
  const [hovering, setHovering] = useState(false)
  const [displayLines, setDisplayLines] = useState(false)
  const classes = useStyles()

  return(
    <>
    <ButtonBase
      className={classes.root}
      onClick={()=>setDisplayLines(prev=>!prev)}
      >
        <Box
          className={classes.textBox}
          onMouseEnter={()=>setHovering(true)}>
            {props.ingredient}
        </Box>
    </ButtonBase>
    {displayLines ?
      <RecipeLineDisplay
        ingredient={props.ingredient}/>
      : null}
    </>
  )
}


export default IngredientButton
