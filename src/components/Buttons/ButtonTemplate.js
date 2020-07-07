import React from "react"

import {
  ButtonBase,
  makeStyles} from "@material-ui/core"

const useStyles = makeStyles({
  button: {
    background: "#2B2B33",
    color: "#FFFFFF",
    borderRadius: "25px",
    padding: "10px 25px",
    fontFamily: "Verdana"
  }
})

const ButtonTemplate = (props) => {
  const classes = useStyles()
  return (
    <ButtonBase className={classes.button}>
      ButtonTemplate
    </ButtonBase>
  )
}

export default ButtonTemplate
