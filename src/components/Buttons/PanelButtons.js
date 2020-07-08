import React from "react"
import {useState} from "react"
import clsx from "clsx"
import {ButtonBase, makeStyles} from "@material-ui/core"
import arrow from "../../assets/arrow.svg"

const useStyles = makeStyles({
  root: {
    fontFamily: "Verdana",
    padding: "15px 10px",
    background: "whitesmoke",
    borderRadius: "0px 15px 15px 0px"
  },
  right: {
    transform: "scaleX(-1)"
  }
})


export const LeftPanelButton = () =>{
  const classes = useStyles()
  return (
    <ButtonBase className={classes.root}>
      <img src={arrow} height="25px"/>
    </ButtonBase>
  )
}

export const RightPanelButton = () => {
  const classes = useStyles()
  return (
    <ButtonBase className={clsx(classes.root, classes.right)}>
      <img src={arrow} height="25px"/>
    </ButtonBase>
  )
}
