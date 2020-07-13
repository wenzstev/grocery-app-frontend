import React from "react"
import {useState} from "react"

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
    '&:hover': {
      backgroundColor: "white",
      color: "black"
    },
    hover: {}
  }
})

const IngredientButton = (props) =>{
  const [hovering, setHovering] = useState(false)

  const classes = useStyles()

  return(
    <Box px={1}>
      <ButtonBase
        onMouseEnter={()=>setHovering(true)}
        onMouseLeave={()=>setHovering(false)}
        className={classes.root}>
        {props.children}
        {hovering ? <EditSymbol /> : null}
      </ButtonBase>
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
