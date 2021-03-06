import React from "react"
import clsx from "clsx"
import topSquiggle from "../../assets/top squiggle.png"
import bottomSquiggle from "../../assets/bottom squiggle.svg"
import loginSquiggle from "../../assets/login-squiggle.png"

import {
  makeStyles,
  Typography
} from "@material-ui/core"

const useStyles = makeStyles({
  root: {
    zIndex: 5,
  },
  title: {
    color: "white",
    position: "absolute",
    top: "15px",
    left: "30px",
    width: "90%"
  },
  top: {
    height: "12vh",
    position: "absolute",
    left: 0,
    top: 0
  },
  topPlaceholder: {
    height: "12vh"
  },
  squiggle: {
    width: "100vw"
  },
  login: {
    height: "80vh",
    position: "absolute"
  }
})

export const TopSquiggle = (props) => {
  const classes = useStyles()
  return(
    <>
    <div className={classes.root}>
      <img src={topSquiggle} alt="Styled squiggle for top"className={clsx(classes.top, classes.squiggle)}/>
      <Typography variant="h4" className = {classes.title}>
        {props.children}
      </Typography>
    </div>
    <div className={classes.topPlaceholder}/>
    </>
  )
}

export const LoginSquiggle = () => {
  const classes = useStyles()
  return (
    <img src={loginSquiggle} alt="Squiggle for login page" className={clsx(classes.login, classes.squiggle)}/>
  )
}
