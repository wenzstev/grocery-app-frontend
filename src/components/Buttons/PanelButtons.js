import React from "react"
import {ButtonBase, makeStyles} from "@material-ui/core"

const useStyles = makeStyles({
  leftPanel: {
    background: "gray",
    borderRadius: "0px 10px 10px 0px",
    fontFamily: "Verdana",
    padding: "20px 10px"
  }
})

export const PanelButton = () =>{
  const classes = useStyles()
  return (
    <ButtonBase className={classes.leftPanel}>
      →
    </ButtonBase>
  )
}
