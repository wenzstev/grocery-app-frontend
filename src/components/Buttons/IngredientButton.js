import React from "react"
import clsx from "clsx"
import {useState} from "react"
import EditIcon from "@material-ui/icons/Edit"


import editSymbol from "../../assets/edit-symbol.svg"

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
  },
  textBox: {
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden",
    width: "200px"
  },
  hover: {
      backgroundColor: "white",
      color: "black",
      position: "absolute",
      whiteSpace: "nowrap",
      zIndex: "5",
      left: "5px"
  }
})

const IngredientButton = (props) =>{
  const [hovering, setHovering] = useState(false)

  const classes = useStyles()

  const display = hovering ?
  <ButtonBase
    onMouseLeave={()=>setHovering(false)}
    className={clsx(classes.root, classes.hover)}>
    {props.children}
    <EditIcon />
  </ButtonBase>
  : null



  return(
    <Box px={1} position="relative">
    <ButtonBase
      onMouseEnter={()=>setHovering(true)}
      className={classes.root}>
      <Box component="span" className={classes.textBox}>
        {props.children}
      </Box>
    </ButtonBase>
    {display}
    </Box>
  )
}

const EditSymbol = () => {
  return (
    <Box pl={1}>
      <img src={editSymbol} size="32px"/>
    </Box>

  )
}

export default IngredientButton
