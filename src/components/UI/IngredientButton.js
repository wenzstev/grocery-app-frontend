import React from "react"

import {
  ButtonBase,
  Box,
  makeStyles} from "@material-ui/core"

const useStyles = makeStyles({
  root: {
    fontFamily: "Acari Sans, Verdana",
    fontWeight: "bold",
    color: "white"
  }
})

const IngredientButton = (props) =>{
  const classes = useStyles()
  return(
    <Box p={1}>
      <ButtonBase className={classes.root}>
        {props.children}
      </ButtonBase>
    </Box>
  )
}

export default IngredientButton
