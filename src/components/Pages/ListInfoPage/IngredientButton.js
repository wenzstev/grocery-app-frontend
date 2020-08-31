import React, {useState} from "react"
import {useParams} from "react-router-dom"
import clsx from "clsx"
import EditIcon from "@material-ui/icons/Edit"


import editSymbol from "../../../assets/edit-symbol.svg"

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
  const classes = useStyles()
  const {resourceId} = useParams()

  const getRecipeLines = () => {
    axios.get(`/lines`,{
      params: {
        list: resourceId,
        ingredient: props.children
      }
    })
    .then(resp=>console.log(resp.data))
  }

  const display = hovering ?
  <ButtonBase
    onMouseLeave={()=>setHovering(false)}
    onClick = {getRecipeLines}
    className={clsx(classes.root, classes.hover)}>
    {props.children}
    <EditIcon />
  </ButtonBase>
  : null


  return(
    <Box px={1} position="relative" className={classes.root}>
        <Box
          component="span"
          className={classes.textBox}
          onMouseEnter={()=>setHovering(true)}>
          {props.children}
        </Box>
      {display}
    </Box>
  )
}


export default IngredientButton
