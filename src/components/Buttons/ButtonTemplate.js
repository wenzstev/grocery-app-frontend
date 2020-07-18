import React from "react"

import {
  ButtonBase,
  Button,
  makeStyles
} from "@material-ui/core"

import {useTheme} from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
  root: {
    fontWeight: "bold",
    borderRadius: "25px",
    padding: "10px 15px",
    fontFamily: "Verdana",
    textTransform: "capitalize"
  }
}))

const ButtonTemplate = (props) => {
  const classes = useStyles()

  return (
    <Button
      variant="contained"
      color={props.color}
      className={classes.root}>
      {props.children}
    </Button>
  )
}

export default ButtonTemplate
