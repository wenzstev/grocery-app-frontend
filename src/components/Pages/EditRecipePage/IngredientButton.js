import React from "react"

import clsx from "clsx"

import {
  Box,
  ButtonBase,
  makeStyles
} from "@material-ui/core"

const useStyles = makeStyles({
  root:{
    padding: "5px 3px",
  },
  start: {
    borderRadius: "15px 0px 0px 15px",
    padding: "5px 5px 5px 15px"
  },
  end: {
    borderRadius: "0px 15px 15px 0px",
    padding: "5px 15px 5px 5px"
  },
  single: {
    borderRadius: "15px",
    padding: "5px 15px"
  },
  inside:{
    fontWeight: "bold"
  }
})

const IngredientButton = (props) => {
  const classes = useStyles(props)
  var buttonClasses = classes.root
  var colorIndex
  var location
  if (props.mappings != undefined){
    [colorIndex, location] = props.mappings
    switch (location){
      case "start":
        buttonClasses = clsx(classes.root, classes.start, classes.inside)
        break
      case "end":
        buttonClasses = clsx(classes.root, classes.end, classes.inside)
        break
      case "single":
        buttonClasses = clsx(classes.root, classes.single, classes.inside)
        break
      case "inside":
        buttonClasses = clsx(classes.root, classes.inside)
        break
      default:
        buttonClasses = buttonClasses
    }
  }
  return (
    <Box>
      <ButtonBase
        style={colorIndex != undefined ? {"backgroundColor": props.colors[colorIndex]} : null}
        className={buttonClasses}
        onClick={props.clickHandler}
        >
        {props.children}
      </ButtonBase>
    </Box>
  )
}

export default IngredientButton
