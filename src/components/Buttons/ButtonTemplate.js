import React from "react"

import {
  ButtonBase,
  makeStyles} from "@material-ui/core"

const useStyles = makeStyles({
  primary: {
    background: "#2B2B33",
    fontWeight: "bold",
    color: "#FFFFFF",
    borderRadius: "25px",
    padding: "10px 15px",
    fontFamily: "Verdana"
  },
  secondary : {
    background: "#FFFFFF",
    fontWeight: "bold",
    color: "#2B2B33",
    borderRadius: "25px",
    padding: "10px 15px",
    fontFamily: "Verdana"
  }
})

const ButtonTemplate = (props) => {
  const classes = useStyles()
  const {primary, secondary} = classes


  console.log(buttonStyle)

  return (
    <ButtonBase className={primary}>
      {props.children}
    </ButtonBase>
  )
}

export default ButtonTemplate
