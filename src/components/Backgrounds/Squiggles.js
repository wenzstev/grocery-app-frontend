import React from "react"
import topSquiggle from "../../assets/top squiggle.png"
import bottomSquiggle from "../../assets/bottom squiggle.svg"

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
  image: {
    width: "100%",
    height: "12vh",
  }
})

export const TopSquiggle = (props) => {
  const classes = useStyles()
  return(
    <div>
      <img src={topSquiggle} className={classes.image}/>
      <Typography variant="h4" className = {classes.title}>
        {props.children}
      </Typography>
    </div>
  )
}


export const BottomSquiggle = () => {
  return (
    <img src={bottomSquiggle} />
  )
}
