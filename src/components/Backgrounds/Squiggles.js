import React from "react"
import clsx from "clsx"
import topSquiggle from "../../assets/top squiggle.png"
import bottomSquiggle from "../../assets/bottom squiggle.svg"
import loginSquiggle from "../../assets/login-squiggle.png"

import {
  makeStyles,
  Typography,
  Paper} from "@material-ui/core"

const useStyles = makeStyles({
  title: {
    color: "white",
    position: "absolute",
    top: "15px",
    left: "30px"
  },
  top: {
    height: "12vh",
  },
  squiggle: {
    width: "100%"
  },
  login: {
    height: "80vh"
  }
})

export const TopSquiggle = (props) => {
  const classes = useStyles()
  return(
    <div>
      <img src={topSquiggle} className={clsx(classes.top, classes.squiggle)}/>
      <Typography variant="h4" className = {classes.title}>
        {props.children}
      </Typography>
    </div>
  )
}

export const LoginSquiggle = () => {
  const classes = useStyles()
  return (
    <img src={loginSquiggle} className={clsx(classes.login, classes.squiggle)}/>
  )
}

export const BottomSquiggle = () => {
  return (
    <img src={bottomSquiggle} />
  )
}
