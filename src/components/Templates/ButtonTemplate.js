import React from "react"

import {
  Button,
  makeStyles
} from "@material-ui/core"


const useStyles = makeStyles((theme) => ({
  root: {
    borderRadius: "15px",
    padding: "10px 15px",
    fontFamily: "Verdana",
    textTransform: "capitalize",
  }
}))

const ButtonTemplate = (props) => {
  const classes = useStyles()

  return (
    <Button
      variant="contained"
      color={props.color}
      type={props.type}
      className={classes.root}
      onClick={props.onClick}
      fullWidth={props.fullWidth}>
      {props.children}
    </Button>
  )
}

export default ButtonTemplate
